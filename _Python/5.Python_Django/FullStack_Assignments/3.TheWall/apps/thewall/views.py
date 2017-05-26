from django.shortcuts import render
from .models import Users, Messages, Comments
# Create your views here.
def index(request):
    return render(request, 'thewall_templates/index.html')
