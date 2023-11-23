import torch
import fastapi
import base64
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from llm.Getprompt import TextProcessing_gpt, TextProcessing_T5
from datetime import datetime
# from diffusion import Diffuse
import os

# from diffusers import StableDiffusionPipeline
# from transformers import pipeline

origins = ["http://127.0.0.1:19006",
"http://127.0.0.1:19006/api",
"http://localhost:19006",
"http://localhost:8081",
"http://localhost:19006/api",
"http://127.0.0.1:8080",
"http://127.0.0.1:8080/api",
"http://localhost:8080",
"http://localhost:8080/api",
"10.20.104.13:8080/api",
"10.20.36.160:8080/api",
"http://192.168.0.2:8080/items",
"192.168.0.2:8080",

]

middleware = [
    Middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*']
    )
]

# pipe = pipeline("image-to-text", model="C:\\Users\\kky57\\Documents\\1.smu\\2023\\2nd_seme\\mobileSW\\react-native-serve-ml\\assets\\vit-gpt2-image-captioning")
# pipe = pipeline("image-to-text", model="..\\assets\\vit-gpt2-image-captioning")

app = FastAPI(middleware=middleware)

class Item(BaseModel):
    query: str
    modelName: str

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
        llm_t5 = TextProcessing_T5(ner_model = 'DeveloperSejin/NER_for_furniture_3D_object_create',model_name='DeveloperSejin/Fine_Tuned_Flan-T5-large_For_Describe_Furniture')
        
        # 언어모델을 통해 prompt 추천 받기
        recommend, answer = llm_t5.getAnswer(prompt=query) 
        
        # 메모리 관리를 위해 모델 객체 삭제
        del llm_t5
        
    if answer == -1:
        answer = "not supported"
    
    return {
        "recommend": recommend,
        "answer": answer}

@app.post("/image-create/")
def create_image(item: Item):
    model_name = item.modelName
    prompt = item.query.split(":")[0]
    
    print(f"This query({prompt}) is requested from client")
    
    # 여기에 이미지 생성하는 코드 구현하기
    image = [f"image{i+1}" for i in range(4)]
    
    return {
        "image": image,
        "userRequest": prompt,
        "status": "200 OK"}