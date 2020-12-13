from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path("posts/", views.PostsLits.as_view()),
    path("posts/<int:id>", views.PostDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
