---
publish: true
aliases:
  - playwright
created: 2026-06-04T05:20:47.431Z
modified: 2026-06-04T05:59:37.001Z
---

# 개요

Playwright는 웹 브라우저를 자동으로 실행하고 조작할 수 있게 해 주는 테스트·브라우저 자동화 도구다. Chromium, Firefox, WebKit을 지원하며, 웹 애플리케이션의 end-to-end 테스트, 회귀 테스트, 스크린샷 생성, 브라우저 자동화, 접근성 점검 자동화 등에 쓰인다.

웹 페이지는 HTML 파일 하나만으로 동작하지 않는 경우가 많다. JavaScript가 실행되고, 네트워크 요청이 끝나고, 버튼이나 모달 같은 동적 UI가 화면에 나타난 뒤에야 실제 사용자가 만나는 상태가 만들어진다. Playwright는 이런 실제 브라우저 환경을 코드로 재현하고, 그 상태에서 페이지를 열고 조작하고 검사할 수 있게 해 준다.

# 주요 특징

Playwright의 핵심 특징은 다음과 같다.

- 여러 브라우저 엔진을 지원한다. Chromium, Firefox, WebKit에서 같은 테스트를 실행할 수 있다.
- headless 모드와 headed 모드를 모두 지원한다. 화면을 띄우지 않고 자동으로 실행할 수도 있고, 실제 브라우저 창을 보며 디버깅할 수도 있다.
- 사용자가 실제로 보는 방식에 가까운 locator를 제공한다. 예를 들어 역할(role), 라벨, 입력 안내문, 텍스트 등을 기준으로 요소를 찾을 수 있다.
- 페이지 로딩, 요소 표시, 클릭 가능 상태 등을 기다리는 기능이 있어 테스트가 불안정해지는 일을 줄인다.
- 테스트 실행 기록, 스크린샷, trace viewer 같은 디버깅 도구를 제공한다.
- Node.js뿐 아니라 Python, .NET, Java에서도 사용할 수 있다.

# 어디에 쓰이는가

Playwright는 주로 다음과 같은 작업에 쓰인다.

- 웹 애플리케이션의 end-to-end 테스트
- 로그인, 검색, 폼 제출 같은 사용자 흐름 검증
- 여러 브라우저에서 같은 기능이 동작하는지 확인
- 배포 전 smoke test
- 스크린샷 생성과 시각적 회귀 검사
- 크롤링이나 반복 브라우저 작업 자동화
- [[axe]] 같은 접근성 검사 도구와 결합한 자동 점검
- 인공지능 에이전트가 웹 페이지를 탐색하고 조작하는 agentic browsing

# 접근성 점검과의 관계

Playwright 자체가 접근성 검사 엔진은 아니다. 접근성 규칙을 판단하는 역할은 보통 [[axe]] 같은 도구가 맡는다. Playwright는 그 검사를 실행할 브라우저 환경을 준비한다.

Playwright 공식 문서는 `@axe-core/playwright` 패키지를 이용하면 Playwright 테스트 안에서 axe 접근성 검사 엔진을 실행할 수 있다고 설명한다. 이런 자동 검사는 낮은 색 대비, 화면 읽기 프로그램이 식별할 수 있는 이름이 없는 UI 컨트롤과 폼 요소, 보조공학을 혼란스럽게 할 수 있는 중복 ID 같은 문제를 찾는 데 도움이 된다.

다만 자동 접근성 검사는 일부 문제만 잡아낸다. Playwright 문서도 자동 검사가 누락되거나 잘못된 속성 같은 흔한 문제를 찾을 수는 있지만, 많은 접근성 문제는 수동 평가와 포용적 사용자 테스트를 함께 해야 발견할 수 있다고 안내한다. 따라서 Playwright와 axe를 함께 쓰더라도 키보드 흐름, 실제 [[화면 읽기 프로그램]] 사용성, 확대 화면에서의 피로도, 한국어 문맥에서의 링크 의미 같은 항목은 별도 수동 검토가 필요하다.

# 인공지능과 agentic browsing

최근에는 Playwright가 인공지능 에이전트의 웹 탐색 도구로도 쓰인다. 여기서 agentic browsing은 사용자가 하나하나 지시하지 않아도, 에이전트가 목표를 이해하고 웹 페이지를 열고, 버튼을 누르고, 입력하고, 결과를 확인하는 브라우저 조작 흐름을 가리킨다.

Playwright MCP는 이런 흐름을 위해 Playwright를 [[4 인공지능/MCP]] 서버로 제공한다. 공식 문서는 Playwright MCP가 LLM이 웹 페이지와 상호작용할 수 있도록 브라우저 자동화 기능을 제공하며, 스크린샷만 보는 방식이 아니라 구조화된 접근성 스냅샷을 사용한다고 설명한다. 접근성 스냅샷에는 요소의 역할, 이름, 텍스트, 참조값 같은 정보가 들어 있어 에이전트가 “어디를 클릭해야 하는지”를 시각적 추측보다 구조적으로 판단할 수 있다.

이 방식은 화면을 픽셀 이미지로만 해석하는 브라우징보다 안정적일 수 있다. 다만 접근성 트리가 잘 구성되어 있어야 에이전트도 페이지를 잘 이해할 수 있다. 다시 말해, 사람을 위한 접근성 구조는 에이전트가 웹을 이해하는 단서가 되기도 한다.

# 관련 문서

- [[axe]]
- [[4 인공지능/MCP]]
- [[화면 읽기 프로그램]]
- [[접근성]]

# 참고 자료

- Microsoft. (n.d.). _Playwright_. https://playwright.dev/
- Microsoft. (n.d.). _Accessibility testing_. https://playwright.dev/docs/accessibility-testing
- Microsoft. (n.d.). _Playwright MCP_. https://playwright.dev/docs/getting-started-mcp
- Microsoft. (n.d.). _microsoft/playwright-mcp_. GitHub. https://github.com/microsoft/playwright-mcp
