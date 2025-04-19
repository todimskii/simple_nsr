from sqlalchemy.orm import Session

# from . import models, schemas
import models
import schemas


def get_tickets(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Ticket).offset(skip).limit(limit).all()


def create_ticket(db: Session, ticket: schemas.TicketCreate):
    db_ticket = models.Ticket(**ticket.dict())
    db.add(db_ticket)
    db.commit()
    db.refresh(db_ticket)
    return db_ticket


def delete_ticket(db: Session, ticket_id: int):
    ticket = db.query(models.Ticket).filter(models.Ticket.id == ticket_id).first()
    if ticket:
        db.delete(ticket)
        db.commit()
    return ticket
