from django.urls import path
from learnyBackEndAPI.views import index, MatchingView

app_name='learnyBackEndAPI'

urlpatterns = [
    path('', index, name='index'),
    path('api', MatchingView.as_view()),
]