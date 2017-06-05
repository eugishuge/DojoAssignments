from __future__ import unicode_literals
from django.db import models
from ..login.models import User
from datetime import datetime, date

# Create your models here.

class UserManager(models.Manager):
    def add(self, add, session):

        error =[]
        flag = True

        if len(add['destination'])<1:
            error.append("You must enter a Valid Destination")
            flag = False

        if len(add['plan'])<1:
            error.append("You must enter a Valid Plan Description")
            flag = False

        if len(add['start_date'])<1:
            error.append("You must enter a Valid Start Date")
            flag = False

        if len(add['end_date'])<1:
            error.append("You must enter a Valid End Date")
            flag = False

        start = datetime.strptime(add['start_date'],'%Y-%m-%d')
        end = datetime.strptime(add['end_date'],'%Y-%m-%d')
        now = datetime.today()

        if end < start:
            error.append("Your Date Must be after your start")
            flag = False

        if start < now:
            error.append("Your Date Must be after your start")
            flag = False

        if flag:
            Travel.objects.create(destination = add['destination'], travel_start = add['start_date'], travel_end = add['end_date'], plan = add['plan'], created_by = session)

            print type(start), type(end)
            return True
        else:
            print type('now')
            return (False, error)

class Travel(models.Model):
    destination = models.CharField(max_length = 255)
    travel_start = models.DateField(default = True, blank = False)
    travel_end = models.DateField(default = True, blank = False)
    user_id = models.ForeignKey(User, default = True)
    created_by = models.CharField(max_length = 255)
    plan = models.TextField(max_length = 1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
    def __str__(self):
        return self.name

class Join(models.Model):
    all_users = models.ForeignKey(User, related_name="everyone")
    all_travel = models.ForeignKey(Travel, related_name="everything")
