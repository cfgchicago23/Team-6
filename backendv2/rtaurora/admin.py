from django.contrib import admin
from models import (
    Volunteer,
    AdminUser,
    VolunteerUser,
    House,
    Organization,
    FeedbackForm,
)

# Register your models here.
admin.site.register(Volunteer)
admin.site.register(AdminUser)
admin.site.register(VolunteerUser)
admin.site.register(House)
admin.site.register(Organization)
admin.site.register(FeedbackForm)