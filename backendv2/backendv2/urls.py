"""
URL configuration for backendv2 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rtaurora import views

router = routers.DefaultRouter()
router.register(r"volunteer", views.VolunteerView, "volunteer")
router.register(r"organization", views.OrganizationView, "organization")
router.register(r"house", views.HouseView, "house")
router.register(r"feedbackform", views.FeedbackFormView, "feedbackform")
router.register(r"volunteerUser", views.VolunteerUserView, "volunteerUser")
router.register(r"adminUser", views.AdminUserView, "adminUser")
# router.register(r'gethouse', views.GetHouseView, 'gethouse')

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("get-house/", views.GetHouseView.as_view()),
    path("get-volunteer/", views.GetVolunteerView.as_view()),
]