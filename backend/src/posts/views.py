from .models import Post
from .serializers import PostSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class PostsLits(APIView):
    """
    List all posts, or create a new post.
    """
    def get(self, request, format=None):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PostDetail(APIView):
    def get_post(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404
    def get(self, request, id, format=None):
        post = self.get_post(id)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def delete(self, request, id, format=None):
        post = self.get_post(id)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Create your views here.
