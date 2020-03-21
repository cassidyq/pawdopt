from django.db import models
from django.contrib.postgres.fields import ArrayField



# Create your models here.
class Category(models.Model):
  types = ArrayField(models.CharField(max_length=200), blank=True)

  # def __str__(self):
  #   return self.name