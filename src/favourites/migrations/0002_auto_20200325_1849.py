# Generated by Django 3.0.4 on 2020-03-25 18:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('animals', '0001_initial'),
        ('favourites', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favourite',
            name='animal_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='animal_id', to='animals.Animal'),
        ),
        migrations.AlterField(
            model_name='favourite',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_id', to=settings.AUTH_USER_MODEL),
        ),
    ]
