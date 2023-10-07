from rest_framework import serializers
from .models import Volunteer, Organization, House, FeedbackForm, VolunteerUser, AdminUser


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ('id', 'name', 'email', 'phone', 'preference', 'street', 'state', 'city', 'zipCode', 'dob', 'isAdult', 'shirt', 'availability', 'role', 'other', 'reference', 'hours')


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ('id', 'name', 'street', 'city', 'state', 'zipCode', 'mainContact', 'mainEmail')

class VolunteerUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = VolunteerUser
        fields = ('volunteerUsername', 'volunteerPassword')

class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields = ('id','house_id', 'owner_name', 'owner_email', 'owner_phone', 'address', 'language', 'needed_repairs')

class FeedbackFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackForm
        fields = ('id', 'rating', 'text', 'house', 'volunteer_name')
        
class AdminUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminUser
        fields = ('adminUsername', 'adminPassword')