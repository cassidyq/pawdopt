from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>', views.DetailFavourites.as_view()),
    path('', views.ListFavourites.as_view()),

]