# NSR Processing System

## Features
- Search Remedy tickets (SOAP)
- Update and validate fields
- Sync to Infoblox
- Store in PostgreSQL
- CSV batch upload
- Fully containerized

## Quick Start
```bash
docker-compose up --build
```

App: http://localhost:8000/search

## Default DB creds (change in `.env`)
- DB: nsrdb
- User: nsruser
- Pass: nsrpass
