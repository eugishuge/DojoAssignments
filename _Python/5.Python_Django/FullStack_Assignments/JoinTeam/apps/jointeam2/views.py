from django.shortcuts import render, redirect
from django.contrib import messages
from ..jointeam.models import Users
from .models import Teams, User_teams
from sets import Set


# Create your views here.
def success(request):
    join_team = Teams.objects.all()
    all_users = Users.objects.all

#This removes team names from the list if already joined
    a = set(Teams.objects.all())
    b = set(Teams.objects.filter(all_teams__all_users__name=request.session['user']))
    remove = (a.difference(b))

    context = {
    'team' : join_team,
    'user_teams' : User_teams.objects.filter(all_users__name = request.session['user']),
    'all_users' : all_users,
    'remove' : remove
    }
    return render (request, "team2_templates/success.html", context)

def join_team(request):
#
    join_team = Teams.objects.filter(id = request.POST['join_team'])
    join_user = Users.objects.filter(name = request.session['user'])

    User_teams.objects.create(all_teams = join_team[0], all_users = join_user[0])

    return redirect('/jointeam2/success')

def team_info (request):
    team_roster = request.POST['view_info']

    context={
    'roster': User_teams.objects.filter(all_teams__team_name = team_roster),

    'count' : User_teams.objects.filter(all_teams__team_name = team_roster).count(),

    }
    # print request.session['user']
    return render(request, "team2_templates/team_info.html", context)

def remove (request, _id):
    User_teams.objects.filter(all_users__id = _id).delete()

    return redirect('/jointeam2/success')

def user_info (request, _id):
    user = Users.objects.filter(id=_id)
    teams = User_teams.objects.filter(all_users__id = _id)

    context = {
    'user': user,
    'teams': teams
    }

    return render(request, "team2_templates/user_info.html", context)

def go_create(request):
    return render(request, 'team2_templates/create_team.html')

def create_team(request):
    _create = Teams.objects.create_team(request.POST)

    if _create == True:
        return redirect('/jointeam2/success')
    else:
        for x in _create[1]:
            messages.error(request, x)
        return redirect('/jointeam2/go_create')

def logout (request):
    request.session.clear()
    return redirect('/')


def go_back (request):
    return redirect('/success')
