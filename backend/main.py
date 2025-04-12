from Database import session,NoteBase,engine
from models import User

NoteBase.metadata.create_all(bind=engine)

session = session()
#(self,user_name:str,email:str,password:str)
#session.add(User("andi","andi@gmail.com","pasword123"))

