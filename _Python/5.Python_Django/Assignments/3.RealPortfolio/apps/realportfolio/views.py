from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'realportfolio_templates/index.html')

def about_me(request):
    return render(request, 'realportfolio_templates/about_me.html')

def projects(request):
    return render(request, 'realportfolio_templates/projects.html')

def testimonials(request):
    return render(request, 'realportfolio_templates/testimonials.html')
