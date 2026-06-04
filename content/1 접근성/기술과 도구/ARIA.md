---
publish: true
aliases:
  - Accessible Rich Internet Applications
  - WAI-ARIA
created: 2026-06-04T13:13:34.154+09:00
modified: 2026-06-04T13:13:34.165+09:00
---

# 개요

ARIA는 Accessible Rich Internet Applications의 약자다. 한국어로는 보통 “접근 가능한 리치 인터넷 애플리케이션” 정도로 풀어 설명할 수 있다. 웹 콘텐츠와 웹 애플리케이션이 [[화면 읽기 프로그램]] 같은 [[보조공학기술]]에 더 잘 전달되도록 역할(role), 상태(state), 속성(property)을 추가하는 기술이다.

예를 들어 화면에 접기/펼치기 버튼이 있을 때, 눈으로 보는 사용자는 모양이나 움직임으로 상태를 짐작할 수 있다. 하지만 보조공학기술은 그 버튼이 무엇인지, 현재 펼쳐졌는지, 어떤 영역을 제어하는지 알 수 있어야 한다. 이때 `aria-expanded`, `aria-controls`, `aria-label` 같은 속성이 쓰인다.

# 언제 필요한가

ARIA는 특히 JavaScript로 만든 동적 UI나 HTML만으로 의미를 충분히 표현하기 어려운 사용자 인터페이스에서 필요하다.

- 사용자 정의 버튼, 탭, 메뉴, 슬라이더
- 접기/펼치기 영역
- 실시간으로 바뀌는 상태 메시지
- 입력 오류 안내
- 페이지의 landmark와 보조 영역
- 화면에는 보이지만 HTML 의미가 부족한 복잡한 위젯

# 주의할 점

ARIA는 HTML을 대체하는 기술이 아니다. 먼저 의미에 맞는 HTML 요소를 쓰고, 그래도 부족한 정보가 있을 때 ARIA를 보충해야 한다. MDN은 “필요한 의미와 동작을 가진 네이티브 HTML 요소가 있다면 ARIA보다 그 요소를 쓰라”고 설명한다. 흔히 “나쁜 ARIA보다 ARIA가 없는 편이 낫다”라고 말하는 이유도 여기에 있다.

잘못된 ARIA는 접근성을 높이는 것이 아니라 오히려 망칠 수 있다. 예를 들어 `aria-controls`가 존재하지 않는 ID를 가리키거나, `aria-expanded` 상태가 실제 화면 상태와 다르면 보조공학기술 사용자는 잘못된 정보를 받는다. 따라서 ARIA를 추가할 때는 값이 정확한지, 실제 DOM 구조와 맞는지, 키보드 조작과 상태 변화가 함께 구현되었는지 확인해야 한다.

# 관련 문서

- [[axe]]
- [[Playwright]]
- [[화면 읽기 프로그램]]
- [[보조공학기술]]

# 참고 자료

- W3C Web Accessibility Initiative. (n.d.). _WAI-ARIA Overview_. https://www.w3.org/WAI/standards-guidelines/aria/
- MDN Web Docs. (n.d.). _ARIA - Accessibility_. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
