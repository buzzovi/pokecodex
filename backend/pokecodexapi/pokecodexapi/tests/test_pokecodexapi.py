import pytest
from django.contrib.auth.models import User
from pokecodexapi.models import Pokemon
from rest_framework.test import RequestsClient
import json


@pytest.mark.django_db
def test_create_user():
    active_user = User.objects.create_user(username='testuser',
                                           email='active_user@example.com', password='pass')
    assert User.objects.filter(id=active_user.id).exists()


@pytest.mark.django_db
def test_create_pokemon():
    pokemon = Pokemon.objects.create(
        name="Bulbasaur", info="Grass pokemon")
    assert Pokemon.objects.filter(id=pokemon.id).exists()


@pytest.mark.django_db
def test_api():
    Pokemon.objects.create(
        name="Bulbasaur", info="Grass pokemon")
    client = RequestsClient()
    response = client.get('http://127.0.0.1/pokemon/')
    assert response.status_code == 200
    assert json.loads(response.content)["count"] == 1
