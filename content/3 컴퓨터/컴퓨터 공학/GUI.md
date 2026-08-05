---
publish: true
aliases:
  - Graphical User Interface
  - 그래픽 사용자 인터페이스
  - 그래픽 유저 인터페이스
created: 2026-08-05T12:21:12.436Z
modified: 2026-08-05T12:22:15.370Z
---

# 개요

GUI는 Graphical User Interface의 줄임말로, 창, 아이콘, 메뉴, 버튼 같은 시각적 객체를 배치해 명령을 받고 결과를 보여 주는 [[사용자 인터페이스]]이다. 사용자는 마우스와 포인터뿐 아니라 키보드, 터치, 펜, 음성 입력 등으로 GUI를 조작할 수 있다.

GUI에서 중요한 것은 그림을 보여 주는 일만이 아니다. 객체의 위치와 크기, 선택 상태, 계층과 관계, 사용자가 할 수 있는 행동을 화면에 조직하고 변화에 대한 피드백을 제공하는 것이 핵심이다.

# 특징

GUI는 사용자가 대상을 가리키고 선택하거나 끌어 놓는 직접 조작, 여러 창과 작업 영역을 한꺼번에 보는 공간 배치, 아이콘·색상·크기·위치에 따른 시각적 위계를 활용한다. 명령어를 외우지 않아도 화면에서 가능한 행동을 발견하기 쉽지만, 객체와 상태가 많아질수록 인터페이스의 구조도 복잡해질 수 있다.

1970년대 Xerox PARC의 Alto와 Smalltalk 환경은 겹치는 창, 팝업 메뉴, 마우스로 제어하는 그래픽 환경을 발전시켰다. 이러한 요소는 이후 Apple Lisa와 Macintosh, Microsoft Windows를 비롯한 개인용 컴퓨터의 GUI에 큰 영향을 미쳤다.

# 접근성 관점

GUI의 접근성은 화면의 픽셀만으로 성립하지 않는다. 운영체제의 접근성 API가 각 객체의 역할·이름·상태·값·가능한 행동과 객체 사이의 관계를 프로그램이 읽을 수 있는 구조로 제공해야 한다. [[화면 읽기 프로그램]]은 이 정보를 이용해 버튼과 메뉴, 대화상자와 문서 영역을 음성이나 점자로 다시 구성한다.

키보드만으로 모든 기능에 접근할 수 있어야 하며, 초점 위치와 이동 순서는 화면 배치와 작업 흐름에 맞아야 한다. 색상이나 위치에만 의존하지 않는 상태 표시, 충분한 대비와 글자 크기 조절, 확대했을 때도 유지되는 구조가 필요하다. 직접 그린 사용자 정의 객체도 접근성 이름과 역할, 상태, 동작을 별도로 노출해야 한다.

# 함께 볼 개념

- [[CLI]]
- [[TUI]]
- [[사용자 인터페이스]]
- [[화면 읽기 프로그램]]

# 참고 자료

- [Computer History Museum — Introducing the Smalltalk Zoo](https://computerhistory.org/blog/introducing-the-smalltalk-zoo-48-years-of-smalltalk-history-at-chm/)
- [Microsoft — UI Automation](https://learn.microsoft.com/en-us/windows/win32/winauto/entry-uiauto-win32)
- [Apple Human Interface Guidelines — Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)
