# shelters/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListShelter.as_view()),
    path('<int:pk>/', views.DetailShelter.as_view()),
]