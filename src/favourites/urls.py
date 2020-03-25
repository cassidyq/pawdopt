from django.urls import path

from . import views

urlpatterns = [
    path('/<int:pk>', views.DetailFavourite.as_view()),
    path('', views.ListFavourite.as_view()),
    path('api/addFavourite', FavouriteAPI.as_view()),
]