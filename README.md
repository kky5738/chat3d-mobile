# Chat3D: Interactive 3D Reconstruction With the Assistance of Large Language Model
# React Native App with Expo
## Project Overview
LLM과 Generative AI 기반의 반자동 3D 가구 모델링 플랫폼 개발

프로젝트 개요:
LLM 모델을 통해 사용자가 입력한 가구의 프롬프트(텍스트)를 보완 후 Generative AI를 거쳐 해당 가구의 이미지 및 3D 모델링 파일(.obj)를 생성함으로써 사용자의 3D 모델링을 도와주는 프로젝트

프로젝트 내용:
LLM과 Generative AI를 통해 3D 오브젝트를 생성하는 반자동 Text to 3D 프로젝트
- fine-tuned FlanT5를 통한 prompt recommendation을 통해 사용자가 묘사한 텍스트에서 빠진 정보를 보완
- 보완된 텍스트를 기반으로 fine-tuned Stable Diffusion을 통해 다수의 이미지 생성
- 선택적으로 Image Editing을 거쳐 원본 형태를 유지하며 이미지의 스타일 편집 가능
- 사용자가 원하는 이미지를 선택하면 NeRF 기반 모델에서 3D reconstruction 진행

# Graphical Abstract
![chat3d-Graphical abstract](https://github.com/kky5738/chat3d-mobile/assets/74523540/1cdc3e75-eb11-4d59-84e8-ce4daf6969d6)


# Prerequisite for Install
- you may need to node.js, python, pytorch, ubuntu, cuda

# Install

```
git clone https://github.com/kky5738/chat3d-mobile.git
cd chat3d-mobile/
```
## Frontend
- using npm
```
npm install
```
## Backend
```
cd backend/
```
### (Recommended) create a python virtual envirnment(venv)
```
python -m venv venv_chat3d
source venv_chat3d/bin/activate
```
### 1. Install with pip
```
pip install --upgrade pip
pip install -r requirements.txt
```
### 2. using shap-E for 3D generation
```
git clone https://github.com/openai/shap-e.git
cd shap-e/
pip install -e .
cd ..
```
### 3. Optional (but Recommended)
- using pytorch3d rendering
```
# if you need other install ways, check out this repo: https://github.com/facebookresearch/pytorch3d/blob/main/INSTALL.md
pip install "git+https://github.com/facebookresearch/pytorch3d.git"
```

# Environments
- tested on Ubuntu 23.04 Python 3.9 PyTorch 2.0.1+cu117
![nvidia-smi](https://github.com/kky5738/chat3d-mobile/assets/74523540/6ea58504-4f4a-47f6-b187-95da49df51f5)

## 참고 예정
### Dockerize
- [Dockerize](https://yongwookha.github.io/MachineLearning/2021-11-11-dockerize-my-deep-learning-model)
## [threestudio](https://github.com/threestudio-project/threestudio)
https://github.com/threestudio-project/threestudio

- Dreamfusion, Magic3D(코드 미공개), Zero-1-to-3, Magic123 등의 SOTA text to 3d, image to 3d research 통합한 플랫폼 

# 참고한 것들
## HTTPS
1. [openssl 설치](https://4wxyz.tistory.com/entry/Ubuntu%EC%97%90-%EC%B5%9C%EC%8B%A0-%EB%B2%84%EC%A0%84%EC%9D%98-OpenSSL%EC%9D%84-%EC%BB%B4%ED%8C%8C%EC%9D%BC%ED%95%98%EA%B3%A0-%EC%84%A4%EC%B9%98%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)
2. [윈도우 ssl 인증서 발급](https://namjackson.tistory.com/24)
   [리눅스 SSL 인증서](https://coconuts.tistory.com/960)
2. [FastAPI에 HTTPS 적용](https://junah201.medium.com/fastapi%EC%97%90-nginx-%EC%97%86%EC%9D%B4-https-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-2fbf6dc2e0f2)
3. [wget certificate 오류 해결](https://heehehe-ds.tistory.com/entry/Linux-wget-certificate-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0)
- [FastAPI+Traefik+Webserver](https://developer-itspjc.tistory.com/2)
## axios github issue
[axios, RN, ios network issue](https://github.com/axios/axios/issues/3192)
## FastAPI
- [FastAPI tutorial](https://mlops-for-mle.github.io/tutorial/docs/fastapi/overview)
- 
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
### python backend
- [고성능 ML 백엔드를 위한 10가지 Python 성능 최적화 팁](https://hyperconnect.github.io/2023/05/30/Python-Performance-Tips.html#5-pydantic%EC%9D%80-%EC%95%84%EC%A3%BC-%EB%8A%90%EB%A6%AC%EB%8B%A4-%EB%B6%88%ED%95%84%EC%9A%94%ED%95%9C-%EA%B3%B3%EC%97%90%EC%84%9C-%EA%B0%80%EA%B8%89%EC%A0%81-%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80-%EB%A7%90%EC%9E%90)

### VSCode Extensions
- [prettier](https://adjh54.tistory.com/20#google_vignette)
- 
