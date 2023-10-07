from tkinter.tix import MAX
from django.db import models

MAX_LENGTH = 255

STATE_CHOICES = (
    ("na", "Choose State"),
    ("OH", "Ohio"),
    ("MI", "Michigan"),
)

TYPE = (

)

# Create your models here.


class Volunteer(models.Model):
    name = models.CharField(max_length=MAX_LENGTH)
    email = models.EmailField(max_length=MAX_LENGTH, blank=True)

    def __str__(self) -> str:
        return self.name


class House(models.Model):
    owner_name = models.CharField(max_length=MAX_LENGTH)
    owner_email = models.EmailField(max_length=MAX_LENGTH, blank=True)
    owner_phone = models.CharField(max_length=MAX_LENGTH)
    address = models.CharField(max_length=MAX_LENGTH)
    language = models.CharField(max_length=MAX_LENGTH)
    needed_repairs = models.CharField(max_length=MAX_LENGTH)


class Organization (models.Model):
    name = models.CharField(max_length=MAX_LENGTH)
    street = models.TextField()
    state = models.CharField(max_length=2, choices=STATE_CHOICES, default="na")
    city = models.TextField()
    zipCode = models.IntegerField()

    mainContact = models.CharField(max_length=MAX_LENGTH)
    mainEmail = models.EmailField(max_length=MAX_LENGTH, blank=True)
