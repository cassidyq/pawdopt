from django.db import models
from django.contrib.auth.models import User 
from rest_framework.authtoken.models import Token

from animals.models import Animal


# Create your models here.
class Application(models.Model):
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)
  animal_id = models.ForeignKey(Animal, related_name="applications", on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  status = models.CharField(max_length=100, blank=True )
  info = models.TextField(blank=True, null=True)