from django.shortcuts import render, redirect
from .models import Book
# Create your views here.
def index (request):
    # Book.objects.create(title="Game of Thrones", author = 'Roger Sloan', category = "History")
    #
    # Book.objects.create(title="Rich Dad Poor Data", author = "Ivana Fukalut", category = "Educational")

    book = Book.objects.all()

    context = {
    'book': book
    }

    return render (request, 'fullstackbooks_templates/index.html',context)

def process (request):
    Book.objects.create(title = request.POST['title'], author = request.POST['author'], category = request.POST['category'])
    return redirect ('/')
