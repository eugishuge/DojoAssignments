from django.shortcuts import render, redirect
from .models import Friend, Friendship
# Create your views here.
def index(request):
    friend = Friend.objects.all()
    context = {
    "friend" : friend,
    "all_friends" : Friendship.objects.all()
    }
    return render(request, 'friendships_templates/index.html',context)

def create(request):
    Friend.objects.create(name = request.POST['name'])

    return redirect ('/')

def process(request):
    one = Friend.objects.filter(id = request.POST['friend_1'])
    
    two = Friend.objects.filter(id = request.POST['friend_2'])

    Friendship.objects.create(friend_1 = one[0], friend_2 = two[0])

    return redirect ('/')
