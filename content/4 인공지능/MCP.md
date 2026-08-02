---
publish: true
aliases:
  - Model Context Protocol
  - 모델 컨텍스트 프로토콜
created: 2026-06-04T05:21:17.186Z
modified: 2026-06-04T05:21:17.189Z
---

# 개요

MCP는 Model Context Protocol의 약자다. 인공지능 애플리케이션이나 에이전트가 외부 시스템과 연결될 수 있도록 만든 공개 표준이다.

MCP를 사용하면 AI 도구가 로컬 파일, 데이터베이스, 검색 도구, 계산기, 캘린더, 디자인 도구, 브라우저 자동화 도구 같은 외부 자원과 표준화된 방식으로 연결될 수 있다. 공식 문서는 MCP를 “AI 애플리케이션을 위한 USB-C 포트”에 비유한다. 각 도구가 제각각 연결 방식을 만들지 않고, 공통된 규격으로 데이터와 도구를 주고받게 하려는 개념이다.

# 구조

MCP는 보통 클라이언트와 서버 구조로 동작한다.

- MCP 클라이언트: AI 애플리케이션이나 에이전트 쪽에서 MCP 서버에 연결하는 구성 요소
- MCP 서버: 파일, 데이터베이스, 브라우저, 업무 도구 같은 외부 기능을 AI가 사용할 수 있는 도구로 노출하는 구성 요소

예를 들어 [[Playwright]] MCP 서버는 브라우저 자동화 기능을 MCP 도구로 제공한다. 그러면 MCP를 지원하는 에이전트는 브라우저를 열고, 페이지 구조를 읽고, 버튼을 누르고, 입력하는 작업을 표준화된 도구 호출로 수행할 수 있다.

# 관련 문서

- [[Playwright]]

# 참고 자료

- Model Context Protocol. (n.d.). _What is the Model Context Protocol (MCP)?_ https://modelcontextprotocol.io/
