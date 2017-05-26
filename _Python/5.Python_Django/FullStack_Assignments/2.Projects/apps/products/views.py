from django.shortcuts import render
from .models import Products

# Create your views here.
def index(request):
    # Products.objects.create(name="barbell", description = "barbell collars", weight = 10, price = 10.99, cost = 2.50, category = "fitness")

    products = Products.objects.all()

    context = {
    'products' : products
    }

    # for k in products:
    #     print k.name
    #

    return render (request, 'products_templates/index.html', context)
