from django.db import models
from django.contrib.auth.models import User 
from animals.models import Animal


# Create your models here.
class Application(models.Model):
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)
  animal_id = models.ForeignKey(Animal, on_delete=models.CASCADE)
  info = models.TextField(blank=True, null=True)