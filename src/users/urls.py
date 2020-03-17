# users/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListUser.as_view()),
    path('<int:pk>/', views.DetailUser.as_view()),
    path('', views.ListSavedSearch.as_view()),
    path('<int:pk>/', views.DetailSavedSearch.as_view()),
    path('', views.ListFavourite.as_view()),
    path('<int:pk>/', views.DetailFavourite.as_view()),
]