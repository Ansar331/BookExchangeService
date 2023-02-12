from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.utils.decorators import method_decorator

from api.serializers import UserSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView

from django.db.utils import IntegrityError


# Use this view for debugging
# class ListUsers(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


class ListUsers(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            return Response(UserSerializer(User.objects.all(), many=True).data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)


class Signup(APIView):
    def post(self, request):
        try:
            user = User.objects.create_user(username=request.data.get('username'),
                                            email=request.data.get('email'),
                                            password=request.data.get('password'))

            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_201_CREATED)
        except IntegrityError:
            return Response(status=status.HTTP_406_NOT_ACCEPTABLE)


@api_view(['POST'])
def login(request):
    serializer = AuthTokenSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data.get('user')
    token, created = Token.objects.get_or_create(user=user)
    return Response({'token': token.key})


@api_view(['DELETE'])
def logout(request):
    request.auth.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
