
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .serializers import UserSerializer, DisplayArtItemSerializer, StoreArtItemSerializer, UserArtItemSerializer
from .models import DisplayArtItem, StoreArtItem, UserArtItem

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

class DisplayArtItemViewSet(viewsets.ModelViewSet):
    queryset = DisplayArtItem.objects.all()
    serializer_class = DisplayArtItemSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class StoreArtItemViewSet(viewsets.ModelViewSet):
    queryset = StoreArtItem.objects.all()
    serializer_class = StoreArtItemSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class UserArtItemViewSet(viewsets.ModelViewSet):
    queryset = UserArtItem.objects.all()
    serializer_class = UserArtItemSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]