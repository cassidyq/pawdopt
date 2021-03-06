"""pawdopt URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', incl ude('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework.authtoken.views import obtain_auth_token  # <-- Here

urlpatterns = [
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),  # <-- And here
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('api/shelters/', include('shelters.urls')),
    path('api/animals/', include('animals.urls')),
    path('api/profiles/', include('profiles.urls')),
    path('api/applications/', include('applications.urls')),
    path('api/login/', include('applications.urls')),
    path('', include('accounts.urls')),
    path('api/favourites/', include('favourites.urls')),
    
    # path('api/users/saved-searches', include('users.urls')),
    # path('api/users/favourites', include('users.urls')),

]
