from datetime import date
from sqlalchemy import Column,String,Integer,ForeignKey
from Database import *

class User(NoteBase):
    __tablename__ = "users"
    user_id = Column(Integer,primary_key=True,autoincrement=True)
    user_name = Column(String)
    email = Column(String,nullable=False)
    password = Column(String,nullable=False)
    role = Column(String,nullable=False)

    notes = relationship("Note", back_populates="user")
    
    def __init__(self,user_name:str,email:str,password:str):
        self.user_name = user_name
        self.email = email
        self.password = password
        self.role = "user"

    def __repr__(self):
        return f"user_id: {self.user_id} user_name: {self.user_name} email: {self.email} password: {self.password}"

class Note(NoteBase):
    __tablename__ = "notes"
    note_id = Column(Integer,primary_key=True,autoincrement=True)
    title = Column(String,nullable=False)
    content = Column(String,nullable=False)
    date = Column(DATE,nullable=False)
    owner = Column(Integer,ForeignKey("users.user_id"))

    user = relationship("User", back_populates="notes")

    def __init__(self,title,content,owner):
        self.title = title
        self.content = content
        self.owner = owner
        self.date = date.today()

    def __repr__(self):
        return f"note_id: {self.note_id}, title: {self.title}, owner: {self.owner}, date: {self.date}"