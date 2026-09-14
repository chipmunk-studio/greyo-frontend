#!/usr/bin/env node
/**
 * OG 이미지 생성 — scripts/og-image.html 을 1200×630 PNG 으로 캡처한다.
 *
 * 디자인을 바꾸려면 HTML 을 고치고 이 스크립트를 다시 돌린다.
 * PNG 을 손으로 관리하면 카피가 바뀔 때마다 이미지가 뒤처진다.
 *
 * 헤드리스 크롬을 쓰는 이유 — macOS 에 rsvg/ImageMagick 이 없고, 한글 조판을
 * 정확히 렌더할 수 있는 게 브라우저뿐이다.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, renameSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(ROOT, 'scripts', 'og-image.html');
const OUTPUT = join(ROOT, 'presentation', 'public', 'og.png');
const SIZE = { width: 1200, height: 630 };

/** 설치 위치가 갈리는 크로미움 계열을 순서대로 찾는다. */
const CANDIDATES = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];

const chrome = CANDIDATES.find((path) => existsSync(path));
if (!chrome) {
  console.error('크롬 계열 브라우저를 찾지 못했습니다. 아래 중 하나가 필요합니다:');
  CANDIDATES.forEach((path) => console.error(`  ${path}`));
  process.exit(1);
}

if (!existsSync(SOURCE)) {
  console.error(`원본이 없습니다: ${SOURCE}`);
  process.exit(1);
}

// 캡처는 --user-data-dir 아래에 쓰이므로 임시 프로필을 만들고 끝나면 지운다.
const profile = mkdtempSync(join(tmpdir(), 'greyo-og-'));
const captured = join(profile, 'screenshot.png');

try {
  execFileSync(
    chrome,
    [
      // --headless=new 는 --screenshot 후 프로세스가 종료되지 않는다. 구형 헤드리스를 쓴다.
      '--headless',
      '--disable-gpu',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--allow-file-access-from-files',
      `--user-data-dir=${profile}`,
      `--window-size=${SIZE.width},${SIZE.height}`,
      `--screenshot=${captured}`,
      // 폰트 로드가 끝나기 전에 캡처되면 시스템 폰트로 찍힌다.
      '--virtual-time-budget=4000',
      `file://${SOURCE}`,
    ],
    // 콜드 스타트에서 프로필 생성까지 겹치면 1분을 넘기기도 한다.
    { stdio: ['ignore', 'ignore', 'pipe'], timeout: 240_000 },
  );

  if (!existsSync(captured)) throw new Error('크롬이 캡처 파일을 만들지 못했습니다.');
  renameSync(captured, OUTPUT);
  console.log(`생성 완료 — ${OUTPUT} (${SIZE.width}×${SIZE.height})`);
} catch (error) {
  console.error('OG 이미지 생성 실패:', error.message);
  process.exit(1);
} finally {
  rmSync(profile, { recursive: true, force: true });
}
