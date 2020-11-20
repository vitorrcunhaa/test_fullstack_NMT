from django.db import models


class Customer(models.Model):
    name = models.CharField(max_length=70, blank=False, default='')
    age = models.PositiveIntegerField()
    city = models.CharField(max_length=200,blank=False, default='')
