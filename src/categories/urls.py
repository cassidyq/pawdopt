# animals/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('temp/', views.ListAnimalTypes.as_view()),
]