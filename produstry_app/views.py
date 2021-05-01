from django.shortcuts import render, HttpResponse
from django.views.generic import View



class HomePage(View):
    ''' Create Produstry Home page '''
    template_name = 'index.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)
