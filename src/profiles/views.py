from django.shortcuts import render
from rest_framework import generics, permissions
from .models import UserProfile
from django.contrib.auth.models import User
from .serializers import UserProfileSerializer

# Create your views here.

class ListProfiles(generics.ListCreateAPIView):
  queryset = UserProfile.objects.all()
  serializer_class = UserProfileSerializer

class DetailProfiles(generics.RetrieveUpdateDestroyAPIView):
  queryset = User.objects.all().select_related('userprofiles')
  # queryset = UserProfile.objects.all()
  serializer_class = UserProfileSerializer

  # def update_profile(self, request, user_id):
  #   user = User.objects.get(pk=user_id)
  #   # user.profile.bio = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
  #   user.save()
