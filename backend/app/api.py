import torch
import fastapi
import base64
import os
import sys
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from datetime import datetime

# Text processing
from llm.Getprompt import TextProcessingGPT, TextProcessingT5

# Image processing
from diffusers import DiffusionPipeline
from diffusers.utils import pt_to_pil
from diffusion import Diffuse
from io import BytesIO
from PIL import Image

try:
    from rembg import remove
except ImportError:
    print('Please install rembg with "pip install rembg"')
    sys.exit()

# Define allowed origins for CORS
origins = [
    "http://127.0.0.1:19006",
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

# CORS Middleware setup
middleware = [
    Middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*']
    )
]

# FastAPI instance with middleware
app = FastAPI(middleware=middleware)

class Item(BaseModel):
    query: str
    modelName: str

class Item3D(BaseModel):
    query: str
    ID: str
    modelName: str

# Test endpoint
@app.get("/items/")
async def read_item():
    print(f"{datetime.now()}, 도착")
    return {"data": "Hello World of FastAPI"}

# Endpoint for processing text
@app.post("/text/")
def recommend_prompt(item: Item):
    answer = "This is the result"
    model_name = item.modelName
    query = item.query

    # Use T5 language model
    if model_name == "T5":
        llm_t5 = TextProcessingT5(ner_model='DeveloperSejin/NER_for_furniture_3D_object_create',
                                  model_name='DeveloperSejin/Fine_Tuned_Flan-T5-large_For_Describe_Furniture')
        recommend, answer = llm_t5.get_answer(prompt=query)
        del llm_t5

    if answer == -1:
        answer = "not supported"

    return {
        "recommend": recommend,
        "answer": answer
    }

def _image_to_base64(image):
    img_byte_array = BytesIO()
    image.save(img_byte_array, format="PNG")
    img_data = img_byte_array.getvalue()
    return base64.b64encode(img_data).decode('utf-8')

# Endpoint for creating images
@app.post("/image-create/")
def create_image(item: Item):
    model_name = item.modelName
    prompt = item.query.split(":")[0]
    
    print(f"This query({prompt}) is requested from the client")
    
    images = []
    for i in range(4):
        org_img = Diffuse.run2(prompt)
        removed_img = remove(org_img, alpha_matting=False)
        image_base64 = _image_to_base64(removed_img)
        images.append(image_base64)
    
    print("Images are all set")
    response_data = {"images": images, "userRequest": prompt}
    
    return JSONResponse(content=response_data)

# Endpoint for creating 3D objects
@app.post("/create-3D/")
def create_3d(item: Item3D):
    # Get params
    image_query = item.query
    ID = item.ID
    model_name = item.modelName
    
    print("Request arrived")
    
    print("This is a test of 3D creation")

    print(image_query[:10])
    # Base64 decoding
    decoded_img = base64.b64decode(image_query)

    # BytesIO to load image data into memory
    image_stream = BytesIO(decoded_img)

    # Make 3D object
    shapE.create_mesh(image_stream, str(ID))

    return {"status": "200 OK"}
