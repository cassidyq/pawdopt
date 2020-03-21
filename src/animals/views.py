from django.shortcuts import render
from django.db.models.functions import Lower
import json

# Create your views here.
from rest_framework import generics

from .models import Animal
from .serializers import AnimalSerializer

from rest_framework.views import APIView
from rest_framework.response import Response

class HelloView(APIView):
    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)
        
class ListAnimal(generics.ListCreateAPIView):
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

# class ListAnimalTypes(generics.ListCreateAPIView):
    # queryset = Animal.objects.values_list('animal_type', flat=True).annotate(handle_lower=Lower("animal_type")).distinct("handle_lower")
    # serializer_class = MySerializer
    # queryset = {"a": Animal.objects.values_list('animal_type', flat=True).annotate(handle_lower=Lower("animal_type")).distinct("handle_lower")}
    # queryset = json.dumps(list({"animal_type": ["dog", "cat", "rabbit"]}))
    # def get_queryset(self):
    #     temp = {"type" : list(Animal.objects.values_list('animal_type', flat=True).annotate(handle_lower=Lower("animal_type")).distinct("handle_lower"))}
    #     return temp
    # queryset = Animal.objects.all()

# class ListAnimalBreeds(generics.ListCreateAPIView):
#     queryset = Animal.objects.values_list('breed', flat=True).annotate(handle_lower=Lower("breed")).distinct("handle_lower")
#     print("breed:", queryset)
#     serializer_class = AnimalSerializer

# class ListAnimalAges(generics.ListCreateAPIView):
#     queryset = Animal.objects.values_list('age', flat=True).annotate(handle_lower=Lower("age")).distinct("handle_lower")
#     print("age:", queryset)
#     serializer_class = AnimalSerializer

# class ListAnimalGenders(generics.ListCreateAPIView):
#     queryset = Animal.objects.values_list('gender', flat=True).annotate(handle_lower=Lower("gender")).distinct("handle_lower")
#     print("gender:", queryset)
#     serializer_class = AnimalSerializer

# class ListAnimalShelters(generics.ListCreateAPIView):
#     queryset = Animal.objects.values_list('shelter_id', flat=True).distinct().order_by('shelter_id')
#     print("shelter:", queryset)
#     serializer_class = AnimalSerializer
