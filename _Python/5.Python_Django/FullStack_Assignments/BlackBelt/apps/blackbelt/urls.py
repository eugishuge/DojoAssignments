from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^travels$', views.travels, name = 'travels'),
    url(r'^join_travel/(?P<_id>\d+)$', views.join_travel, name = 'join_travel'),
    url(r'^add$', views.add, name = 'add'),
    url(r'^trip_details/(?P<_id>\d+)$', views.trip_details, name = 'trip_details'),
    url(r'^go_add$', views.go_add, name = 'go_add'),
    url(r'^logout$', views.logout, name = 'logout'),
    url(r'^delete/(?P<_id>\d+)$', views.delete, name = 'delete'),
]
