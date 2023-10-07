from django.shortcuts import render
from rest_framework import viewsets
from .serializers import VolunteerSerializer, OrganizationSerializer, HouseSerializer
from .models import Volunteer, Organization, House


class VolunteerView (viewsets.ModelViewSet):
    serializer_class = VolunteerSerializer
    queryset = Volunteer.objects.all()


class OrganizationView (viewsets.ModelViewSet):
    serializer_class = OrganizationSerializer
    queryset = Organization.objects.all()


class HouseView (viewsets.ModelViewSet):
    serializer_class = HouseSerializer
    queryset = House.objects.all()
