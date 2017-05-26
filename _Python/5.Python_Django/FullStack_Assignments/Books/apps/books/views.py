from django.shortcuts import render
from .models import Books

# Create your views here.
def index(request):
    # Books.objects.create(title = "My Side of the Mountain", author = "I.P Freely", published_date = "1999-04-12", category = "Outdoors Books")
    #
    # Books.objects.create(title = "Calvin and Hobbes", author = "Bill Watterson", published_date = "2000-08-19", category = "comics")
    #
    # Books.objects.create(title = "To Kill a Mockingbird", author = "Ivana Fuqs", published_date = "2003-05-07", category = "School Reading")
    #
    # Books.objects.create(title = "New Book", author = "Tank Freeman", published_date = "1997-09-08", category = "New Reading")

    books = Books.objects.all()

    context = {
    'books' : books
    }

    # for i in books:
    #     print i.id
    #     print i.author
    #     print i.title
    return render (request, "books_templates/index.html", context)
