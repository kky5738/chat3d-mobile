# React Native App with Expo
## Project Overview
Welcome to this repository showcasing a React Native application developed using Expo and FastAPI. This example app focuses on demonstrating effective deployment strategies for web and mobile machine learning (ML) applications. The core functionality involves serving ML models, and while the current setup deploys diffusion models, it's easily configurable to support various ML workloads.

이 저장소에는 Expo 및 FastAPI를 사용하여 구축된 React Native 애플리케이션이 포함되어 있습니다. 이 예시 앱은 웹 및 모바일 ML 애플리케이션의 배포 전략을 시연하기 위한 것입니다. 현재 설정은 확산 모델을 배포하지만 다양한 ML 워크로드를 지원하도록 쉽게 구성할 수 있습니다.
## Environments
### Optional
- using pytorch3d rendering
```
# if you need other install ways, check out this repo: https://github.com/facebookresearch/pytorch3d/blob/main/INSTALL.md
pip install "git+https://github.com/facebookresearch/pytorch3d.git"
```


## Trouble Shoot
- If you encounter below error
```
ModuleNotFoundError: Refer to https://github.com/facebookresearch/xformers for more information on how to install xformers
```
Then:
	Install xformers


아래 내용 reference 파일 만들어서 옮기기
## 참고 예정
### Dockerize
- [Dockerize](https://yongwookha.github.io/MachineLearning/2021-11-11-dockerize-my-deep-learning-model)

## [threestudio](https://github.com/threestudio-project/threestudio)
https://github.com/threestudio-project/threestudio

- Dreamfusion, Magic3D(코드 미공개), Zero-1-to-3, Magic123 등의 SOTA text to 3d, image to 3d research 통합한 플랫폼 


## 참고한 것들
### HTTPS
1. [openssl 설치](https://4wxyz.tistory.com/entry/Ubuntu%EC%97%90-%EC%B5%9C%EC%8B%A0-%EB%B2%84%EC%A0%84%EC%9D%98-OpenSSL%EC%9D%84-%EC%BB%B4%ED%8C%8C%EC%9D%BC%ED%95%98%EA%B3%A0-%EC%84%A4%EC%B9%98%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)
2. [윈도우 ssl 인증서 발급](https://namjackson.tistory.com/24)
   [리눅스 SSL 인증서](https://coconuts.tistory.com/960)
2. [FastAPI에 HTTPS 적용](https://junah201.medium.com/fastapi%EC%97%90-nginx-%EC%97%86%EC%9D%B4-https-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-2fbf6dc2e0f2)
3. [wget certificate 오류 해결](https://heehehe-ds.tistory.com/entry/Linux-wget-certificate-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0)
- [FastAPI+Traefik+Webserver](https://developer-itspjc.tistory.com/2)
## Docker
- [[Docker 설치 및 환경설정]]
### axios github issue
[axios, RN, ios network issue](https://github.com/axios/axios/issues/3192)

## GIT
### Branch 관리
- [git-flow 종류](https://github.com/gyoogle/tech-interview-for-developer/blob/master/ETC/Git%20vs%20GitHub%20vs%20GitLab%20Flow.md)
- [branch & naming](https://velog.io/@kim-jaemin420/Git-branch-naming)
- [about PR(Pull Request)](https://mine-it-record.tistory.com/692)
- [git commit message/PR 잘 쓰는 법](https://velog.io/@ye-ji/Git-PR-%EC%9E%98-%EC%93%B0%EB%8A%94-%EB%B0%A9%EB%B2%95)
	- PR 템플릿
```
### PR 타입(하나 이상의 PR 타입을 선택해주세요)
- [ ] 기능 추가
- [ ] 기능 삭제
- [ ] 버그 수정
- [ ] 의존성, 환경 변수, 빌드 관련 코드 업데이트

### 반영 브랜치
ex) feat/login -> dev

### 변경 사항
ex) 로그인 시, 구글 소셜 로그인 기능을 추가했습니다.
```

## Obsidian
- [옵시디언 깃 연동](https://g4daclom.tistory.com/134)
- [옵시디언 Task 관리](https://medium.com/@totuworld/obisidian으로-밀려오는-일감-관리하기-119b51536e73)

## Python
### Module, Package 이해
https://livetodaykono.tistory.com/20
https://livetodaykono.tistory.com/22

### VSCode Extensions
- prettier https://adjh54.tistory.com/20#google_vignette
- 