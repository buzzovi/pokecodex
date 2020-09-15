from django.contrib.auth.models import Group, User
from rest_framework import serializers

from .models import Pokemon


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = ['id', 'name', 'img_url_small', 'img_url_big', 'types', 'total', 'hp',
                  'attack', 'defense', 'sp_atk', 'sp_def', 'speed', 'info', 'created', 'modified']
