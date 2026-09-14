# greyo-frontend

그래요(GREYO) 브랜드 소개 홈페이지. 원페이지 스크롤, 한국어, 데스크톱 우선 반응형.

## 스택

React Router v8 framework mode (SPA + prerender) · Vite 8 · React 19 · Tailwind v4 (CSS-first) · TypeScript 6

## 실행

```bash
npm install
npm run dev        # http://localhost:3300
```

| 스크립트            | 설명                                        |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | 개발 서버 (3300)                            |
| `npm run build`     | 프로덕션 빌드 → `presentation/build/client` |
| `npm run preview`   | 빌드 결과 확인                              |
| `npm run lint`      | ESLint                                      |
| `npm run typecheck` | 라이브러리 레이어 + presentation 타입 검사  |
| `npm run format`    | Prettier                                    |

JetBrains IDE 를 쓰면 `.idea/runConfigurations/` 의 dev · build · preview · lint · typecheck 설정이 그대로 잡힌다. 두 가지가 지켜져야 Android Studio 에서도 동작한다 — skel-frontend 의 `web dev` 설정과 같은 방식이다.

- **타입은 `ShConfigurationType`(Shell Script)** — 전 JetBrains IDE 기본 내장. npm 타입(`js.build_tools.npm`)은 JavaScript 플러그인이 있는 WebStorm·IntelliJ Ultimate 에서만 인식되고, Android Studio 는 **에러 없이 조용히 무시**한다.
- **npm 은 절대경로로 호출**(`/opt/homebrew/bin/npm`) — IDE 가 띄우는 셸에 homebrew PATH 가 없을 수 있다.

설정이 목록에 안 보이면 **File → Reload All from Disk**(⌥⌘Y). `workspace.xml` 의 `autoReloadType` 이 `NONE` 이라 외부에서 추가한 `.idea` 파일은 자동으로 읽지 않는다.

## 아키텍처

npm workspaces + Turborepo. 의존 방향은 아래로만 흐른다.

```
entities ── 브랜드 콘텐츠 모델 (BrandContent). 의존성 없음
core ────── 순수 유틸·브랜드 상수. 의존성 없음
    ↓
application ── 유스케이스·리포지토리 인터페이스
    ↓
infrastructure ── 데이터소스 구현 + .env 소유
    ↓
di ──────── 합성 루트. 구현체를 유스케이스에 배선하는 유일한 지점
    ↓
presentation ── view data + React Router 앱 (design-system · assets 소비)
```

- 외부 의존성은 **루트 `package.json` 에서만** 정확한 버전으로 선언한다(`^`·`~` 금지). 하위 workspace 는 `@greyo-frontend/*` 내부 패키지만 명시한다.
- `presentation` 은 `@greyo-frontend/infrastructure` 를 직접 import 할 수 없다 — ESLint 가 막는다. `di` 를 경유한다.
- `entities` · `core` 는 최하위 레이어라 다른 레이어를 참조할 수 없다 — 역시 ESLint 가 막는다.
- `design-system` 은 도메인 타입을 모른다. 평범한 props 만 받으므로 `entities` 에 의존하지 않는다.

### 콘텐츠 / view data 분리

**`entities` 에는 "브랜드가 무엇으로 이루어져 있는가" 만 둔다** — 3원칙, 어족, 서비스 8종, 결핍 6종, 시장 통계 같은 항목과 그 문구. 값은 `infrastructure/src/brand/staticBrandContent.ts` 가 공급한다. CMS·API 가 생기면 `BrandContentRepository` 구현만 추가하고 `di/src/container.ts` 조립부를 바꾼다.

**"화면이 그걸 어떻게 서술하는가" 는 `presentation/src/app/viewData/` 가 소유한다.**

|           | 위치                            | 예                                                                        |
| --------- | ------------------------------- | ------------------------------------------------------------------------- |
| 콘텐츠    | `entities` + `infrastructure`   | 서비스 8종, 결핍 6종, 어족 구성원                                         |
| 서술 카피 | `viewData/pageCopy.ts`          | eyebrow, 섹션 헤드라인, 리드, 각종 라벨                                   |
| 시각 결정 | `viewData/brandPageViewData.ts` | 다크 카드로 세울 비교군, 피치 배경 카드, 오렌지 강조 통계, 좌우 컬럼 분배 |

`highlight`·`isBrand`·`emphasis` 같은 플래그는 콘텐츠가 아니라 화면 결정이므로 `buildBrandPageViewData()` 가 만들어 넣는다. 섹션 컴포넌트는 판단 없이 렌더만 한다.

> 이름이 **ViewData** 인 이유 — 상태를 들고 있는 MVVM 의 ViewModel 이 아니라 렌더 시점에 만들어지는 순수 데이터다.

### 강조 표기

콘텐츠 문자열의 `**…**` 는 "이 구간이 강조" 라는 의미 표기일 뿐이고, 그걸 브랜드 오렌지로 그리는 결정은 `greyo.css` 의 `.greyo-site em` 이 한다. 파싱은 `design-system` 의 `renderRichText()` 가 맡는다(`\n` → `<br />` 도 함께).

## 프리렌더 계약 (중요)

`ssr: false` + `prerender: ['/']` 로 빌드해 **본문이 박힌 정적 HTML** 을 만든다. 검색엔진과 카카오톡 OG 스크레이퍼가 빈 hydration 셸을 보지 않게 하려는 것이다.

그래서 홈 라우트는 `loader` 를 쓰지 않고 렌더 중 DI 에서 콘텐츠를 **동기로** 읽는다. loader 를 붙이면 프리렌더 시점에 값이 없어 HTML 이 4KB 짜리 빈 셸로 떨어진다. CI 가 `index.html` 에 실제 한글 본문이 있는지 검사한다.

CMS 도입 시에는 loader 를 되살리는 대신 `ssr: true` + 빌드타임 loader 로 전환한다.

## 배포 (Vercel)

정적 출력이라 서버리스 런타임이 필요 없다.

| 설정             | 값                          |
| ---------------- | --------------------------- |
| Framework Preset | Vite                        |
| Build Command    | `npm run build`             |
| Output Directory | `presentation/build/client` |
| Install Command  | `npm ci`                    |

환경변수 `VITE_SITE_URL` 에 실제 도메인을 넣어야 canonical·OG 가 올바른 절대 URL 로 나온다. `infrastructure/.env.example` 참고.

`vercel.json` 의 rewrite 는 정적 파일이 없는 경로만 `__spa-fallback.html` 로 보낸다 — `/` 는 프리렌더된 `index.html` 이 그대로 서빙되고, 나머지는 클라이언트에서 404 를 그린다.
