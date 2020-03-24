from django.shortcuts import render
from django.db.models.functions import Lower
# from rest_framework import filters
# import json

# Create your views here.
from rest_framework import generics

from .models import Animal
from .serializers import AnimalSerializer

from rest_framework.views import APIView
from rest_framework.response import Response

class ListAnimal(generics.ListCreateAPIView):
    # filter_backends = (DynamicSearchFilter,)
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

class DetailAnimal(generics.RetrieveUpdateDestroyAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

class FilterAnimals(generics.ListAPIView):
    serializer_class = AnimalSerializer

    def get_queryset(self):
        queryset = Animal.objects.all()
        animal_type = self.request.query_params.get('animal_type', None)
        breed = self.request.query_params.get('breed', None)
        age = self.request.query_params.get('age', None)
        gender = self.request.query_params.get('gender', None)
        shelter_id = self.request.query_params.get('shelter_id', None)
        # refactor later -> use loop
        if animal_type is not None:
            queryset = queryset.filter(animal_type__iexact=animal_type)
        if breed is not None:
            queryset = queryset.filter(breed__iexact=breed)
        if age is not None:
            queryset = queryset.filter(age__iexact=age)
        if gender is not None:
            queryset = queryset.filter(gender__iexact=gender)
        if shelter_id is not None:
            queryset = queryset.filter(shelter_id__iexact=shelter_id)
        return queryset

class ListAnimalCategories(APIView):
    def get(self, request):
        animalType = Animal.objects.values_list('animal_type', flat=True).annotate(handle_lower=Lower("animal_type")).distinct("handle_lower")
        breed = Animal.objects.values_list('breed', flat=True).annotate(handle_lower=Lower("breed")).distinct("handle_lower")
        age = Animal.objects.values_list('age', flat=True).annotate(handle_lower=Lower("age")).distinct("handle_lower")
        gender = Animal.objects.values_list('gender', flat=True).annotate(handle_lower=Lower("gender")).distinct("handle_lower")
        shelter = Animal.objects.values_list('shelter_id', flat=True).distinct().order_by('shelter_id')
        categories = {"typeList": animalType, "breedList": breed, "ageList": age, "genderList": gender, "shelterList": shelter}
        return Response(categories)
