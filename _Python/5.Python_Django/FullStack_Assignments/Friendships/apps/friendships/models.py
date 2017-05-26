from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Friend(models.Model):
    name = models.CharField(max_length = 255)

class Friendship(models.Model):
    friend_1 = models.ForeignKey(Friend, related_name='first')
    friend_2 = models.ForeignKey(Friend, related_name='second')
