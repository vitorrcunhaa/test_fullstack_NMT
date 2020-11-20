from django.urls import path

from customers import views

urlpatterns = [
    path(r'customers/', views.CustomerListCreateAPIView.as_view()),
    path(r'customers/<int:pk>/', views.CustomerRetrieveUpdateDestroyAPIView.as_view()),
    # path(r'^api/customers$', views.customer_list),
    # path(r'^api/customers/(?P<pk>[0-9]+)$', views.customer_detail),
]
