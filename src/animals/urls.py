# animals/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListAnimal.as_view()),
    path('<int:pk>/', views.DetailAnimal.as_view()),
]