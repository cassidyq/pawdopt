# Generated by Django 3.0.4 on 2020-03-25 23:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0003_auto_20200325_2255'),
    ]

    operations = [
        migrations.RenameField(
            model_name='application',
            old_name='created',
            new_name='created_at',
        ),
        migrations.RenameField(
            model_name='application',
            old_name='updated',
            new_name='updated_at',
        ),
    ]