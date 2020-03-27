from django.shortcuts import render
from rest_framework import generics, permissions;
from rest_framework.response import Response;
from .serializers import FavouriteSerializer, AnimalSerializer;
from .models import Favourite, Animal;
from django.http import HttpResponse;
from rest_framework.views import APIView


# Create your views here.
class ListFavourites(generics.ListCreateAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer

class DetailFavourites(generics.RetrieveUpdateDestroyAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer
    
class UserFavourites(APIView):
    def get(self, request, userID):
        print(self)
        print(userID)
        print(request)
        # queryset = Animal.objects.all()
        # userID = userID
        # my_query = Favourite.objects.filter(favourite__user_id=userID)
        animalsWeWant = Favourite.objects.filter(user_id = userID).values_list('animal_id', flat=True) #values_list('user_id', flat=True)
        my_query = Animal.objects.filter(pk__in=animalsWeWant).values('name', 'description', 'photo_url', 'animal_type', 'breed', 'age', 'size', 'gender', 'shelter_id')
        print(my_query)
        return Response(my_query)
        # return HttpResponse(my_query, content_type="application/json")

        # return Response(my_query)




    # userID = userID
    # # something = Favourite.objects.filter(id = userID)
    # context = {'favourited_animals': my_query}

    # # return render (request, context)
    # return Response({
    #     "animal": AnimalSerializer(animal, context=self.get_serializer_context()).data,
    #     "hey":"big guy",
    # })