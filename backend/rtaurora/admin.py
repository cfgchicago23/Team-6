from django.contrib import admin
from .models import Volunteer, Organization

## TODO: Make sure this right
admin.site.register(Volunteer)
admin.site.register(Organization)