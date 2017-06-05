from django.shortcuts import render, redirect
from .models import Users
from django.contrib import messages
# Create your views here.
def index (request):
        return render (request,
     'jointeam_templates/templates.html')

def login(request):
    _login = Users.objects.login(request.POST)


    if _login['flag']:
        request.session['user'] = _login['name']
        print request.session['user']
        return redirect ('/success')
    else:
        for x in _login['error']:
            messages.error(request, x)
        print 'login failed'
        return redirect('/')


def register(request):
    _register = Users.objects.register(request.POST)

    if _register == True:
        print 'succesful registration'
        request.session['user'] = request.POST['name']
        return redirect ('/success')
    else:
        for x in _register[1]:
            messages.error(request, x)
        print 'registration failed'
        return redirect ('/')


def success(request):
    return redirect('/jointeam2/success')
