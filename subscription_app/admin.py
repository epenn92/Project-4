from django.contrib import admin
from .models import User, Subscription, Review
admin.site.register([User, Subscription, Review])

# Register your models here.
