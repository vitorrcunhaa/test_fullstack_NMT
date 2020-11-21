from django.contrib import admin
from .models import Customer


class CustomerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'age', 'city', 'owner')
    list_display_links = ['id', 'name', 'age', 'city', 'owner']


admin.site.register(Customer, CustomerAdmin)
