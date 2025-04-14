from fastapi import Body, FastAPI
from sqlalchemy import null
from Database import session,NoteBase,engine
from schema import NoteCreate
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
def addNote(note: NoteCreate):
    note: Note = Note(title=note.title,content=note.content,owner=1)
    session.add(note)
    session.commit()


@app.put("/update_note/{note_id}")
def updateNote(note_id:int, note: NoteCreate):
    updated_note = session.query(Note).filter(Note.note_id == note_id).first()
    
    if updated_note is not None:
        updated_note.title = note.title
        updated_note.content = note.content
        session.commit()
    

@app.get("/notes")
def getNotes():
    return session.query(Note).all()

@app.get("/note/{note_id}")
def getNote(note_id:int):
    return session.query(Note).filter(Note.note_id == note_id).first()

@app.delete("/delete_note/{note_id}")
def deleteNote(note_id:int):
    delete_note = session.query(Note).filter(note_id == Note.note_id).first()
    session.delete(delete_note)
    session.commit()