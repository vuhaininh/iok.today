# Generated by Django 3.0.3 on 2020-02-26 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0006_auto_20200225_0748'),
    ]

    operations = [
        migrations.AddField(
            model_name='individualcustomerprofile',
            name='email',
            field=models.CharField(max_length=100, null=True),
        ),
    ]