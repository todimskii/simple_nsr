from pydantic import BaseModel
from typing import Optional


class TicketBase(BaseModel):
    incident: str
    name: Optional[str] = None
    phone: Optional[str] = None
    issue: Optional[str] = None
    description: Optional[str] = None


class TicketCreate(TicketBase):
    pass


class Ticket(TicketBase):
    id: int

    class Config:
        orm_mode = True
