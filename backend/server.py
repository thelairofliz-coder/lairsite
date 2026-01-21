from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="The Lair of Liz API", description="Backend API for The Lair of Liz spiritual campground")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ============== Models ==============

class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str


# Booking Models
class BookingCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    groupType: str
    groupSize: str
    pricingTier: Optional[str] = None
    startDate: str
    endDate: str
    numberOfNights: Optional[int] = 2
    specialRequests: Optional[str] = None
    addOns: Optional[List[str]] = []
    hasChildren: Optional[bool] = False
    hasPets: Optional[bool] = False
    bringingFacilitator: Optional[bool] = False
    estimatedTotal: Optional[float] = None
    deposit: Optional[float] = None

class Booking(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    groupType: str
    groupSize: str
    pricingTier: Optional[str] = None
    startDate: str
    endDate: str
    numberOfNights: Optional[int] = 2
    specialRequests: Optional[str] = None
    addOns: Optional[List[str]] = []
    hasChildren: Optional[bool] = False
    hasPets: Optional[bool] = False
    bringingFacilitator: Optional[bool] = False
    estimatedTotal: Optional[float] = None
    deposit: Optional[float] = None
    status: str = "pending"
    created_at: datetime = Field(default_factory=datetime.utcnow)


# Contact Models
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    groupType: Optional[str] = None
    gatheringPurpose: Optional[str] = None
    preferredDates: Optional[str] = None
    message: str

class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    groupType: Optional[str] = None
    gatheringPurpose: Optional[str] = None
    preferredDates: Optional[str] = None
    message: str
    status: str = "new"
    created_at: datetime = Field(default_factory=datetime.utcnow)


# Review Model (for future use)
class Review(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    text: str
    author: str
    title: str
    rating: int = 5
    created_at: datetime = Field(default_factory=datetime.utcnow)


# ============== Routes ==============

@api_router.get("/")
async def root():
    return {"message": "Welcome to The Lair of Liz API"}


# Health check
@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "The Lair of Liz"}


# Status endpoints (existing)
@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.model_dump())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]


# ============== Booking Endpoints ==============

@api_router.post("/bookings", response_model=Booking)
async def create_booking(booking_data: BookingCreate):
    """Create a new booking inquiry"""
    try:
        booking_dict = booking_data.model_dump()
        booking_obj = Booking(**booking_dict)
        await db.bookings.insert_one(booking_obj.model_dump())
        logger.info(f"New booking created: {booking_obj.id} from {booking_obj.email}")
        return booking_obj
    except Exception as e:
        logger.error(f"Error creating booking: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create booking")

@api_router.get("/bookings", response_model=List[Booking])
async def get_bookings():
    """Get all booking inquiries"""
    bookings = await db.bookings.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return [Booking(**booking) for booking in bookings]

@api_router.get("/bookings/{booking_id}", response_model=Booking)
async def get_booking(booking_id: str):
    """Get a specific booking by ID"""
    booking = await db.bookings.find_one({"id": booking_id})
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    return Booking(**booking)

@api_router.patch("/bookings/{booking_id}/status")
async def update_booking_status(booking_id: str, status: str):
    """Update booking status"""
    result = await db.bookings.update_one(
        {"id": booking_id},
        {"$set": {"status": status}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Booking not found")
    return {"message": "Status updated", "status": status}


# ============== Contact Endpoints ==============

@api_router.post("/contacts", response_model=Contact)
async def create_contact(contact_data: ContactCreate):
    """Create a new contact message"""
    try:
        contact_dict = contact_data.model_dump()
        contact_obj = Contact(**contact_dict)
        await db.contacts.insert_one(contact_obj.model_dump())
        logger.info(f"New contact message from: {contact_obj.email}")
        return contact_obj
    except Exception as e:
        logger.error(f"Error creating contact: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send message")

@api_router.get("/contacts", response_model=List[Contact])
async def get_contacts():
    """Get all contact messages"""
    contacts = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return [Contact(**contact) for contact in contacts]

@api_router.get("/contacts/{contact_id}", response_model=Contact)
async def get_contact(contact_id: str):
    """Get a specific contact by ID"""
    contact = await db.contacts.find_one({"id": contact_id})
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    return Contact(**contact)

@api_router.patch("/contacts/{contact_id}/status")
async def update_contact_status(contact_id: str, status: str):
    """Update contact status"""
    result = await db.contacts.update_one(
        {"id": contact_id},
        {"$set": {"status": status}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Contact not found")
    return {"message": "Status updated", "status": status}


# ============== Reviews Endpoints ==============

@api_router.get("/reviews", response_model=List[Review])
async def get_reviews():
    """Get all reviews"""
    reviews = await db.reviews.find({}, {"_id": 0}).sort("created_at", -1).to_list(100)
    return [Review(**review) for review in reviews]


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
