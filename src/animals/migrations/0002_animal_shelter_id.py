# Generated by Django 3.0.4 on 2020-03-16 20:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shelters', '0001_initial'),
        ('animals', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='animal',
            name='shelter_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='shelters.Shelter'),
            preserve_default=False,
        ),
    ]
