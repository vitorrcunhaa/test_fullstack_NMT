from django.contrib.auth import authenticate, login

from django.shortcuts import render, redirect

from core.forms import SignUpForm
from customers.customers_mock import customers_dummy_data
from customers.models import Customer


def index(request):
    return render(request, 'core/index.html')


def register(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            for customer in customers_dummy_data:
                Customer.objects.create(owner=user, name=customer['name'], age=customer['age'], city=customer['city'])
            return redirect('index')

        return render(request, 'register.html', {'form': form})

    else:
        form = SignUpForm()
        return render(request, 'register.html', {'form': form})