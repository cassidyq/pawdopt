from django.shortcuts import render
from rest_framework import generics, permissions;
from rest_framework.response import Response;
from .serializers import FavouriteSerializer, AnimalSerializer;
from .models import Favourite, Animal;

# Create your views here.
class ListFavourites(generics.ListCreateAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer

class DetailFavourites(generics.RetrieveUpdateDestroyAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer
    
    def get_favourited(request, userID, *args, **kwargs):
        print(userID)
        userID = userID
        # something = Favourite.objects.filter(id = userID)
        my_query = Animal.objects.filter(favourites__user_id=userID)
        context = {'favourited_animals': my_query}

        # return render (request, context)
        return Response({
            "animal": AnimalSerializer(animal, context=self.get_serializer_context()).data,
            "hey":"big guy",
        })