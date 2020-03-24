from django.shortcuts import render

# Create your views here.
class ListFavourites(generics.ListCreateAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer