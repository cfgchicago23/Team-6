from django.contrib import admin
from .models import Volunteer, Organization, House, FeedbackForm

## TODO: Make sure this right
admin.site.register(Volunteer)
admin.site.register(Organization)
admin.site.register(House)
admin.site.register(FeedbackForm)
