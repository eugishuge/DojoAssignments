from django.shortcuts import render
from datetime import datetime

# Create your views here.
def index(request):
    # print dumps(datetime.now().strftime('%H:%M:%S %p'))
    # print type(datetime.now().strftime('%H:%M:%S %p'))
    time = datetime.now().strftime('%I:%M:%S %p')
    date = datetime.now().strftime('%b %d, %Y')
    context = {
    'date' : date,
    'time': time
    }
    return render (request, 'time_display/index.html', context)
