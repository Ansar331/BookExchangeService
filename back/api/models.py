from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


class PostManager(models.Manager):
    def filter_by_user(self, user):
        return self.filter(user=user)


class Book(models.Model):
    name = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    year = models.IntegerField()
    category = models.CharField(max_length=50)
    genre = models.CharField(max_length=50)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, default=None, null=True)


class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.CharField(max_length=700)
    created_at = models.DateTimeField(auto_now_add=True)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, default=None, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None, null=True)
    image = models.ImageField(upload_to='post_images', default = 'post_images/default.jpg')


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
