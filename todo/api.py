from .models import Todo
from rest_framework import viewsets, permissions
from .serializers import TodoSerializer


class TodoViewset(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = TodoSerializer
