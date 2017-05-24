from django.shortcuts import render, redirect
import random

# Create your views here.
VALUES = ['one', 'two', 'three', 'four', 'five','six']

def index(request):
    if "number" in request.session:
        pass
    else:
        request.session['number'] = 0
        request.session['log'] = []

    random.shuffle(VALUES)

    return render (request, 'surpriseme_templates/index.html')

def strings(request):
    request.session['number'] = request.POST['number']
    number = request.session['number']
    i = 0
    request.session['log'] = []
    while (i < int(number)):
        i+=1
        request.session['log'].insert(0,(VALUES[i]))
    print request.session['log']
    return render (request,'surpriseme_templates/strings.html')
