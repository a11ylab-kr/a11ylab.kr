---
publish: true
created: 2026-06-04T09:01:07.509+09:00
modified: 2026-06-04T12:07:59.798+09:00
tags:
  - "#b8b8b8"
  - "#faf8f8"
  - "#b2b0b0"
---

# a11ylab.kr axe 기반 접근성 baseline 리포트

- 작성일: 2026-06-04 KST
- 대상 사이트: https://a11ylab.kr/
- 작업 디렉터리: `/Users/Andrea/Documents/claude/git/a11ylab.kr`
- 리포트 저장 경로: `/Users/Andrea/Documents/hermes/output/a11ylab-kr-axe-baseline-a11y-profile-2026-06-04.md`
- 원본 축약 JSON 저장 경로: `/Users/Andrea/Documents/hermes/output/a11ylab-kr-axe-baseline-raw-violations-2026-06-04.json`

## 1. 목적과 해석 원칙

이 문서는 현재 라이브 사이트 a11ylab.kr의 접근성 상태를 axe-core 기반 자동 점검으로 baseline화하기 위한 기록이다. 목적은 “현재 접근성 상황이 이렇고, 이후 Quartz 또는 다른 레이어에서 개선해 간다”는 논지의 근거를 남기는 것이다.

이 결과는 자동 점검 결과이며, 접근성 준수 전체를 판정하지 않는다. axe-core는 색 대비, 일부 ARIA 오류, 프레임 이름, landmark 누락, 명시적 폼 라벨 같은 기계적으로 검증 가능한 문제를 잘 찾지만, 실제 키보드 흐름, 화면 읽기 프로그램 사용성, 확대/리플로우 피로도, 한국어 문맥의 링크 의미, 콘텐츠 품질, 동적 검색 모달의 실제 조작 가능성은 별도 수동 검토가 필요하다.

## 2. 검사 환경과 실행 도구

- 실행일시: 2026-06-03T23:56:38.640Z ~ 2026-06-03T23:57:15.559Z UTC, 로컬 기준 2026-06-04 KST
- 실행 위치: macOS, repo 작업 디렉터리 `/Users/Andrea/Documents/claude/git/a11ylab.kr`
- Node.js: v22.17.0
- Playwright: 1.60.0
- axe-core: 4.12.0
- 실행 라이브러리: `@axe-core/playwright` 4.11.3, `axe-core` 4.12.0
- 브라우저: Playwright Chromium headless. 최초 실행 시 브라우저 실행 파일이 없어 `npx playwright install chromium`으로 Chromium/Headless Shell을 내려받은 뒤 재실행하였다.
- 뷰포트: 1366×900 CSS px
- locale: ko-KR
- 검사 태그: `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`, `best-practice`
- 네트워크 기준: 라이브 사이트에 직접 접속하였다. 모든 검사 대상 URL은 HTTP 200으로 응답하였다.

## 3. 대표 URL 선정 기준

`sitemap.xml`에서 확인한 66개 URL 중 홈, 사이트 소개, 주요 카테고리, 접근성 문서, 보조공학 문서, 접근성 브리핑 목록/글, 블로그 목록/글, 알려진 문제점 페이지를 대표 URL 10개로 선정하였다. 단일 글만 보지 않고 Quartz 공통 레이아웃과 서로 다른 콘텐츠 유형을 함께 보려는 기준이다.

