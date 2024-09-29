import requests
import ollama
from fastapi import FastAPI, Response
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:4173",
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Prompt(BaseModel):
    prompt: str
    fileContent: str 

@app.post('/ask')
async def ask(query:Prompt)->str:
    print("Comes Here")
    print(query)
    response = ollama.chat(model='llama3.1', messages=[
              {
                'role': 'user',
                'content': f'You are an intelligent AI Model, Using the prompt and the file content, you should give an appropriate response,\n \
                  prompt: {query.prompt}\n\
                  file content: {query.fileContent}\n\
                  Only satisfy the requirements of the prompt without any additional details',
              },
            ])
    res=response['message']['content']
    return Response(content=res, media_type="application/json")
