from django.contrib.auth.models import User
from rest_framework import serializers
from .models import DisplayArtItem, StoreArtItem, UserArtItem

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class DisplayArtItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = DisplayArtItem
        fields = '__all__'

class StoreArtItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoreArtItem
        fields = '__all__'

class UserArtItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserArtItem
        fields = '__all__'