from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from django.views import View

from .forms import SignUpForm


class SignUp(View):
    """" Create a User """
    template_name = 'sign_up/sign_up.html'
    def get(self, request, *args, **kwargs):
        form = SignUpForm()
        context = {
            'form': form
        }
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
