from rest_framework import serializers
from .models import User, Subscription, Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    # subscriptions = SubscriptionSerializer(many=True, read_only=True)

    # def get_user_name(self, instance):

    class Meta:
        model = User
        fields = ('id', 'name', 'age', 'location', 'user_img', 'total_cost', 'likes', 'num_of_subs', 'user_subscriptions')


class SubscriptionSerializer(serializers.ModelSerializer):
     user_subscriptions = UserSerializer(many=True, read_only=True)

     class Meta:
        model = Subscription
        fields = '__all__'