| 유형 | URL | HTTP | 위반 rule 수 | 위반 노드 수 | 통과 rule 수 | incomplete rule 수 |
| --- | --- | --- | --- | --- | --- | --- |
| 홈 | <https://a11ylab.kr/> | 200 | 7 | 37 | 41 | 0 |
| 사이트 소개/연구소 | <https://a11ylab.kr/알리의-접근성-연구소> | 200 | 7 | 31 | 41 | 1 |
| 주요 카테고리: 접근성 | <https://a11ylab.kr/1-접근성/접근성> | 200 | 7 | 46 | 41 | 1 |
| 문서: 웹 접근성 | <https://a11ylab.kr/1-접근성/웹-접근성> | 200 | 6 | 44 | 41 | 1 |
| 문서: 화면 읽기 프로그램 | <https://a11ylab.kr/2-보조공학/화면-읽기-프로그램> | 200 | 7 | 32 | 41 | 1 |
| 접근성 브리핑 목록 | <https://a11ylab.kr/접근성-브리핑/접근성-브리핑> | 200 | 7 | 43 | 41 | 1 |
| 접근성 브리핑 대표 글 | <https://a11ylab.kr/접근성-브리핑/접근성-브리핑-제14호> | 200 | 6 | 37 | 41 | 1 |
| 블로그 목록 | <https://a11ylab.kr/blog/알리의-블로그> | 200 | 6 | 31 | 43 | 1 |
| 블로그 대표 글 | <https://a11ylab.kr/blog/WebMCP---웹-접근성의-판도를-바꿀-기술> | 200 | 6 | 33 | 40 | 1 |
| 알려진 문제점/개선점 페이지 | <https://a11ylab.kr/assets/archive/a11ylab.kr-웹-사이트-문제점-및-개선점> | 200 | 6 | 33 | 40 | 1 |

## 4. 핵심 결과 요약

- 검사한 10개 페이지 모두 axe 위반이 감지되었다.
- 페이지별 위반 rule 수는 6~7개, 위반 노드 수는 31~46개 범위였다.
- 전체 위반 노드 수는 367개이다. 단, 같은 공통 레이아웃 문제가 여러 페이지에서 반복 집계되므로 “서로 다른 결함 367개”로 해석하면 안 된다.
- 영향도별 노드 수는 critical 8개, serious 88개, moderate 271개이다.
- 가장 많이 반복된 문제는 landmark 영역 누락(`region`, 244개)이다. 이는 Quartz 레이아웃에서 좌측 탐색, 중앙 콘텐츠, 우측 TOC/그래프, 댓글 영역 등이 명확한 landmark 안에 들어가지 않는 구조와 관련된다.
- 사용자 과업 차단 가능성이 높은 우선순위 이슈는 ① TOC 버튼의 잘못된 `aria-controls`, ② 댓글 iframe의 accessible name 부재 및 iframe 내부 폼 라벨 문제, ③ 저대비 텍스트, ④ main landmark 부재, ⑤ heading order 문제이다.

## 5. axe rule별 집계

| axe rule | 영향도 | 감지 페이지 | 노드 수 | axe help | 관련 태그 |
| --- | --- | --- | --- | --- | --- |
| region | 보통 | 10 | 244 | All page content should be contained by landmarks | - |
| color-contrast | 중대 | 10 | 48 | Elements must meet minimum color contrast ratio thresholds | wcag2aa, wcag143 |
| label-title-only | 중대 | 10 | 30 | Form elements should have a visible label | - |
| landmark-one-main | 보통 | 10 | 20 | Document should have one main landmark | - |
| frame-title | 중대 | 10 | 10 | Frames must have an accessible name | wcag2a, wcag412 |
| aria-valid-attr-value | 치명 | 8 | 8 | ARIA attributes must conform to valid values | wcag2a, wcag412 |
| heading-order | 보통 | 7 | 7 | Heading levels should only increase by one | - |

## 6. 사용자 영향 분석

### 6.1 스크린 리더/키보드 사용자

`landmark-one-main`과 `region` 결과는 페이지의 주요 영역이 보조공학의 빠른 이동 단서로 충분히 구조화되지 않았다는 신호다. 화면 읽기 프로그램 사용자는 landmark 단축키로 main, navigation, complementary, contentinfo 영역을 빠르게 오갈 수 있어야 한다. 현재는 중앙 본문이 `<article>`로 렌더링되지만 `<main>` landmark가 없고, 좌우 사이드바와 일부 콘텐츠가 landmark 밖으로 남는다. 사이트 규모가 커질수록 탐색 비용이 누적될 수 있다.

TOC 접기 버튼의 `aria-controls` 값은 axe에서 critical로 감지되었다. 소스 확인 결과 `TableOfContents.tsx`에서 버튼은 `aria-controls={id}`로 생성된 `toc-*` 값을 참조하지만, 실제 `OverflowListFactory()`가 내부에서 `list-*` id를 다시 부여한다. 이 경우 버튼이 제어한다고 말하는 대상이 DOM에 없으므로 보조공학 사용자는 접기/펼치기 관계를 신뢰하기 어렵다.

