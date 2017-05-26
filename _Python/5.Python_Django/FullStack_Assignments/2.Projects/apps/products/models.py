from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Products (models.Model):
    name = models.CharField(max_length = 255)
    description = models.TextField(max_length = 1000)
    weight = models.IntegerField()
    price = models.FloatField()
    cost = models.FloatField()
    category = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
