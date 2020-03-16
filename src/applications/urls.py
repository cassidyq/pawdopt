# todos/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListApplication.as_view()),
    path('<int:pk>/', views.DetailApplication.as_view()),
]