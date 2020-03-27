from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>', views.DetailFavourites.as_view()),
    path('', views.ListFavourites.as_view()),
    path('get_favourited/<userID>', views.UserFavourites.as_view(), name='get_favourited'),
]