from django.db import models
from enum import Enum

# Art Types Enum -----
class ArtType(Enum):
    CEMENT = 'CEMENT'
    PHOTOGRAPHY = 'PHOTOGRAPHY'
    EMBROIDERY = 'EMBROIDERY'
    POTTERY = 'POTTERY'
    USER_ART = 'USER_ART'

class ArtTypeChoices(models.TextChoices):
    CEMENT = ArtType.CEMENT.value
    PHOTOGRAPHY = ArtType.PHOTOGRAPHY.value
    EMBROIDERY = ArtType.EMBROIDERY.value
    POTTERY = ArtType.POTTERY.value
    USER_ART = ArtType.USER_ART.value

# Models Begin Here ------------
class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)

    def __str__(self):
        return self.username

class ArtItem(models.Model):
    id = models.AutoField(primary_key=True)
    art_type = models.CharField(max_length=30, choices=ArtTypeChoices.choices)
    image = models.ImageField(upload_to='uploads/')

    class Meta:
        abstract = True

class DisplayArtItem(ArtItem):
    title = models.CharField(max_length=60)
    description = models.CharField(max_length=300)

    def __str__(self):
        return f"{self.art_type}_{self.title}_{self.id}"

class StoreArtItem(ArtItem):
    title = models.CharField(max_length=60)
    description = models.CharField(max_length=300)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    quantity = models.IntegerField()
    weight_lbs = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return f"{self.art_type}_{self.title}_{self.id}"

class UserArtItem(ArtItem):
    token = models.CharField(max_length=30)

    def __str__(self):
        return f"{self.art_type}_user_art_{self.id}"
