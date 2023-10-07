from django.shortcuts import render
from rest_framework import viewsets, status
from .serializers import VolunteerSerializer, OrganizationSerializer, HouseSerializer, FeedbackFormSerializer, GetHouseViewSerializer
from .models import Volunteer, Organization, House, FeedbackForm
from rest_framework.views import APIView
from rest_framework.response import Response


class VolunteerView (viewsets.ModelViewSet):
    serializer_class = VolunteerSerializer
    queryset = Volunteer.objects.all()


class OrganizationView (viewsets.ModelViewSet):
    serializer_class = OrganizationSerializer
    queryset = Organization.objects.all()


class HouseView (viewsets.ModelViewSet):
    serializer_class = HouseSerializer
    queryset = House.objects.all()

class FeedbackFormView (viewsets.ModelViewSet):
    serializer_class = FeedbackFormSerializer
    queryset = FeedbackForm.objects.all()

class GetHouseView(APIView):
    def get(self, request, format=None):
        queryset = House.objects.all()
        return Response(GetHouseViewSerializer(queryset, many=True).data, status=status.HTTP_200_OK)
        
