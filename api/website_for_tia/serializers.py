from django.contrib.auth.models import User
from rest_framework import serializers
from .models import User, DisplayArtItem, StoreArtItem, UserArtItem


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class DisplayArtItemSerializer(serializers.Serializer):
    class Meta:
        model = DisplayArtItem
        fields = '__all__'

class StoreArtItemSerializer(serializers.Serializer):
    class Meta:
        model = StoreArtItem
        fields = '__all__'

class UserArtItemSerializer(serializers.Serializer):
    class Meta:
        model = UserArtItem
        fields = '__all__'