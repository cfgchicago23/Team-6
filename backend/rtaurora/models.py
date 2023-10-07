from tkinter.tix import MAX
from django.db import models

MAX_LENGTH = 255

STATE_CHOICES = (
    ("na", "Choose State"),
    ("OH", "Ohio"),
    ("MI", "Michigan"),
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

# Create your models here.


class Volunteer(models.Model):
    name = models.CharField(max_length=MAX_LENGTH)
    email = models.EmailField(max_length=MAX_LENGTH, blank=True)
    phone = models.IntegerField(default=0)
    preference = models.CharField(max_length=20, choices=PREFERENCE, default="email")
    street = models.TextField(blank=True)
    state = models.CharField(max_length=MAX_LENGTH, choices=STATE_CHOICES, default="na")
    city = models.TextField(blank=True)
    zipCode = models.IntegerField(default=0000)
    dob = models.DateField(default='2023-10-07')
    isAdult =  models.BooleanField(default=True)
    shirt = models.CharField(max_length=20, choices=SHIRT, default="small")
    availability = models.CharField(max_length=20, choices=AVAILABILITY, default="asneeded")
    role = models.CharField(max_length = 20, choices=EXPERTISE, default="general")
    other = models.TextField(blank=True)
    reference = models.TextField(blank=True)


    def __str__(self) -> str:
        return self.name


class Organization(models.Model):
    name = models.CharField(max_length=MAX_LENGTH)
    street = models.TextField()
    state = models.CharField(max_length=2, choices=STATE_CHOICES, default="na")
    city = models.TextField()
    zipCode = models.IntegerField()

    mainContact = models.CharField(max_length=MAX_LENGTH)
    mainEmail = models.EmailField(max_length=MAX_LENGTH, blank=True)


    
class VolunteerUser(models.Model):
    volunteerUsername = models.CharField(max_length=MAX_LENGTH, unique=True)
    volunteerPassword = models.CharField(max_length=MAX_LENGTH) # login for admin & login for username

class AdminUser(models.Model):
    adminUsername = models.CharField(max_length=MAX_LENGTH, unique=True)
    adminPassword = models.CharField(max_length=MAX_LENGTH)
    
    def __str__(self):
        return self.adminUsername

    
    
    