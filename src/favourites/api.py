# from rest_framework import generics, permissions;
# from rest_framework.response import Response;
# from .serializers import FavouriteSerializer;

# class FavouriteAPI(generics.GenericAPIView):
#   serializer_class = FavouriteSerializer

#   def post(self, request, *args, **kwargs):
#     serializer = self.get_serializer(data=request.data)
#     serializer.is_valid(raise_exception=True)
#     favourite = serializer.save()
#     return Response({
#       "user": UserSerializer(user, context=self.get_serializer_context()).data,
#       "animal": AnimalSerializer(animal, context=self.get_serializer_context()).data,
#     })