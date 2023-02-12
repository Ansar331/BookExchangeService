from rest_framework.permissions import IsAuthenticated
from api.serializers import BookSerializer
from api.models import Book
from rest_framework import generics


class ListCreateBooks(generics.ListCreateAPIView):
    serializer_class = BookSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Book.objects.filter(created_by=self.request.user)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class RetrieveUpdateDestroyBooks(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = BookSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Book.objects.filter(created_by=self.request.user)
