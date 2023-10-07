from django.shortcuts import render
from rest_framework import viewsets, status
from .serializers import (
    VolunteerSerializer,
    OrganizationSerializer,
    AdminUserSerializer,
    VolunteerUserSerializer,
    FeedbackFormSerializer,
    HouseSerializer,
    GetHouseViewSerializer,
    GetVolunteerViewSerializer,
)
from .models import (
    Volunteer,
    Organization,
    AdminUser,
    VolunteerUser,
    FeedbackForm,
    House,
)
from rest_framework.views import APIView
from rest_framework.response import Response


class VolunteerView(viewsets.ModelViewSet):
    serializer_class = VolunteerSerializer
    queryset = Volunteer.objects.all()


class AdminUserView(viewsets.ModelViewSet):
    serializer_class = AdminUserSerializer
    queryset = AdminUser.objects.all()


class VolunteerUserView(viewsets.ModelViewSet):
    serializer_class = VolunteerUserSerializer
    queryset = VolunteerUser.objects.all()


class HouseView(viewsets.ModelViewSet):
    serializer_class = HouseSerializer
    queryset = House.objects.all()


class OrganizationView(viewsets.ModelViewSet):
    serializer_class = OrganizationSerializer
    queryset = Organization.objects.all()


class FeedbackFormView(viewsets.ModelViewSet):
    serializer_class = FeedbackFormSerializer
    queryset = FeedbackForm.objects.all()


class GetHouseView(APIView):
    def get(self, request, format=None):
        queryset = House.objects.all()
        return Response(
            GetHouseViewSerializer(queryset, many=True).data, status=status.HTTP_200_OK
        )


class GetVolunteerView(APIView):
    def get(self, request, format=None):
        entered_username = request.query_params.get("username")
        entered_password = request.query_params.get("password")

        # Switch to using VolunteerUser model?
        queryset = VolunteerUser.objects.filter(volunteerUsername=entered_username)
        if not queryset.exists():
            return Response(status=status.HTTP_200_OK)
        password = queryset.first().password
        if password != entered_password:
            return Response(status=status.HTTP_200_OK)

        # # MOVE TO SEPARATE VIEW
        # if username == 'heather':
        #     # RETURN ADMIN PAGE
        #     pass
        # else:
        user = Volunteer.objects.all()
        return Response(
            GetVolunteerViewSerializer(user, many=True).data, status=status.HTTP_200_OK
        )
