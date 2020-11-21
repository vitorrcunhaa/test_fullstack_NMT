from django.urls import path

from customers import views

urlpatterns = [
    path(r'customers/', views.CustomerListCreateAPIView.as_view()),
    path(r'customers/<int:pk>/', views.CustomerRetrieveUpdateDestroyAPIView.as_view()),
]
