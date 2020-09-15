import re
from datetime import date, timedelta

import requests
from django.contrib.auth.models import Group, User
from django.http import HttpResponse, JsonResponse
from django.utils.html import strip_tags
from rest_framework import permissions, viewsets, generics, filters
from django_filters.rest_framework import DjangoFilterBackend

from pokecodexapi.models import Pokemon
from pokecodexapi.serializers import (UserSerializer, GroupSerializer,
                                      PokemonSerializer,)


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class PokemonViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Pokemon to be viewed or edited.
    """
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', '=id']
