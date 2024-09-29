from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from openai import OpenAI
import openai
import os
from typing import List


app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app's address
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the OpenAI client
openai.api_key = os.getenv("OPEN_AI_API")
client = OpenAI(api_key=os.getenv("OPEN_AI_API"))

class Message(BaseModel):
    role: str
    content: str

class Conversation(BaseModel):
    messages: List[Message]

@app.post("/chat")
async def chat(message: str):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",  # or whichever model you're using
        messages=[
            {"role": "system", "content": "You are a helpful assistant named Jai"},
            {"role": "user", "content": message}
        ]
    )
    return {"response": response.choices[0].message.content}

@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    return JSONResponse(
        status_code=500,
        content={"detail": str(exc)}
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)