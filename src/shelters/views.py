from django.shortcuts import render
from rest_framework.response import Response;
from rest_framework.views import APIView
from profiles.models import UserProfile
from animals.models import Animal
from applications.models import Application

# Create your views here.

# shelters/views.py
from rest_framework import generics

from .models import Shelter
from .serializers import ShelterSerializer


class ListShelter(generics.ListCreateAPIView):
    queryset = Shelter.objects.all()
    serializer_class = ShelterSerializer


class DetailShelter(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shelter.objects.all()
    serializer_class = ShelterSerializer

class GetShelterPageInfo(APIView):
    def get(self, request, userID):
        shelter = Shelter.objects.filter(id=userID).values('id', 'name', 'email', 'photo_url', 'description', 'website', 'country', 'province', 'city', 'street', 'postal_code')
        animals = Animal.objects.filter(shelter_id=userID).values('id', 'name', 'description', 'photo_url', 'animal_type', 'breed', 'age', 'size', 'gender', 'shelter_id', 'applications')
        applications = Application.objects.all().values('id', 'user_id', 'animal_id', 'created_at', 'status', 'info')
        profiles = UserProfile.objects.all().values('user', 'photo_url', 'name', 'address', 'city', 'postalCode', 'phone', 'email', 'birthdate', 'house', 'kids', 'otherPets', 'allergic', 'animalStay', 'activityLevel', 'why' )
        my_query= {"shelter": shelter, "animals": animals, "applications": applications, "profiles": profiles}
        return Response(my_query)
