from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save


# Create your models here.
class UserProfile(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  photo_url = models.CharField(max_length=300, blank=True, null=True)
  name = models.TextField(blank=True, null=True)
  address = models.TextField(blank=True, null=True)
  city = models.TextField(blank=True, null=True)
  postalCode = models.TextField(blank=True, null=True)
  phone = models.TextField(blank=True, null=True)
  email = models.TextField(blank=True, null=True)
  birthdate = models.TextField(blank=True, null=True)
  house = models.TextField(blank=True, null=True)
  kids = models.TextField(blank=True, null=True)
  otherPets = models.TextField(blank=True, null=True)
  allergic = models.TextField(blank=True, null=True)
  animalStay = models.TextField(blank=True, null=True)
  activityLevel = models.TextField(blank=True, null=True)
  why = models.TextField(blank=True, null=True)

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.userprofile.save()


# /api/user/profile

#1. switch where we are get info from
#2. profile url?