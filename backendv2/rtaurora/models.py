from django.db import models
from backendv2.settings import TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_NUMBER
from twilio.rest import Client
import random

MAX_LENGTH = 255


RATING_CHOICES = (
    ("na", "Choose Rating"),
    ("1", "Very Negative"),
    ("2", "Negative"),
    ("3", "Neutral"),
    ("4", "Positive"),
    ("5", "Very Positive"),
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
    volunteerID = models.CharField(max_length=MAX_LENGTH, default='')


class House(models.Model):
    familyName = models.CharField(max_length=MAX_LENGTH)
    familyEmail = models.EmailField(max_length=MAX_LENGTH, blank=True, null=True)
    familyDescription = models.TextField(blank=True, null=True)
    street = models.TextField(blank=True, null=True)
    state = models.CharField(
        max_length=2, choices=STATE_CHOICES, default="na", null=True
    )
    city = models.TextField(blank=True, null=True)
    zipCode = models.IntegerField(blank=True, null=True)
    language = models.CharField(max_length=MAX_LENGTH, blank=True, null=True)
    recievedOn = models.DateField(blank=True, null=True)
    application = models.FileField(upload_to="HouseApplications", blank=True, null=True)
    houseImage = models.ImageField(upload_to="HouseImages", blank=True, null=True)

    def save(self, *args, **kwargs):
        # Twilio code to send a text message
        account_sid = TWILIO_ACCOUNT_SID
        auth_token = TWILIO_AUTH_TOKEN
        client = Client(account_sid, auth_token)

        message_body = (
            f'Rebuilding Together Aurora: A new project has been added!\n'
            f'Family Name: {self.familyName}\n'
            f'Family Description: {self.familyDescription}\n'
            f'Language: {self.language}\n'
            f'Please register to volunteer if interested!'
        )

        message = client.messages.create(
            body=message_body,
            from_=TWILIO_NUMBER,
            to='+12065399877'
        )

        print(message.sid)

        return super().save(*args, **kwargs)


class Organization(models.Model):
    name = models.CharField(max_length=MAX_LENGTH)
    street = models.TextField()
    state = models.CharField(max_length=2, choices=STATE_CHOICES, default="na")
    city = models.TextField()
    zipCode = models.IntegerField()

    mainContact = models.CharField(max_length=MAX_LENGTH)
    mainEmail = models.EmailField(max_length=MAX_LENGTH, blank=True)


class FeedbackForm(models.Model):
    rating = models.CharField(max_length=2, choices=RATING_CHOICES, default="na")
    text = models.TextField(default="")
    house = models.CharField(max_length=MAX_LENGTH, default="")
    volunteer_name = models.CharField(max_length=MAX_LENGTH, default="")
