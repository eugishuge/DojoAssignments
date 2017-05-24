from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    if request.method == "GET":
        request.session['counter'] = 0
    else: pass

    return render(request, 'survey_templates/index.html')

def results(request):
    return render(request,'survey_templates/results.html')

def process(request):
    #store all logic here on session and calling results
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comment'] = request.POST['comment']

    request.session['counter'] += 1

    return redirect ('/results')

def clear(request):
    if request.method == "POST":
        request.session.clear()
    return redirect ('/')
