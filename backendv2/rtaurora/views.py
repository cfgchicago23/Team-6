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
        # if not queryset.exists():
        #     return Response(status=status.HTTP_100_CONTINUE)
        # password = queryset.first().password
        # if password != entered_password:
        #     return Response(status=status.HTTP_100_CONTINUE)

        # # MOVE TO SEPARATE VIEW
        # if username == 'heather':
        #     # RETURN ADMIN PAGE
        #     pass
        # else:
        user = Volunteer.objects.all()
        return Response(
            GetVolunteerViewSerializer(user, many=True).data, status=status.HTTP_200_OK
        )

class PostFeedbackFormView(APIView):
    def post(self, request, format=None):
        # Aquired Parameters
        rating = request.query_params.get("rating")
        text = request.query_params.get("text")
        house = ''
        volunteer_name = request.query_params.get("volunteer_name")

        # Possible Adjustments: 
        # house = request.query_params.get("house")
        # volunteer_name = 'n/a'

        feedbackForm = FeedbackForm(rating=rating, text=text,
                                house=house, volunteer_name=volunteer_name)
        feedbackForm.save()
        # return Response(FeedbackFormSerializer(feedbackForm).data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_200_OK)

class PostHouseView(APIView):
    def post(self, request, format=None):
        # Aquired Parameters
        familyName = request.query_params.get("familyName")
        familyEmail = request.query_params.get("familyEmail")
        familyDescription = request.query_params.get("familyDescription")
        street = request.query_params.get("street")
        city = request.query_params.get("city")
        state = request.query_params.get("state")
        zipCode = request.query_params.get("zipCode")
        language = request.query_params.get("language")
        recievedOn = request.query_params.get("recievedOn")
        application = request.query_params.get("application")
        houseImage = request.query_params.get("houseImage")

        # Possible Adjustments: 
        # house = request.query_params.get("house")
        # volunteer_name = 'n/a'

        house = House(
            familyName=familyName,
            familyEmail=familyEmail,
            familyDescription=familyDescription,
            street=street,
            city=city,
            state=state,
            zipCode=zipCode,
            language=language,
            recievedOn=recievedOn,
            application=application,
            houseImage=houseImage)
        house.save()
        # return Response(HouseSerializer(house).data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_200_OK)