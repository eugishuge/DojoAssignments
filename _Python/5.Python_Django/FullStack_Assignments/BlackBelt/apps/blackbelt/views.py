from django.shortcuts import render, redirect
from ..login.models import User
from .models import Travel, Join
from django.contrib import messages
from sets import Set


# Create your views here.
def travels(request):
    all_users = Join.objects.all()
    all_plans = Join.objects.all().exclude(all_users__username=request.session['username'])

    a = set(Travel.objects.all())
    b = set(Travel.objects.filter(everything__all_users__username=request.session['username']))
    remove = (a.difference(b))

    context = {
    'plans' : Travel.objects.all(),
    'join': Join.objects.all(),
    'user_travel': Join.objects.filter(all_users__username=request.session['username']),
    'all_plans': all_plans,
    'remove': remove,
    'all_users': all_users,
    }
    return render(request, "blackbelt_templates/travels.html", context)

def join_travel(request, _id):
    join_travel = Travel.objects.filter(id = _id)
    join_user = User.objects.filter(username = request.session['username'])

    Join.objects.create(all_travel = join_travel[0], all_users = join_user[0])

    return redirect('/blackbelt/travels')

def trip_details(request,_id):
    trip = Travel.objects.filter(id = _id)
    user = User.objects.filter(username = request.session['username'])
    other_trippers = Join.objects.filter(all_travel__id = _id).exclude(all_users__username = request.session['username'])
    
    context={
    'trip': trip,
    'user': user,
    "other_trippers": other_trippers
    }
    return render(request, "blackbelt_templates/details.html",context)

def go_add(request):
    return render(request, "blackbelt_templates/add.html")

def add(request):
    session = request.session['username']
    _add = Travel.objects.add(request.POST, session)

    user_travel = User.objects.filter(username = request.session['username'])

    if _add == True:
        Join.objects.create(all_users = user_travel[0], all_travel = Travel.objects.latest('id'))
        return redirect('/blackbelt/travels')
    else:
        for x in _add[1]:
            messages.error(request, x)
        return redirect('/blackbelt/go_add')

def logout(request):
    request.session.clear()
    return redirect('/')

def delete(request, _id):
    Join.objects.filter(all_users__username=request.session['username']).filter(all_travel__id=_id).delete()
    return redirect('/blackbelt/travels')
