---
publish: true
aliases:
  - 검색 증강 생성
created: 2025-03-20T09:57:33.106+09:00
modified: 2026-05-05T16:02:04.877+09:00
---

Retrieval-Augmented Generation

# 개요

RAG(Retrieval-Augmented Generation)은 검색 기반 방법과 생성형 언어 모델을 결합하여 AI가 생성하는 콘텐츠의 정확성과 신뢰성을 높이는 기술이다. 이 시스템은 실시간 데이터 검색과 고급 증강 기술을 활용해 환각(hallucination)이나 오래된 정보 문제를 완화하며 외부 지식 소스를 통해 최신성과 정확성을 보장한다.

RAG의 주요 구성 요소로는 텍스트를 벡터로 변환해 의미 유사성을 검색하는 벡터 공간 모델, BM25와 같은 전통적인 검색 알고리즘, Elasticsearch 및 FAISS와 같은 도구가 있다. 또한, 생성된 콘텐츠의 신뢰성을 높이기 위해 코사인 유사성, 인간 검증(HITL), 신경망 기반 검증 등의 증강 메커니즘이 사용된다.

# 관련 자료

- [What is retrieval-augmented generation (RAG)? - IBM Research](https://research.ibm.com/blog/retrieval-augmented-generation-RAG)
