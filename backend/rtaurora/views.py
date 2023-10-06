from django.shortcuts import render
from rest_framework import viewsets
from .serializers import VolunteerSerializer
from .models import Volunteer

class VolunteerView (viewsets.ModelViewSet):
    serializer_class = VolunteerSerializer
    queryset = Volunteer.objects.all()
    
