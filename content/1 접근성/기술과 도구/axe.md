---
publish: true
aliases:
  - axe-core
  - axe DevTools
created: 2026-06-04T04:13:06.681Z
modified: 2026-06-04T05:14:43.387Z
---

# 개요

axe는 웹 콘텐츠의 접근성 문제를 자동으로 점검하는 검사 도구군이다. 보통 브라우저 확장 기능인 axe DevTools, JavaScript 검사 엔진인 axe-core, Playwright 같은 자동화 도구와 함께 쓰는 라이브러리 형태로 만난다.

일반적인 웹사이트 1차 접근성 검사에서는 Playwright로 실제 페이지를 열고, `axe-core`와 `@axe-core/playwright`를 이용해 자동 검사를 실행한다. 이 방식은 사람이 눈으로 페이지를 훑는 것이 아니라, 브라우저에 렌더링된 문서를 기준으로 색 대비, [[ARIA]] 속성, 프레임 이름, 폼 라벨, 영역 구조, 제목 단계 같은 규칙 위반을 찾아내는 방식이다.

# axe가 잘 찾는 것

axe는 기계적으로 판정할 수 있는 접근성 문제를 빠르게 찾는 데 강하다.

- 텍스트와 배경의 색 대비 부족
- 잘못된 ARIA 속성이나 값
- 이름이 없는 iframe
- 라벨이 부족한 폼 입력 요소
- 페이지 영역이 landmark로 묶이지 않은 문제
- 제목 단계가 건너뛰는 문제
- 일부 WCAG A/AA 기준 위반

# axe만으로 알 수 없는 것

axe 결과는 접근성 준수 여부의 최종 판정이 아니다. 자동 점검 도구는 실제 사용자가 겪는 모든 문제를 알 수 없다. 예를 들어 키보드만으로 끝까지 조작할 수 있는지, [[화면 읽기 프로그램]]에서 읽기 순서가 자연스러운지, 확대 화면에서 피로도가 어떤지, 한국어 링크 이름이 문맥상 충분히 설명적인지는 별도 수동 검토가 필요하다.

따라서 axe는 “문제가 없다”를 증명하는 도구라기보다, 먼저 고쳐야 할 문제를 빠르게 드러내고 수정 전후를 비교하기 위한 기준선을 만드는 도구로 보는 것이 안전하다.

# 관련 문서

- [[a11ylab.kr axe 기반 접근성 baseline 리포트]]
- [[알리의 접근성 연구소 웹사이트 접근성 1차 검사 결과]]
- [[Playwright]]
- [[ARIA]]

# 참고 자료

- Deque Systems. (n.d.). _Axe API documentation_. https://www.deque.com/axe/core-documentation/api-documentation/
- Deque University. (n.d.). _Axe Rules_. https://dequeuniversity.com/rules/axe/
