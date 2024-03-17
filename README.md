<p align='center'> More Than Language | JOINUSWORLD </p>

<br>

> [기존 JOINUSWORLD 웹페이지](https://www.joinusworld.org/)의 리뉴얼 프로젝트입니다.

<br>

## 1. 프로젝트 구조 및 로컬 실행

### (1) 모노레포

- nx, yarn berry로 관리
- 워크스페이스 : packages(shared), services

<img width="850" alt="image" src="https://github.com/JOINUS-WORLD/joinusworld-front/assets/125176463/4df85101-db4d-4d4b-82b4-236878ecb66c">


<br>

### (2) Service 실행

#### @join-world/web

- services/web 위치에서 아래 CLI 입력

```
yarn dev
```

<br>

#### @join-world/storybook

- storybook dev 모드에서는 변경사항이 바로바로 적용됨
- root 위치에서 아래 CLI 입력

```
yarn dev:all
```

<br>

### (3) docker

- 개발 중
