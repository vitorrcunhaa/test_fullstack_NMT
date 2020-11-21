from rest_framework import generics, permissions
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated

from customers.models import Customer
from customers.serializer import CustomerSerializer


class IsOwner(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.owner == request.user


class CustomerListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated, IsOwner]
    serializer_class = CustomerSerializer

    def perform_create(self, serializer):
        # customer is saved with relationship to its own user
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            return Customer.objects.filter(owner=user)
        raise PermissionDenied()


class CustomerRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated, IsOwner]
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
