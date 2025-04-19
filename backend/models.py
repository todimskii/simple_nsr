from sqlalchemy import Column, Integer, String
from database import Base


class Ticket(Base):
    __tablename__ = "tickets"
    id = Column(Integer, primary_key=True, index=True)
    incident = Column(String, index=True)
    name = Column(String)
    phone = Column(String)
    issue = Column(String)
    description = Column(String)
