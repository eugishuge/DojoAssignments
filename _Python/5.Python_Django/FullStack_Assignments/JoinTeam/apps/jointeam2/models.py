from __future__ import unicode_literals
from django.db import models
from ..jointeam.models import Users

# Create your models here.
class UserManager(models.Manager):
    def your_teams(self, teams):
        pass

    def remove(self, remove):
        pass

    def create_team(self, create):
        error = []
        flag = True

        if len(create['create_team'])<1:
            error.append("You must enter a valid team name")
            flag = False

        if Teams.objects.filter(team_name = create['create_team']):
            error.append('This team already exists')
            flag = False

        if flag:
            Teams.objects.create(team_name = create['create_team'])
            return True
        else:
            return (False, error)

class Teams(models.Model):
    team_name = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

    def __str__(self):
        return self.name

class User_teams(models.Model):
    all_users = models.ForeignKey(Users, related_name="all_users")
    all_teams = models.ForeignKey(Teams, related_name="all_teams")
