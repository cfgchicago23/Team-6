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
    

class Organization (models.Model):
    name = models.CharField(max_length=MAX_LENGTH)
    street = models.TextField()
    state = models.CharField(max_length=2, choices=STATE_CHOICES, default="na")
    city = models.TextField()
    zipCode = models.IntegerField()

    mainContact = models.CharField(max_length=MAX_LENGTH)
    mainEmail = models.EmailField(max_length=MAX_LENGTH, blank=True)