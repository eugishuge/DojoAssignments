from __future__ import unicode_literals
from django.db import models

import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class UserManager(models.Manager):
    def login (self, login):
        flag = True
        error = []
        if len(login['email'])<1:
            error.append("please enter a valid email")
            flag = False

        if not EMAIL_REGEX.match(login['email']):
            error.append("please enter your email in a valid format")
            flag = False

        if len(login['password'])<1:
            error.append("please enter a valid password")
            flag = False

        if flag:
            return True
        else:
            return (False, error)

    def registration (self, register):
        flag = True
        error = []
        if len(register['fname'])>2 and register['fname'].isalpha():
            pass
        else:
            flag = False
            error.append("you did not enter a valid first name")

        if len(register['lname'])>2 and register['lname'].isalpha():
            pass
        else:
            flag = False
            error.append("you did not enter a valid last name")

        if not EMAIL_REGEX.match(register['email']) or len(register['email']) <1:
            flag = False
            error.append("you did not enter a valid email")

        if len(register['new_pw'])<8:
            flag = False
            error.append("your password must be at lesat 8 characters long")

        if register['new_pw'] != register['confirm_pw']:
            flag = False
            error.append("your passwords do not match")

##ACTION TO PERFORM IF REGISTRATION VALIDATION IS TRUE
        if flag:
            User.usermanager.create(first_name = register["fname"], last_name = register['lname'], email = register['email'], password = register['new_pw'])
            return True
        else:
            return (False, error) ##RETURNS OUR LIST OF ERRORS


class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add=True)
    usermanager = UserManager()
