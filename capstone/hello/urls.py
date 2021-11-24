from django.urls import path
from . import views

urlpatterns = [
    #empty route that loads the index function
    path("", views.index, name = "index")
]