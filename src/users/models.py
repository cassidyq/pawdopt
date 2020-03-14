from django.db import models

# Create your models here.
class User(models.Model):
  first_name = models.CharField(max_length=100)
  last_name = models.CharField(max_length=100)
  email = models.CharField(max_length=100)
  password = models.CharField(max_length=100)
  photo_url = models.TextField()
  bio = models.TextField(blank=True, null=True)