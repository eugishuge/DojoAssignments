from django.shortcuts import render, redirect
from datetime import datetime
import random
# Create your views here.
def index(request):
    if "total" in request.session:
        pass
    else:
        request.session['total'] = 0
        request.session['log'] = []
    # if request.method == "POST":
    #     request.session['total'] = 0
    #     request.session['log'] = []
    # else:
    #     pass
    return render(request,'ninjagold_templates/index.html')

def process(request):
    if request.method == "POST":
        if request.POST['building'] == 'farm':
            gold = random.randrange(10,21)
            request.session['total'] += gold
            request.session['log'].insert(0,("you have earned {} gold - {}".format(gold,datetime.utcnow())))

        elif request.POST['building'] == 'house':
            gold = random.randrange(5,11)
            request.session['total'] += gold
            request.session['log'].insert(0,("you have earned {} gold - {}".format(gold,datetime.utcnow())))
        elif request.POST['building'] == 'cave':
            gold = random.randrange(5,11)
            request.session['total'] += gold
            request.session['log'].insert(0,("you have earned {} gold - {}".format(gold,datetime.utcnow())))
        elif request.POST['building'] == 'casino':
            gold = random.randrange(-50,51)
            request.session['total'] += gold
            request.session['log'].insert(0,("you have earned {} gold - {}".format(gold,datetime.utcnow())))
    else:
        print "DIDNT WORK"

    return redirect ('/')

def clear(request):
    if request.method =="POST":
        request.session.clear()
    else:

        request.session.clear()
    return redirect ('/')
