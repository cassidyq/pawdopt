# animals/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('/<int:pk>', views.DetailAnimal.as_view()),
    path('', views.ListAnimal.as_view()),
]