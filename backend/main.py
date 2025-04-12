from ast import Dict
from csv import Dialect
from fastapi import Body, FastAPI
from Database import session,NoteBase,engine
from models import Note, User
from fastapi.middleware.cors import CORSMiddleware


NoteBase.metadata.create_all(bind=engine)

session = session()
#(self,user_name:str,email:str,password:str)
#session.add(User("andi","andi@gmail.com","pasword123"))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/add_note")
def addNote(dict: Dict = Body(...)):
    note: Note = Note(title=dict['title'],content=dict['content'],owner=1)
    session.add(note)
    session.commit()

@app.get("/notes")
def getNotes():
    return session.query(Note).all()

@app.get("/note/{note_id}")
def getNote(note_id:int):
    return session.query(Note).filter(Note.note_id == note_id).first()