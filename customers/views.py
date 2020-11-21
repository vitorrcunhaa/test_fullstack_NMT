from django.http import JsonResponse
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated

from customers.models import Customer
from customers.serializer import CustomerSerializer


class CustomerListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class CustomerRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


# @api_view(['GET', 'POST', 'DELETE'])
# def customer_list(request):
#     if request.method == 'GET':
#         customers = Customer.objects.all()
#         customers_serializer = CustomerSerializer(customers, many=True)
#         return JsonResponse(customers_serializer.data, safe=False)
#
#
# @api_view(['GET', 'PUT', 'DELETE'])
# def customer_detail(request, pk):
#     # find customer by pk (id)
#     try:
#         customer = Customer.objects.get(pk=pk)
#     except Customer.DoesNotExist:
#         return JsonResponse({'message': 'The customer does not exist'}, status=status.HTTP_404_NOT_FOUND)