댓글 영역은 Cusdis iframe으로 렌더링된다. axe는 iframe 자체에 accessible name이 없다고 보고했고, iframe 내부 입력 필드가 `title`만으로 이름을 제공한다고 보고했다. 사용자는 “이 프레임이 댓글 영역인지”를 먼저 알기 어렵고, iframe 내부 폼에서는 시각적으로 보이는 라벨과 접근성 이름이 일치하지 않을 가능성이 있다.

### 6.2 저시력 사용자

색 대비 문제는 모든 검사 페이지에서 serious로 감지되었다. 대표 예시는 검색 버튼 텍스트 `검색`이 foreground `#b8b8b8`, background `#faf8f8` 조합에서 1.87:1로 측정된 것이다. TOC 링크와 breadcrumb 구분자 등 흐린 회색 텍스트도 일부 감지되었다. 저시력 사용자는 검색 진입점, 현재 위치, 목차 링크를 빠르게 식별해야 하므로 장식적 보조색이라도 기능적 텍스트에는 충분한 대비가 필요하다.

### 6.3 콘텐츠 구조 사용자

`heading-order`는 그래프 뷰 제목 `<h3>그래프 뷰</h3>`에서 반복적으로 감지되었다. 페이지 문맥에서 h2 없이 h3가 등장하면 제목 탐색 사용자가 구조를 오해할 수 있다. 그래프 뷰가 보조 영역이라면 heading level을 주변 구조에 맞추거나, 보조 영역 landmark와 label을 함께 설계해야 한다.

## 7. 우선순위와 개선 방향

### P0: ARIA 관계 무결성 수정

- 대상: `quartz/components/TableOfContents.tsx`, `quartz/components/OverflowList.tsx`
- 근거: `aria-valid-attr-value` critical, 8개 페이지/8개 노드
- 현재 추정 원인: TOC 버튼의 `aria-controls="toc-*"`가 실제 DOM id와 불일치한다. `OverflowListFactory()`가 전달받은 id를 사용하지 않고 내부 `list-*` id로 덮어쓴다.
- 수정 후보: `OverflowListFactory`가 명시적으로 전달된 `id`를 존중하게 하거나, TOC 버튼이 실제 렌더링된 list id를 참조하도록 구조를 단순화한다. 접기/펼치기 스크립트가 같은 id를 쓰는지도 함께 검증한다.
- 재검증: 해당 페이지에서 axe `aria-valid-attr-value`가 사라지는지 확인하고, 키보드로 TOC 버튼을 조작하며 `aria-expanded` 변화와 제어 대상 표시 상태가 일치하는지 확인한다.

### P1: main landmark와 영역 구조 정리

- 대상: `quartz/components/renderPage.tsx`, `quartz/components/Body.tsx`, `quartz/components/pages/Content.tsx`, 좌우 사이드바/푸터 배치
- 근거: `landmark-one-main` 10개 페이지/20개 노드, `region` 10개 페이지/244개 노드
- 수정 후보: 중앙 본문을 `<main id="main-content">`로 감싸고, 필요하다면 기존 `<article>`은 main 내부에 유지한다. 좌측 탐색은 `<nav aria-label="사이트 탐색">`, 우측 목차/그래프는 `<aside aria-label="페이지 보조 정보">` 또는 개별 complementary 영역, 푸터는 `<footer>`로 명확히 배치한다. 단, landmark가 과도하게 많아지지 않도록 label을 일관되게 둔다.
- 재검증: axe `landmark-one-main`, `region` 감소 여부와 VoiceOver rotor/landmark 탐색 순서를 확인한다.

### P1: 댓글 iframe 접근성 보완 또는 조건부 비활성화 검토

