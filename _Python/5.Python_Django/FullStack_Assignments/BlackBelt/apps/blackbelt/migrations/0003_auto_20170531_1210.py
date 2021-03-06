# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-05-31 16:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blackbelt', '0002_travel_user_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='travel',
            name='created_by',
            field=models.CharField(default=True, max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='travel',
            name='travel_end',
            field=models.DateField(default=True),
        ),
        migrations.AlterField(
            model_name='travel',
            name='travel_start',
            field=models.DateField(default=True),
        ),
    ]
