from __future__ import unicode_literals
from django.db import models

# Create your models here.
class UserManager(models.Manager):
    def login(self, login):
        dictionary = {
        'error': [],
        'flag' : True,
        'name' : login['name'],
        'password' : login['password']
        }

        if len(dictionary['name'])<1:
            dictionary['error'].append('you must enter a valid name')
            dictionary['flag'] = False

        if not Users.objects.filter(name = dictionary['name']):
            dictionary['error'].append('You must register first')
            dictionary['flag'] = False

        if len(dictionary['password'])<1:
            dictionary['error'].append('you must enter a valid password')
            dictionary['flag'] = False

        if not Users.objects.filter(password = dictionary['password']):
            dictionary['error'].append('your password does not match your username')
            dictionary['flag'] = False

        return dictionary

    def register(self, register):
        error = []
        flag = True

        if len(register['name'])<1:
            error.append('you must enter a valid name')
            flag = False

        if Users.objects.filter(name = register['name']):
                error.append('you have already registered')
                flag = False

        if len(register['password'])<4:
            error.append("your password must be longer than 4 characters")
            flag = False

        if register['confirm_pw'] != register['password']:
            error.append('your passwords do not match, please try again')
            flag = False

        if flag:
            Users.objects.create(name=register['name'], password = register['password'])
            return True
        else:
            return (False, error)

class Users(models.Model):
    name = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now =True)
    objects = UserManager()

    def __str__(self):
        return self.name
