from django.db import models

# Create your models here.
class Shelter(models.Model):
  name = models.CharField(max_length=100)
  email = models.CharField(max_length=100)
  password = models.CharField(max_length=100)  
  photo_url = models.CharField(max_length=300, blank=True, null=True)
  description = models.TextField(blank=True, null=True)
  website = models.CharField(max_length=300)
  country = models.CharField(max_length=100)
  province = models.CharField(max_length=100)
  city = models.CharField(max_length=100)
  street = models.CharField(max_length=100)
  postal_code = models.CharField(max_length=100)

  def __str__(self):
    return self.name