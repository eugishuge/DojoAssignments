from __future__ import unicode_literals

from django.db import models

# Create your models here.
class UserManager(models.Manager):
    def login(self, login):

        error = []
        flag = True

        if len(login['username'])<1:
            error.append('you must enter a valid username')
            flag = False

        if not User.objects.filter(username = login['username']):
            error.append('Please register an account first')
            flag = False

        if len(login['password'])<1:
            error.append('you must enter a valid password')
            flag = False

        if not User.objects.filter(password = login['password']):
            error.append('your password does not match your username')
            flag = False

        if flag:
            return True
        else:
            return (False, error)
######################################################################
    def register(self, register):
        error = []
        flag = True

        if len(register['fname'])<1:
            error.append('you must enter a valid first name')
            flag = False

        if len(register['lname'])<1:
            error.append('you must enter a valid last name')
            flag = False

        if len(register['username'])<2:
            error.append('you must enter a valid username')
            flag = False

        if User.objects.filter(username = register['username']):
            error.append('you have already registered')
            flag = False

        if len(register['password'])<8:
            error.append("your password must be at least 8 characters long")
            flag = False

        if register['confirm_pw'] != register['password']:
            error.append('your passwords do not match, please try again')
            flag = False

        if flag:
            User.objects.create(first_name=register['fname'], last_name = register['lname'], username = register['username'], password = register['password'])
            return True
        else:
            return (False, error)

class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    username = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now =True)
    objects = UserManager()
    def __str__(self):
        return self.name
