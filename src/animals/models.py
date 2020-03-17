from django.db import models
from shelters.models import Shelter


# Create your models here.
class Animal(models.Model):
  name = models.CharField(max_length=100)
  desctription = models.TextField(blank=True, null=True)
  animal_type = models.CharField(max_length=100)
  breed = models.CharField(max_length=100)
  age = models.CharField(max_length=100)
  size = models.CharField(max_length=100)
  gender = models.CharField(max_length=100)
  shelter_id = models.ForeignKey(Shelter, on_delete=models.CASCADE)

  def __str__(self):
    return self.name