# applications/views.py
from rest_framework import generics

from .models import Application
from .serializers import ApplicationSerializer


class ListApplication(generics.ListCreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer


class DetailApplication(generics.RetrieveUpdateDestroyAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
