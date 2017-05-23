from django.shortcuts import render, redirect
import random
# Create your views here.


def index(request):
    if not 'count':
        request.session['count'] = 0
    else:
        pass

    return render(request, 'randomword_templates/index.html')

def random_word(request):
    if request.method == "POST":
        request.session['count'] += 1

    words = ['hello', 'random', 'pizza', 'car', 'festivus','Bruno Mars']

    context = {
    'random': random.choice(words)
    }

    return render (request,'randomword_templates/index.html', context)

def clear(request):
    if request.method == "POST":
        request.session.clear()
    return redirect ('/')
