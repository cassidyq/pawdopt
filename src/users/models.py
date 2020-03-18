from django.db import models
from animals.models import Animal

# Create your models here.
class User(models.Model):
  first_name = models.CharField(max_length=100)
  last_name = models.CharField(max_length=100)
  email = models.CharField(max_length=100)
  password = models.CharField(max_length=100)  
  photo_url = models.CharField(max_length=300, blank=True, null=True)
  bio = models.TextField(blank=True, null=True)

  def __str__(self):
    return self.first_name + self.last_name

class SavedSearch(models.Model):
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)
  query_params = models.CharField(max_length=300)
  name = models.CharField(max_length=35)
  
class Favourite(models.Model):
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)
  animal_id = models.ForeignKey(Animal, on_delete=models.CASCADE)
  active = models.BooleanField(default=True)