- 대상: `quartz/components/Cusdis.tsx`, Cusdis 외부 위젯 설정
- 근거: `frame-title` 10개 페이지/10개 노드, `label-title-only` 10개 페이지/30개 노드
- 수정 후보: 생성된 iframe에 `title="댓글"` 또는 `aria-label="댓글"`이 들어가도록 Cusdis 위젯 옵션 또는 후처리 스크립트를 검토한다. iframe 내부 폼 라벨은 외부 서비스가 제어하므로 직접 수정이 제한될 수 있다. 직접 수정이 어렵다면 댓글 기능 안내, 대체 연락 경로, 또는 댓글 위젯의 접근성 제한을 명시하는 방안을 검토한다.
- 재검증: iframe accessible name, iframe 내부 nickname/email/comment 입력 필드의 name/description을 브라우저 접근성 트리 또는 axe로 확인한다.

### P1: 기능 텍스트 색 대비 조정

- 대상: `quartz.config.ts` theme colors, `quartz/components/styles/search.scss`, `breadcrumbs.scss`, `toc.scss` 등
- 근거: `color-contrast` 10개 페이지/48개 노드, incomplete 9개 페이지/29개 노드
- 수정 후보: 기능적 텍스트에 `var(--gray)` 대신 `var(--darkgray)` 또는 별도의 접근성 보장 토큰을 사용한다. 검색 버튼 placeholder처럼 보이는 텍스트도 실제 버튼 이름이므로 4.5:1 이상을 목표로 한다. breadcrumb 구분자처럼 장식에 가까운 문자는 `aria-hidden="true"` 여부와 시각 대비 요구를 함께 판단한다.
- 재검증: light/dark theme 각각에서 axe contrast와 수동 확대 확인을 수행한다.

### P2: heading order 정리

- 대상: `quartz/components/Graph.tsx` 또는 그래프 컴포넌트 스타일/마크업
- 근거: `heading-order` 7개 페이지/7개 노드
- 수정 후보: 그래프 제목을 주변 구조에 맞는 h2로 올리거나, 보조영역 안에서 제목 구조를 일관되게 만든다. 시각적 크기는 CSS로 조정하고 heading level은 문서 구조 기준으로 결정한다.
- 재검증: heading outline과 화면 읽기 프로그램 제목 탐색 결과를 확인한다.

## 8. 상세 axe 예시

아래 예시는 전체 원본 중 대표 target과 실패 요약만 발췌한 것이다. 전체 violations/incomplete JSON은 `/Users/Andrea/Documents/hermes/output/a11ylab-kr-axe-baseline-raw-violations-2026-06-04.json`에 저장하였다.

### region

- 영향도: 보통
- 감지 페이지: 10개 / 노드: 244개
- axe 설명: All page content should be contained by landmarks
- help URL: https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- 예시:
  - URL: https://a11ylab.kr/
    - target: `.left > div:nth-child(1)`
    - HTML: `<div style="display:flex;flex-direction:column;align-items:center;gap:10px;">`
    - axe failure: Fix any of the following: /   Some page content is not contained by landmarks
  - URL: https://a11ylab.kr/
    - target: `div[data-folderpath="1-접근성/index"] > div`
    - HTML: `<div><a href="./1-접근성/" data-for="1-접근성/index" class="folder-title">1 접근성</a></div>`
    - axe failure: Fix any of the following: /   Some page content is not contained by landmarks
  - URL: https://a11ylab.kr/
    - target: `div[data-folderpath="2-보조공학/index"] > div`
    - HTML: `<div><a href="./2-보조공학/" data-for="2-보조공학/index" class="folder-title">2 보조공학</a></div>`
    - axe failure: Fix any of the following: /   Some page content is not contained by landmarks
  - URL: https://a11ylab.kr/알리의-접근성-연구소
    - target: `.left > div:nth-child(1)`
    - HTML: `<div style="display:flex;flex-direction:column;align-items:center;gap:10px;">`
    - axe failure: Fix any of the following: /   Some page content is not contained by landmarks

### color-contrast

