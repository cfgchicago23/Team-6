from django.contrib import admin
from .models import Volunteer, Organization, AdminUser, VolunteerUser

## TODO: Make sure this right
admin.site.register(Volunteer)
admin.site.register(Organization)
admin.site.register(VolunteerUser)
admin.site.register(AdminUser)