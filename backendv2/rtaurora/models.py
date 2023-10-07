from django.db import models
import random

MAX_LENGTH = 255


RATING_CHOICES = (
    ("na", "Choose Rating"),
    ("1", "Very Negative"),
    ("2", "Negative"),
    ("3", "Neutral"),
    ("4", "Positive"),
    ("5", "Very Positive")
)
STATE_CHOICES = (
    ("na", "Choose State"),
    ("OH", "Ohio"),
    ("MI", "Michigan"),
    ("IL", "Illinois"),
)

PREFERENCE = (
    ("email", "Email"),
    ("phone", "Phone"),
)

SHIRT = (
    ("xsmall", "XSmall"),
    ("small", "Small"),
    ("medium", "Medium"),
    ("large", "Large"),
    ("xlarge", "XLarge"),
    ("2xlarge", "2XLarge"),
    ("3xlarge", "3XLarge"),
)

AVAILABILITY = (
    ("asneeded", "As Needed"),
    ("weekdays", "Weekdays"),
    ("weekends", "Weekends"),
)

ROLE = (
    ("captain", "House Captain"),
    ("cocaptain", "Co-Captain"),
    ("professional", "Professional/Skilled Volunteer"),
    ("general", "General/Community Volunteer"),
    ("office", "Office Volunteer"),
    ("photographer", "Photographer"),
)

EXPERTISE = (
    ("general", "General Volunteer"),
    ("carpentry", "Carpentry"),
    ("window", "Window replacement"),
    ("drywall", "Drywall/Plaster work"),
    ("flooring", "Flooring"),
    ("painting", "Painting"),
    ("hvac", "HVAC"),
    ("plumbing", "Plumbing"),
    ("electrical", "Electrical"),
    ("landscaping", "Landscaping"),
)

class Volunteer(models.Model):
    name = models.CharField(max_length=MAX_LENGTH)
    email = models.EmailField(max_length=MAX_LENGTH, blank=True)
    phone = models.IntegerField(default=0)
    preference = models.CharField(max_length=20, choices=PREFERENCE, default="email")
    street = models.TextField(blank=True)
    state = models.CharField(max_length=MAX_LENGTH, choices=STATE_CHOICES, default="na")
    city = models.TextField(blank=True)
    zipCode = models.IntegerField(default=0000)
    dob = models.DateField(default="2023-10-07")
    isAdult = models.BooleanField(default=True)
    shirt = models.CharField(max_length=20, choices=SHIRT, default="small")
    availability = models.CharField(
        max_length=20, choices=AVAILABILITY, default="asneeded"
    )
    role = models.CharField(max_length=20, choices=EXPERTISE, default="general")
    other = models.TextField(blank=True)
    reference = models.TextField(blank=True)
    hours = models.IntegerField(default=0)


    def __str__(self) -> str:
        return self.name
    

class AdminUser(models.Model):
    adminUsername = models.CharField(max_length=MAX_LENGTH, unique=True)
    adminPassword = models.CharField(max_length=MAX_LENGTH)
    
    def __str__(self) -> str:
        return self.name


class VolunteerUser(models.Model):
    volunteerUsername = models.CharField(max_length=MAX_LENGTH, unique=True)
    volunteerPassword = models.CharField(max_length=MAX_LENGTH)
    
