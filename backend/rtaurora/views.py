from django.shortcuts import render
from rest_framework import viewsets
from .serializers import VolunteerSerializer, OrganizationSerializer, AdminUserSerializer, VolunteerUserSerializer
from .models import Volunteer, Organization, AdminUser, VolunteerUser


class VolunteerView (viewsets.ModelViewSet):
    serializer_class = VolunteerSerializer
    queryset = Volunteer.objects.all()


class OrganizationView (viewsets.ModelViewSet):
    serializer_class = OrganizationSerializer
    queryset = Organization.objects.all()

class VolunteerUserView (viewsets.ModelViewSet):
    serializer_class = VolunteerUserSerializer
    queryset = VolunteerUser.objects.all()
    
class AdminUserView (viewsets.ModelViewSet):
    serializer_class = AdminUserSerializer
    queryset = AdminUser.objects.all()
    
