from rest_framework import serializers
from .models import Volunteer, Organization, House


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ('id', 'name', 'email')


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ('id', 'name', 'street', 'city', 'state',
                  'zipCode', 'mainContact', 'mainEmail')


class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields = ('id', 'name', 'street', 'city', 'state',
                  'zipCode', 'mainContact', 'mainEmail')
