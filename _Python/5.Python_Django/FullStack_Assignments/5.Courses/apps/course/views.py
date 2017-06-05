from django.shortcuts import render, redirect
from .models import Course

# Create your views here.
def index(request):
    course = Course.objects.all()
    context = {
    'course' : course
    }
    return render (request, "courses_templates/index.html", context)

def create(request):
    Course.objects.create(Course_Name = request.POST['name'], Description = request.POST['description'])

    return redirect ('/')

# def delete(request, id):
#
#     context = {
#     "delete" : Course.objects.filter(id = id)
#     }
#
#     return render(request, "courses_templates/delete.html", context)

def remove (request,id):
    Course.objects.filter(id = id).delete()

    return redirect ('/')
