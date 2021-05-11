from django.urls import path
from .views import SignUp

urlpatterns = [
    path('sign-up/', SignUp.as_view(), name='signup'),
]