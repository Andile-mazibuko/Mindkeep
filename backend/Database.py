from sqlalchemy import *
from sqlalchemy.orm import *

DB_URL = "postgresql://postgres:root@localhost:5432/test"
NoteBase = declarative_base()
engine = create_engine(url=DB_URL,echo=True)

session = sessionmaker(bind=engine)
