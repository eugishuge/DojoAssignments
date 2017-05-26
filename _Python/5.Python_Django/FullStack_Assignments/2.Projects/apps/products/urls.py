from django.conf.urls import url, include
from . import views
from .models import Products

urlpatterns = [
    url(r'^$', views.index)
]
