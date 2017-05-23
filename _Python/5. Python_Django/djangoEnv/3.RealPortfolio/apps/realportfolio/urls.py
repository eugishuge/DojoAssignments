from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^testimonials$', views.testimonials),
    url(r'^about_me$', views.about_me),
    url(r'^projects$', views.projects)
]
