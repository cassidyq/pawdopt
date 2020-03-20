from django.shortcuts import render

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
