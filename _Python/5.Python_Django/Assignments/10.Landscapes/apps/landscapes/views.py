from django.shortcuts import render

# Create your views here.
def index(request):
    return render (request, 'landscapes_templates/index.html')

def landscape(request, id):

    context ={
    "id" : int(id)
    }

    if int(id) > 50 or int(id)<1:
        return redirect ('/')
    else:
        return render (request, 'landscapes_templates/landscape.html', context)
