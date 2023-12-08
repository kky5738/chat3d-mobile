import torch
import fastapi
import base64
import os
import sys
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from datetime import datetime

# for text
from llm.Getprompt import TextProcessingGPT, TextProcessingT5

# for create-image
from diffusion import Diffuse
from io import BytesIO
from PIL import Image
try:
    from rembg import remove
except ImportError:
    print('Please install rembg with "pip install rembg"')
    sys.exit()
    
# for create-3D
from mesh_with_shap_e import create_mesh

middleware = [
    Middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*']
    )
]

app = FastAPI(middleware=middleware)

NER_PATH = 'DeveloperSejin/NER_for_furniture_3D_object_create'
MODEL_PATH = 'DeveloperSejin/Fine_Tuned_Flan-T5-large_For_Describe_Furniture'

class Item(BaseModel):
    query: str
    modelName: str

class Item3D(BaseModel):
    query: str
    ID: str
    modelName: str
 
# for testing
@app.get("/items/")
async def read_item():
    
    print(f"{datetime.now()}, 도착")
    return {"data": "Hello World of FastAPI"}

@app.post("/text/")
def recommend_prompt(item: Item):
    answer = "This is result"
    model_name = item.modelName
    query = item.query
    # 언어모델로 T5을 사용할 경우
    if model_name == "T5":
        # 언어모델 불러오기
        llm_t5 = TextProcessingT5(ner_model = NER_PATH, model_name=MODEL_PATH)
        
        # 언어모델을 통해 prompt 추천 받기
        recommend, answer = llm_t5.get_answer(prompt=query) 
        
        # 메모리 관리를 위해 모델 객체 삭제
        del llm_t5
        
    if answer == -1:
        answer = "not supported"
    
    return {
        "recommend": recommend,
        "answer": answer}

# image를 base64 인코딩하는 함수
def _image_to_base64(image):
    img_byte_array = BytesIO()
    image.save(img_byte_array, format="PNG")
    img_data = img_byte_array.getvalue()
    return base64.b64encode(img_data).decode('utf-8')    
    
@app.post("/image-create/")
def create_image(item: Item):
    # get params
    model_name = item.modelName
    prompt = item.query.split(":")[0]
    
    print(f"This query({prompt}) is requested from client")

    images = []
    for i in range(4):
        # 이미지 생성
        org_img = Diffuse.run2(prompt)

        # 이미지 배경 제거
        removed_img = remove(org_img, alpha_matting=False)

        # base64 인코딩
        image_base64 = _image_to_base64(removed_img)
        
        images.append(image_base64)
    
    print("image is all set")

    # response data 설정
    response_data = {"images": images, "userReqest": prompt}
    
    return JSONResponse(content=response_data)

@app.post("/create-3D/")
def create_3d(item: Item3D):
    # get params
    image_query = item.query
    ID = item.ID
    model_name = item.modelName
      
    print("request arrived, 3D object generating...")
  
    # base64 디코딩
    decoded_img = base64.b64decode(image_query)

    # BytesIO를 사용하여 이미지 데이터를 메모리에 로드
    image_stream = BytesIO(decoded_img)

    # make 3D
    create_mesh(image_stream, str(ID))

    return {"status": "200 OK"}