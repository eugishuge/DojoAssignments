from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'disappearninja_templates/index.html')

def ninjas(request):
    return render(request, 'disappearninja_templates/ninjas.html')

def each (request, color):
    context = {
    'blue' : 'Leonardo',
    'purple' : 'Donatello',
    'orange' : 'Michelangelo',
    'red' : 'Raphael'
    }

    if color not in context:
        dictionary = {
        'turtle' : 'notapril'
        }
    else:
        dictionary = {
        'turtle' : context[color]
        }

    return render(request, 'disappearninja_templates/ninjacolor.html', dictionary,context)
