from django.contrib import admin
from .models import Volunteer, Organization, House, FeedbackForm, AdminUser, VolunteerUser

## TODO: Make sure this right
admin.site.register(Volunteer)
admin.site.register(Organization)
admin.site.register(House)
admin.site.register(FeedbackForm)
admin.site.register(AdminUser)
admin.site.register(VolunteerUser)
