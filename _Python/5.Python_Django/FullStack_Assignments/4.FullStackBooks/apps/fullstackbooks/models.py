from __future__ import unicode_literals

from django.db import models
class Book_Manager (models.Manager):
    def books(self, postData):
        print 'what is this'
# Create your models here.
class Book (models.Model):
    title = models.CharField(max_length = 255)
    author = models.CharField(max_length = 255)
    category = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = Book_Manager()
