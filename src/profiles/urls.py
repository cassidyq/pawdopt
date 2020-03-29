from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>', views.DetailProfiles.as_view()),
    path('', views.ListProfiles.as_view()),
]