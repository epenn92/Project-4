from django.urls import include, path
from rest_framework import routers


from . import views


router = routers.DefaultRouter()
router.register('user', views.UserView)
router.register('subscription', views.SubscriptionView)
router.register('review', views.ReviewView)

urlpatterns = [
    path('', include(router.urls))
]