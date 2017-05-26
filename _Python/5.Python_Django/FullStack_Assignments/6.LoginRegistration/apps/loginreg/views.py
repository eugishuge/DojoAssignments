from django.shortcuts import render, redirect
from .models import User, UserManager
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'loginreg_templates/index.html')


def login(request):
    _login = User.usermanager.login(request.POST)

    if _login == True:
        print 'yessssss'
        return redirect ('/success')
    else:

        for err in _login[1]:
            messages.error(request, err)
        return redirect ('/')


def create_user(request):
    _registration = User.usermanager.registration(request.POST)

    if _registration == True:
        print "this works"
        return render(request, 'loginreg_templates/success.html')
    else:
        for err in _registration[1]:
            messages.error(request, err)
        return redirect ('/')


def success (request):

    # user = User.usermanager.filter(email = )


    context = {
    "logged_in" : user
    }

    return render(request, 'loginreg_templates/success.html', context)
