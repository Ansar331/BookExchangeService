from django.urls import path
from .views import *
from django.urls import path


urlpatterns = [
    # Working views for posts
    path('posts/', ListCreatePosts.as_view()),
    path('posts/<int:pk>/', RetrieveUpdateDestroyPosts.as_view()),

    # Working views for books
    path('books/', ListCreateBooks.as_view()),
    path('books/<int:pk>/', RetrieveUpdateDestroyBooks.as_view()),

    # Working auth urls
    path('login/', login),
    path('logout/', logout),
    path('signup/', Signup.as_view()),

    # For debugging
    path('users/', ListUsers.as_view()),

    # Home urls
    path('home/', MyPosts.as_view()),
    path('profile/', ListProfiles.as_view()),
    path('profile/<int:pk>/', RetrieveUpdateProfiles.as_view()),

    # Sending email
    path('send_email/', send_answer),


]
