from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import exceptions
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from .serializers import UserSerializer
from django.contrib.auth.hashers import make_password
from .utils import generate_access_token, generate_refresh_token

@api_view(['GET'])
def profile(request):
    user = request.user
    serialized_user = UserSerializer(user).data
    return Response({'user': serialized_user })

@api_view(["POST"])
@permission_classes([AllowAny])
def register(request):
    serialized_user = UserSerializer(data=request.data)
    response = Response();
    if serialized_user.is_valid():
        password = make_password(request.data["password"])
        serialized_user.save(password=password)
        access_token = generate_access_token(serialized_user.data)
        refresh_token = generate_refresh_token(serialized_user.data)
        print(access_token, refresh_token)
        response.data = {
            "user": serialized_user.data,
            "access_token": access_token,
        }
        response.status_code = status.HTTP_201_CREATED
        response.set_cookie(key="refreshtoken", value=refresh_token, httponly=True)
        return response
    response.data = serialized_user.errors
    response.status_code = status.HTTP_400_BAD_REQUEST
    return response

@api_view(["POST"])
@permission_classes([AllowAny])
def login(request):
    User = get_user_model()
    email = request.data.get("email")
    password = request.data.get("password")
    response = Response()
    if (email is None) or (password is None):
        raise exceptions.AuthenticationFailed("username and password are required")

    user = User.objects.filter(email=email).first()
    if(user is None):
        raise exceptions.AuthenticationFailed("user not found")
    if (not user.check_password(password)):
        raise exceptions.AuthenticationFailed("wrong password")

    serialized_user = UserSerializer(user).data
    access_token = generate_access_token(serialized_user)
    refresh_token = generate_refresh_token(serialized_user)

    print(access_token,refresh_token)

    response.set_cookie(key="refreshtoken", value=refresh_token, httponly=True)
    response.data = {
        "access_token": access_token,
        "user": serialized_user,
    }
    return response