- 영향도: 중대
- 감지 페이지: 10개 / 노드: 48개
- axe 설명: Elements must meet minimum color contrast ratio thresholds
- help URL: https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
- 예시:
  - URL: https://a11ylab.kr/
    - target: `.search-button > p`
    - HTML: `<p>검색</p>`
    - axe failure: Fix any of the following: /   Element has insufficient color contrast of 1.87 (foreground color: #b8b8b8, background color: #faf8f8, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1
  - URL: https://a11ylab.kr/
    - target: `a[data-for="화면-읽기-프로그램-사용자에게"]`
    - HTML: `<a href="#화면-읽기-프로그램-사용자에게" data-for="화면-읽기-프로그램-사용자에게">화면 읽기 프로그램 사용자에게</a>`
    - axe failure: Fix any of the following: /   Element has insufficient color contrast of 2.03 (foreground color: #b2b0b0, background color: #faf8f8, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1
  - URL: https://a11ylab.kr/
    - target: `a[data-for="알려진-문제점"]`
    - HTML: `<a href="#알려진-문제점" data-for="알려진-문제점">알려진 문제점</a>`
    - axe failure: Fix any of the following: /   Element has insufficient color contrast of 2.03 (foreground color: #b2b0b0, background color: #faf8f8, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1
  - URL: https://a11ylab.kr/알리의-접근성-연구소
    - target: `.search-button > p`
    - HTML: `<p>검색</p>`
    - axe failure: Fix any of the following: /   Element has insufficient color contrast of 1.87 (foreground color: #b8b8b8, background color: #faf8f8, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

### label-title-only

- 영향도: 중대
- 감지 페이지: 10개 / 노드: 30개
- axe 설명: Form elements should have a visible label
- help URL: https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright
- 예시:
  - URL: https://a11ylab.kr/
    - target: `iframe > input[name="nickname"]`
    - HTML: `<input name="nickname" class="w-full p-2 border border-gray-200 bg-transparent dark:text-gray-100 dark:outline-none" type="text" title="닉네임">`
    - axe failure: Fix all of the following: /   Only title used to generate label for form element
  - URL: https://a11ylab.kr/
    - target: `iframe > input[name="email"]`
    - HTML: `<input name="email" class="w-full p-2 border border-gray-200 bg-transparent dark:text-gray-100 dark:outline-none" type="email" title="이메일 (선택)">`
    - axe failure: Fix all of the following: /   Only title used to generate label for form element
  - URL: https://a11ylab.kr/
    - target: `iframe > textarea`
    - HTML: `<textarea name="reply_content" class="w-full p-2 border border-gray-200 h-24 bg-transparent dark:text-gray-100 dark:outline-none" title="댓글..."></textarea>`
    - axe failure: Fix all of the following: /   Only title used to generate label for form element
  - URL: https://a11ylab.kr/알리의-접근성-연구소
    - target: `iframe > input[name="nickname"]`
    - HTML: `<input name="nickname" class="w-full p-2 border border-gray-200 bg-transparent dark:text-gray-100 dark:outline-none" type="text" title="닉네임">`
    - axe failure: Fix all of the following: /   Only title used to generate label for form element

### landmark-one-main

- 영향도: 보통
- 감지 페이지: 10개 / 노드: 20개
- axe 설명: Document should have one main landmark
- help URL: https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright
- 예시:
  - URL: https://a11ylab.kr/
    - target: `html`
    - HTML: `<html lang="ko" dir="ltr" saved-theme="light" reader-mode="off">`
    - axe failure: Fix all of the following: /   Document does not have a main landmark
  - URL: https://a11ylab.kr/
    - target: `iframe > html`
    - HTML: `<html style="color-scheme: light;">`
    - axe failure: Fix all of the following: /   Document does not have a main landmark
  - URL: https://a11ylab.kr/알리의-접근성-연구소
    - target: `html`
    - HTML: `<html lang="ko" dir="ltr" saved-theme="light" reader-mode="off">`
    - axe failure: Fix all of the following: /   Document does not have a main landmark
  - URL: https://a11ylab.kr/알리의-접근성-연구소
    - target: `iframe > html`
    - HTML: `<html style="color-scheme: light;">`
    - axe failure: Fix all of the following: /   Document does not have a main landmark

### frame-title

- 영향도: 중대
- 감지 페이지: 10개 / 노드: 10개
- axe 설명: Frames must have an accessible name
- help URL: https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright
- 예시:
  - URL: https://a11ylab.kr/
    - target: `iframe`
    - HTML: `<iframe srcdoc="<!DOCTYPE html> <htm..." style="width: 100%; border:...">`
    - axe failure: Fix any of the following: /   Element has no title attribute /   aria-label attribute does not exist or is empty /   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty /   Element's default semantics were not overridden with role="none" or role="presentation"
  - URL: https://a11ylab.kr/알리의-접근성-연구소
    - target: `iframe`
    - HTML: `<iframe srcdoc="<!DOCTYPE html> <htm..." style="width: 100%; border:...">`
    - axe failure: Fix any of the following: /   Element has no title attribute /   aria-label attribute does not exist or is empty /   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty /   Element's default semantics were not overridden with role="none" or role="presentation"
  - URL: https://a11ylab.kr/1-접근성/접근성
    - target: `iframe`
    - HTML: `<iframe srcdoc="<!DOCTYPE html> <htm..." style="width: 100%; border:...">`
    - axe failure: Fix any of the following: /   Element has no title attribute /   aria-label attribute does not exist or is empty /   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty /   Element's default semantics were not overridden with role="none" or role="presentation"
  - URL: https://a11ylab.kr/1-접근성/웹-접근성
    - target: `iframe`
    - HTML: `<iframe srcdoc="<!DOCTYPE html> <htm..." style="width: 100%; border:...">`
    - axe failure: Fix any of the following: /   Element has no title attribute /   aria-label attribute does not exist or is empty /   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty /   Element's default semantics were not overridden with role="none" or role="presentation"

### aria-valid-attr-value

- 영향도: 치명
- 감지 페이지: 8개 / 노드: 8개
- axe 설명: ARIA attributes must conform to valid values
- help URL: https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright
- 예시:
  - URL: https://a11ylab.kr/
    - target: `.toc-header`
    - HTML: `<button type="button" class="toc-header" aria-controls="toc-16" aria-expanded="true">`
    - axe failure: Fix all of the following: /   Invalid ARIA attribute value: aria-controls="toc-16"
  - URL: https://a11ylab.kr/알리의-접근성-연구소
    - target: `.toc-header`
    - HTML: `<button type="button" class="toc-header" aria-controls="toc-18" aria-expanded="true">`
    - axe failure: Fix all of the following: /   Invalid ARIA attribute value: aria-controls="toc-18"
  - URL: https://a11ylab.kr/1-접근성/접근성
    - target: `.toc-header`
    - HTML: `<button type="button" class="toc-header" aria-controls="toc-2" aria-expanded="true">`
    - axe failure: Fix all of the following: /   Invalid ARIA attribute value: aria-controls="toc-2"
  - URL: https://a11ylab.kr/2-보조공학/화면-읽기-프로그램
    - target: `.toc-header`
    - HTML: `<button type="button" class="toc-header" aria-controls="toc-4" aria-expanded="true">`
    - axe failure: Fix all of the following: /   Invalid ARIA attribute value: aria-controls="toc-4"

### heading-order

- 영향도: 보통
- 감지 페이지: 7개 / 노드: 7개
- axe 설명: Heading levels should only increase by one
- help URL: https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright
- 예시:
  - URL: https://a11ylab.kr/
    - target: `.graph > h3`
    - HTML: `<h3>그래프 뷰</h3>`
    - axe failure: Fix any of the following: /   Heading order invalid
  - URL: https://a11ylab.kr/알리의-접근성-연구소
    - target: `.graph > h3`
    - HTML: `<h3>그래프 뷰</h3>`
    - axe failure: Fix any of the following: /   Heading order invalid
  - URL: https://a11ylab.kr/1-접근성/접근성
    - target: `#관련-정보`
    - HTML: `<h3 id="관련-정보">`
    - axe failure: Fix any of the following: /   Heading order invalid
  - URL: https://a11ylab.kr/1-접근성/웹-접근성
    - target: `.graph > h3`
    - HTML: `<h3>그래프 뷰</h3>`
    - axe failure: Fix any of the following: /   Heading order invalid

## 9. 도구 실행 중 발생한 실패와 차단

- `@axe-core/playwright` 설치 후 첫 실행은 Playwright Chromium 실행 파일이 없어 실패하였다. 오류는 “Executable doesn't exist … Please run npx playwright install”이었다. 이후 `npx playwright install chromium`을 실행하고 재검사에 성공하였다.
- Python `urllib.request`로 `https://a11ylab.kr/sitemap.xml`을 직접 읽는 시도는 HTTP 403으로 실패하였다. `curl -A 'Mozilla/5.0 Hermes axe baseline research'`로 같은 sitemap을 가져오는 방식은 성공하였다.
- 패키지 버전 확인용 Node 스크립트에서 `require('@axe-core/playwright/package.json')`는 패키지 exports 제한 때문에 실패하였다. 실제 버전은 `npm list --depth=0 --json`으로 확인하였다.
- `@axe-core/cli`는 사용하지 않았다. 이번 baseline은 `@axe-core/playwright`와 `axe-core` 기반으로 수행하였다. 이유는 라이브 사이트의 SPA/동적 위젯 로딩과 iframe 포함 상태를 Playwright 브라우저 문맥에서 안정적으로 기다린 뒤 검사하기 위해서다.

## 10. 한계

1. 이 baseline은 1366×900 desktop viewport 한 번의 상태만 본다. 모바일, 200%/400% 확대, 텍스트 간격, prefers-reduced-motion, 다크 모드, 고대비 모드는 별도 검사가 필요하다.
2. axe 결과는 자동 검출 가능한 문제만 포함한다. 키보드만으로 검색 모달, explorer, graph, 댓글 iframe을 실제 사용할 수 있는지는 별도 수동 검토가 필요하다.
3. iframe 내부 댓글 UI는 외부 Cusdis 서비스의 DOM을 포함한다. 소스 수정 가능 범위가 Quartz 로컬 컴포넌트와 외부 위젯 설정/후처리로 나뉜다.
4. 여러 페이지에서 반복된 노드 수는 공통 레이아웃 결함이 페이지마다 반복 집계된 결과다. 수정 우선순위는 노드 수뿐 아니라 핵심 과업 차단, 보조공학 영향, 수정 난이도를 함께 봐야 한다.
5. 이 리포트는 live site 결과다. repo의 현재 로컬 브랜치와 live 배포본이 완전히 같은지 별도로 확인하지 않았다.

## 11. 재검증 명령 기록

이번 작업에서 실제 실행한 핵심 명령은 다음과 같다.

```bash
cd /Users/Andrea/Documents/claude/git/a11ylab.kr
/Users/Andrea/.nvm/versions/node/v22.17.0/bin/node -v
/Users/Andrea/.nvm/versions/node/v22.17.0/bin/npm -v
curl -L --fail --silent --show-error https://a11ylab.kr/sitemap.xml | head -n 40

cd /tmp/a11ylab-axe-baseline-20260604-run
/Users/Andrea/.nvm/versions/node/v22.17.0/bin/npm init -y
/Users/Andrea/.nvm/versions/node/v22.17.0/bin/npm install playwright @axe-core/playwright axe-core --no-audit --no-fund
/Users/Andrea/.nvm/versions/node/v22.17.0/bin/npm list --depth=0 --json
/Users/Andrea/.nvm/versions/node/v22.17.0/bin/npx playwright install chromium
/Users/Andrea/.nvm/versions/node/v22.17.0/bin/node /tmp/a11ylab-axe-baseline-20260604-run/run-axe.cjs /tmp/a11ylab-axe-baseline-20260604-run/axe-results.json
```

## 12. 다음 단계 제안

1. 먼저 P0/P1 공통 레이아웃 문제를 Quartz 레이어에서 수정한다. 특히 TOC `aria-controls`, `<main>` landmark, Cusdis iframe title, 기능 텍스트 대비를 우선 처리한다.
2. 수정 후 같은 10개 URL에 대해 동일 스크립트로 재검사하여 baseline 대비 rule/node 감소량을 기록한다.
3. 그 다음 수동 검토를 추가한다. 권장 조합은 키보드 순회, VoiceOver rotor landmark/heading/link 점검, 200%/400% 확대, mobile viewport, light/dark theme 비교다.
4. 장기적으로는 Playwright + axe 검사를 CI 또는 배포 전 smoke test에 넣되, 외부 댓글 iframe의 통제 불가능 이슈는 별도 allowlist와 설명을 둔다.
