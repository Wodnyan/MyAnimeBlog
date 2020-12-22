from django.db import models
from accounts.models import User

max_length_of_url = 2000

class Post(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200, blank=True, null=True)
    body = models.TextField()
    teaser_image_url = models.CharField(max_length=max_length_of_url)
    banner_image_url = models.CharField(max_length=max_length_of_url)
    writer = models.ForeignKey(User, on_delete=models.CASCADE)


# Create your models here.
