#!/usr/bin/env node
/**
 * 지정 포트를 점유한 리스너를 정리한다.
 *
 * dev 서버가 `--strictPort` 라서 포트가 물려 있으면 대체 포트로 넘어가지 않고 바로 죽는다.
 * IDE 에서 중지 없이 다시 실행하거나 이전 프로세스가 남아 있으면 매번 걸리므로,
 * `predev` 훅으로 붙여 어디서 실행하든(터미널·IDE·CI) 같은 동작을 보장한다.
 */
import { execFileSync } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const SIGTERM_GRACE_MS = 2000;
const POLL_INTERVAL_MS = 100;

const port = Number(process.argv[2]);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('사용법: node scripts/free-port.mjs <port>');
  process.exit(1);
}

/** 해당 포트를 LISTEN 중인 PID 목록. lsof 는 매칭이 없으면 exit 1 이라 빈 배열로 흡수한다. */
function listenerPids() {
  try {
    const out = execFileSync('lsof', ['-ti', `tcp:${port}`, '-sTCP:LISTEN'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    return [
      ...new Set(
        out
          .split('\n')
          .map((line) => Number(line.trim()))
          .filter(Boolean),
      ),
    ];
  } catch {
    return [];
  }
}

function kill(pid, signal) {
  try {
    process.kill(pid, signal);
    return true;
  } catch {
    // 이미 종료됐거나 권한이 없는 경우 — 어느 쪽이든 재시도할 게 없다.
    return false;
  }
}

const initial = listenerPids();
if (initial.length === 0) process.exit(0);

console.log(`포트 ${port} 사용 중 — PID ${initial.join(', ')} 정리`);
initial.forEach((pid) => kill(pid, 'SIGTERM'));

// 정상 종료를 기다렸다가, 남아 있으면 강제 종료한다.
const deadline = Date.now() + SIGTERM_GRACE_MS;
while (Date.now() < deadline) {
  if (listenerPids().length === 0) process.exit(0);
  await sleep(POLL_INTERVAL_MS);
}

const stubborn = listenerPids();
if (stubborn.length > 0) {
  console.log(`종료되지 않아 강제 종료 — PID ${stubborn.join(', ')}`);
  stubborn.forEach((pid) => kill(pid, 'SIGKILL'));
  await sleep(300);
}

if (listenerPids().length > 0) {
  console.error(`포트 ${port} 를 비우지 못했습니다. 점유 프로세스를 직접 확인하세요.`);
  process.exit(1);
}
