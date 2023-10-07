from django.shortcuts import render
from rest_framework import viewsets
from .serializers import VolunteerSerializer, OrganizationSerializer
from .models import Volunteer, Organization

class VolunteerView (viewsets.ModelViewSet):
    serializer_class = VolunteerSerializer
    queryset = Volunteer.objects.all()
    
class OrganizationView (viewsets.ModelViewSet):
    serializer_class = OrganizationSerializer
    queryset = Organization.objects.all()