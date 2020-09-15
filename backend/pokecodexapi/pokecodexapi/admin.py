from django.contrib import admin
from django.utils.translation import ugettext_lazy as _

from .models import Pokemon


@admin.register(Pokemon)
class PokemonAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'modified')
    fieldsets = (
        (None, {'fields': (
                'name', 'types', 'info')
                }),
        ("Statistics", {'fields': (
            'total', 'hp',
            'attack', 'defense', 'sp_atk', 'sp_def', 'speed')
        }),
        ("Images", {'fields': (
            'img_url_small', 'img_url_big',)
        }),
    )

    list_display = ('pk', 'name',)
    search_fields = ('name',)
    list_filter = ('name',)
