from django.db import models
from django.contrib.auth.models import User 
from animals.models import Animal

from rest_framework.authtoken.models import Token

# Create your models here.
class Favourite(models.Model):
  user_id = models.ForeignKey(User, related_name='user_id', on_delete=models.CASCADE)
  animal_id = models.ForeignKey(Animal, related_name='animal_id', on_delete=models.CASCADE)
  active = models.BooleanField(default=False)

  def __unicode__(self):
    return self.animal.name