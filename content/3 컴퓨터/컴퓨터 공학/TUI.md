---
publish: true
aliases:
  - Terminal User Interface
  - Text User Interface
  - 터미널 사용자 인터페이스
  - 텍스트 사용자 인터페이스
created: 2026-08-05T12:21:12.441Z
modified: 2026-08-05T12:21:12.452Z
---

# 개요

TUI는 Terminal User Interface 또는 Text User Interface의 줄임말로, [[터미널]]의 문자 셀을 이용해 화면을 구성하는 [[사용자 인터페이스]]이다. 이 문서에서는 터미널에서 실행되는 인터페이스라는 뜻으로 사용한다.

TUI는 글자로 표시되지만 단순한 [[CLI|명령줄 인터페이스]]와는 다르다. CLI가 명령과 결과를 한 줄씩 쌓는 방식이라면, TUI는 화면의 특정 위치를 다시 그리면서 창, 패널, 메뉴, 목록, 대화상자, 입력창, 진행 표시기 같은 구성 요소를 배치한다.

# 특징

TUI는 키보드로 초점을 옮기고 명령을 실행하는 경우가 많으며, 구현에 따라 마우스 입력도 지원한다. `curses`와 `ncurses` 같은 라이브러리는 서로 다른 터미널의 기능을 추상화하여 문자 셀 화면, 키보드·마우스 입력, 색과 표시 속성, 창과 메뉴를 다룬다. 현대적인 TUI 프레임워크는 [[GUI]]처럼 위젯과 이벤트, 레이아웃 체계를 사용하기도 한다.

화면 전체를 매번 출력하지 않고 바뀐 부분만 갱신할 수 있어 복잡한 작업을 한 화면에 모으기 좋다. 반면 대체 화면, 커서 이동, 부분 갱신, 애니메이션을 많이 사용하면 터미널의 스크롤백과 일반적인 선형 출력 흐름이 끊길 수 있다.

# 접근성 관점

TUI는 텍스트 기반이라는 이유만으로 저절로 접근 가능해지지 않는다. 선과 테두리 문자가 구조 대신 잡음으로 읽히거나, 진행 표시기와 실시간 갱신이 같은 내용을 반복해서 읽게 할 수 있다. 시각적으로 구분된 패널과 모달 창도 역할·이름·상태·초점 순서가 전달되지 않으면 [[화면 읽기 프로그램]] 사용자가 구조를 파악하기 어렵다.

접근 가능한 TUI는 키보드만으로 모든 기능을 사용할 수 있어야 하고, 초점의 위치와 상태 변화를 예측 가능한 방식으로 알려야 한다. 애니메이션과 반복 갱신을 끄는 선택지, 스크롤백을 보존하는 선형 출력 또는 화면 읽기 프로그램 모드, 색상에만 의존하지 않는 상태 표시, 오류와 권한 요청의 전체 내용을 확인하는 경로도 필요하다.

# 함께 볼 개념

- [[CLI]]
- [[GUI]]
- [[터미널]]
- [[사용자 인터페이스]]
- [[화면 읽기 프로그램]]

# 참고 자료

- [ncurses — character-cell terminal interface](https://invisible-island.net/ncurses/man/ncurses.3x.html)
- [Textual — App Basics](https://textual.textualize.io/guide/app/)
- [ECMA-48 — Control Functions for Coded Character Sets](https://ecma-international.org/publications-and-standards/standards/ecma-48/)
