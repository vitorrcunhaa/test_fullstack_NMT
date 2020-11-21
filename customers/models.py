from django.contrib.auth.models import User
from django.db import models


class Customer(models.Model):
    name = models.CharField(max_length=70, blank=False, default='')
    age = models.PositiveSmallIntegerField()
    city = models.CharField(max_length=100, blank=False, default='')
    owner = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, null=False)
