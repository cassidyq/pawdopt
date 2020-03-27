from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>', views.DetailFavourites.as_view()),
    path('', views.ListFavourites.as_view()),
    path('get_favourited/<userID>', views.DetailFavourites.get_favourited, name='get_favourited'),
]