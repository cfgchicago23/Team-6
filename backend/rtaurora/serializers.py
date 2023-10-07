from rest_framework import serializers
from .models import Volunteer, Organization, VolunteerUser, AdminUser


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ('id', 'name', 'email', 'phone', 'preference', 'street', 'state', 'city', 'zipCode', 'dob', 'isAdult', 'shirt', 'availability', 'role', 'other', 'reference')


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ('id', 'name', 'street', 'city', 'state',
                  'zipCode', 'mainContact', 'mainEmail')

class VolunteerUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = VolunteerUser
        fields = ('volunteerUsername', 'volunteerPassword')

class AdminUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminUser
        fields = ('adminUsername', 'adminPassword')