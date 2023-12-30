from django.contrib import admin
from .models import DisplayArtItem, StoreArtItem, UserArtItem

admin.site.register(DisplayArtItem)
admin.site.register(StoreArtItem)
admin.site.register(UserArtItem)