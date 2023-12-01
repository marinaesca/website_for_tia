
from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'display_art_items', views.DisplayArtItemViewSet)
router.register(r'store_art_items', views.StoreArtItemViewSet)
router.register(r'user_art_items', views.UserArtItemViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]