"""pokecodexapi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from django.views.generic.base import RedirectView
from rest_framework import routers
from rest_framework.schemas import get_schema_view

from pokecodexapi import views

favicon_view = RedirectView.as_view(
    url='/static/images/favicon.png', permanent=True)

router = routers.DefaultRouter()
router.register(r'pokemon', views.PokemonViewSet)

urlpatterns = [
    path('', include(router.urls)),
    re_path(r'^favicon\.ico$', favicon_view),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
    path('openapi', get_schema_view(
        title="Pokecodex API",
        description="API for Pokemons",
        version="1.0.0"
    ), name='openapi-schema'),
    path('swagger-ui/', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url': 'openapi-schema'}
    ), name='swagger-ui'),
]
