from django.utils.translation import gettext_lazy as _
from django.db import models


class Pokemon(models.Model):
    """" Pokemon
    """
    name = models.CharField(max_length=255, unique=True)
    img_url_small = models.TextField(null=True, blank=True)
    img_url_big = models.TextField(null=True, blank=True)
    types = models.TextField(null=True, blank=True)
    total = models.IntegerField(default=0)
    hp = models.IntegerField(default=0)
    attack = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)
    sp_atk = models.IntegerField(default=0)
    sp_def = models.IntegerField(default=0)
    speed = models.IntegerField(default=0)
    info = models.TextField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    modified = models.DateTimeField(auto_now=True, null=True, blank=True)

    objects = models.Manager()

    class Meta:
        verbose_name = "Pokemon"
        ordering = ['id']
