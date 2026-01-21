"""
Backend API Tests for The Lair of Liz Spiritual Sanctuary
Tests: Health check, Bookings CRUD, Contacts CRUD
"""
import pytest
import requests
import os
import uuid
from datetime import datetime, timedelta

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthCheck:
    """Health check endpoint tests"""
    
    def test_health_endpoint(self):
        """Test /api/health returns healthy status"""
        response = requests.get(f"{BASE_URL}/api/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "healthy"
        assert data["service"] == "The Lair of Liz"
    
    def test_root_endpoint(self):
        """Test /api/ returns welcome message"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data


class TestBookingsAPI:
    """Booking endpoint tests with new pricing tier fields"""
    
    def test_create_booking_with_pricing_tier(self):
        """Test POST /api/bookings with all new fields"""
        unique_email = f"TEST_booking_{uuid.uuid4().hex[:8]}@example.com"
        booking_data = {
            "name": "TEST_John Doe",
            "email": unique_email,
            "phone": "231-555-1234",
            "groupType": "Spiritual Retreat",
            "groupSize": "20",
            "pricingTier": "The Gathering",
            "startDate": "2025-07-15",
            "endDate": "2025-07-17",
            "numberOfNights": 2,
            "specialRequests": "Need quiet area for meditation",
            "addOns": ["Farmstead Breakfast", "The Base Camp Teepee"],
            "hasChildren": True,
            "hasPets": False,
            "bringingFacilitator": True,
            "estimatedTotal": 1200,
            "deposit": 300
        }
        
        response = requests.post(f"{BASE_URL}/api/bookings", json=booking_data)
        assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"
        
        data = response.json()
        # Verify all fields are returned correctly
        assert data["name"] == "TEST_John Doe"
        assert data["email"] == unique_email
        assert data["pricingTier"] == "The Gathering"
        assert data["groupSize"] == "20"
        assert data["numberOfNights"] == 2
        assert data["hasChildren"] == True
        assert data["hasPets"] == False
        assert data["bringingFacilitator"] == True
        assert "Farmstead Breakfast" in data["addOns"]
        assert "The Base Camp Teepee" in data["addOns"]
        assert data["estimatedTotal"] == 1200
        assert data["deposit"] == 300
        assert data["status"] == "pending"
        assert "id" in data
        
        return data["id"]
    
    def test_create_booking_intimate_pod_tier(self):
        """Test booking with Intimate Pod tier (10 people, $33/person)"""
        unique_email = f"TEST_intimate_{uuid.uuid4().hex[:8]}@example.com"
        booking_data = {
            "name": "TEST_Small Group Leader",
            "email": unique_email,
            "phone": "231-555-5678",
            "groupType": "Yoga/Wellness Retreat",
            "groupSize": "10",
            "pricingTier": "The Intimate Pod",
            "startDate": "2025-08-01",
            "endDate": "2025-08-03",
            "numberOfNights": 2,
            "estimatedTotal": 660,  # 10 * 33 * 2
            "deposit": 200
        }
        
        response = requests.post(f"{BASE_URL}/api/bookings", json=booking_data)
        assert response.status_code == 200
        
        data = response.json()
        assert data["pricingTier"] == "The Intimate Pod"
        assert data["groupSize"] == "10"
        assert data["estimatedTotal"] == 660
        assert data["deposit"] == 200
    
    def test_create_booking_full_circle_tier(self):
        """Test booking with Full Circle tier (40 people, $27/person)"""
        unique_email = f"TEST_fullcircle_{uuid.uuid4().hex[:8]}@example.com"
        booking_data = {
            "name": "TEST_Large Event Organizer",
            "email": unique_email,
            "phone": "231-555-9999",
            "groupType": "Wedding/Celebration",
            "groupSize": "40",
            "pricingTier": "The Full Circle",
            "startDate": "2025-09-10",
            "endDate": "2025-09-13",
            "numberOfNights": 3,
            "addOns": ["Harvest Hearth", "Garden Walk & Gather", "Power Station Access"],
            "hasChildren": True,
            "hasPets": True,
            "estimatedTotal": 3240,  # 40 * 27 * 3
            "deposit": 500
        }
        
        response = requests.post(f"{BASE_URL}/api/bookings", json=booking_data)
        assert response.status_code == 200
        
        data = response.json()
        assert data["pricingTier"] == "The Full Circle"
        assert data["groupSize"] == "40"
        assert data["hasChildren"] == True
        assert data["hasPets"] == True
        assert len(data["addOns"]) == 3
    
    def test_get_all_bookings(self):
        """Test GET /api/bookings returns list"""
        response = requests.get(f"{BASE_URL}/api/bookings")
        assert response.status_code == 200
        
        data = response.json()
        assert isinstance(data, list)
    
    def test_get_booking_by_id(self):
        """Test GET /api/bookings/{id} returns specific booking"""
        # First create a booking
        unique_email = f"TEST_getbyid_{uuid.uuid4().hex[:8]}@example.com"
        booking_data = {
            "name": "TEST_Get By ID",
            "email": unique_email,
            "groupType": "Friends Trip",
            "groupSize": "20",
            "pricingTier": "The Gathering",
            "startDate": "2025-10-01",
            "endDate": "2025-10-03"
        }
        
        create_response = requests.post(f"{BASE_URL}/api/bookings", json=booking_data)
        assert create_response.status_code == 200
        booking_id = create_response.json()["id"]
        
        # Now get by ID
        get_response = requests.get(f"{BASE_URL}/api/bookings/{booking_id}")
        assert get_response.status_code == 200
        
        data = get_response.json()
        assert data["id"] == booking_id
        assert data["name"] == "TEST_Get By ID"
        assert data["email"] == unique_email
    
    def test_get_nonexistent_booking(self):
        """Test GET /api/bookings/{id} returns 404 for non-existent booking"""
        response = requests.get(f"{BASE_URL}/api/bookings/nonexistent-id-12345")
        assert response.status_code == 404
    
    def test_booking_validation_email_required(self):
        """Test booking requires valid email"""
        booking_data = {
            "name": "TEST_Invalid Email",
            "email": "not-an-email",
            "groupType": "Friends Trip",
            "groupSize": "10",
            "startDate": "2025-10-01",
            "endDate": "2025-10-03"
        }
        
        response = requests.post(f"{BASE_URL}/api/bookings", json=booking_data)
        # Should fail validation
        assert response.status_code == 422


class TestContactsAPI:
    """Contact endpoint tests"""
    
    def test_create_contact(self):
        """Test POST /api/contacts creates new contact message"""
        unique_email = f"TEST_contact_{uuid.uuid4().hex[:8]}@example.com"
        contact_data = {
            "name": "TEST_Jane Smith",
            "email": unique_email,
            "groupType": "LGBTQ+ Gathering",
            "gatheringPurpose": "Annual community retreat",
            "preferredDates": "June 2025",
            "message": "We're interested in booking for our annual gathering. Can you accommodate 25 people?"
        }
        
        response = requests.post(f"{BASE_URL}/api/contacts", json=contact_data)
        assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"
        
        data = response.json()
        assert data["name"] == "TEST_Jane Smith"
        assert data["email"] == unique_email
        assert data["groupType"] == "LGBTQ+ Gathering"
        assert data["gatheringPurpose"] == "Annual community retreat"
        assert data["status"] == "new"
        assert "id" in data
    
    def test_get_all_contacts(self):
        """Test GET /api/contacts returns list"""
        response = requests.get(f"{BASE_URL}/api/contacts")
        assert response.status_code == 200
        
        data = response.json()
        assert isinstance(data, list)
    
    def test_get_contact_by_id(self):
        """Test GET /api/contacts/{id} returns specific contact"""
        # First create a contact
        unique_email = f"TEST_contactid_{uuid.uuid4().hex[:8]}@example.com"
        contact_data = {
            "name": "TEST_Contact By ID",
            "email": unique_email,
            "message": "Test message for ID lookup"
        }
        
        create_response = requests.post(f"{BASE_URL}/api/contacts", json=contact_data)
        assert create_response.status_code == 200
        contact_id = create_response.json()["id"]
        
        # Now get by ID
        get_response = requests.get(f"{BASE_URL}/api/contacts/{contact_id}")
        assert get_response.status_code == 200
        
        data = get_response.json()
        assert data["id"] == contact_id
        assert data["name"] == "TEST_Contact By ID"
    
    def test_get_nonexistent_contact(self):
        """Test GET /api/contacts/{id} returns 404 for non-existent contact"""
        response = requests.get(f"{BASE_URL}/api/contacts/nonexistent-id-12345")
        assert response.status_code == 404


class TestReviewsAPI:
    """Reviews endpoint tests"""
    
    def test_get_reviews(self):
        """Test GET /api/reviews returns list"""
        response = requests.get(f"{BASE_URL}/api/reviews")
        assert response.status_code == 200
        
        data = response.json()
        assert isinstance(data, list)


class TestStatusAPI:
    """Status endpoint tests (existing functionality)"""
    
    def test_create_status_check(self):
        """Test POST /api/status creates status check"""
        status_data = {
            "client_name": "TEST_Client"
        }
        
        response = requests.post(f"{BASE_URL}/api/status", json=status_data)
        assert response.status_code == 200
        
        data = response.json()
        assert data["client_name"] == "TEST_Client"
        assert "id" in data
        assert "timestamp" in data
    
    def test_get_status_checks(self):
        """Test GET /api/status returns list"""
        response = requests.get(f"{BASE_URL}/api/status")
        assert response.status_code == 200
        
        data = response.json()
        assert isinstance(data, list)


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
