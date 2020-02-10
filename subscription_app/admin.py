from django.contrib import admin
from .models import User, Subscription, Review
admin.site.register([User, Subscription, Review])

# Register your models here.

# class UserSubscriptionInline(admin.TabularInline):
#     model = UserSubscription
#     extra = 1