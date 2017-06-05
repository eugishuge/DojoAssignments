from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^success$', views.success),
    url(r'^go_create$', views.go_create),
    url(r'^create_team$', views.create_team),
    url(r'^join_team$', views.join_team),
    url(r'^team_info$', views.team_info),
    url(r'^logout$', views.logout),
    url(r'^go_back$', views.go_back),
    url(r'^remove$', views.remove),
    url(r'^user_info/(?P<_id>\d+)$', views.user_info)
]
