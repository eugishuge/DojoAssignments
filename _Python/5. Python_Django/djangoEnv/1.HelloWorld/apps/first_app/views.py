from django.shortcuts import render
  # the index function is called when root is visited
def index(request):
    response = "Hello, I am your first request!"
    return render (request, 'first_app_templates/index.html')
