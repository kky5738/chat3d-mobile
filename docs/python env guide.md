## python, conda 가상환경을 이용한 python 버전 관리 트릭
## Managing Python versions using virtual environments with Conda tricks.
1. 파이썬 3.9 버전의 conda 가상환경 생성 후 activate
```bash
conda create -n py39 python==3.9
conda activate py39
```
2. 프로젝트 디렉토리에서 파이썬 가상환경(venv) 생성
```bash
cd YOUR_PROJECT_DIR

# ./YOUR_PROJECT_DIR/.venv 디렉토리가 생성됨
python -m venv .venv # or python3 -m venv .venv
```
3. conda 가상환경 deactivate 후 venv activate
```bash
conda deactivate

# 리눅스 환경일 경우
source .venv/bin/activate

# 윈도우일 경우
source .venv\Scripts\activate.bat

# pip 최신버전으로 업그레이드, 리눅스 윈도우 모두 동일
pip install --upgrade pip
```
