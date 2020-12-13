from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id", "created_at", "title", "description", "body", "teaser_image_url", "banner_image_url"]

