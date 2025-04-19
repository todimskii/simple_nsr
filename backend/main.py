from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

# from . import models, schemas, crud
import models
import schemas
import crud
from database import SessionLocal, engine, Base


Base.metadata.create_all(bind=engine)

app = FastAPI()

# Allow CORS for frontend to access the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this to just your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/tickets/", response_model=list[schemas.Ticket])
def read_tickets(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_tickets(db, skip=skip, limit=limit)


@app.post("/tickets/", response_model=schemas.Ticket)
def create_ticket(ticket: schemas.TicketCreate, db: Session = Depends(get_db)):
    return crud.create_ticket(db=db, ticket=ticket)


@app.delete("/tickets/{ticket_id}", response_model=schemas.Ticket)
def delete_ticket(ticket_id: int, db: Session = Depends(get_db)):
    db_ticket = crud.delete_ticket(db=db, ticket_id=ticket_id)
    if db_ticket is None:
        raise HTTPException(status_code=404, detail="Ticket not found")
    return db_ticket
