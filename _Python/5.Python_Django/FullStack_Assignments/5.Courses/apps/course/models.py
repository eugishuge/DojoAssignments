from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Course(models.Model):
    Course_Name = models.CharField(max_length = 255)
    Description = models.TextField(max_length = 1000)
    Date_added = models.DateTimeField(auto_now_add=True)
