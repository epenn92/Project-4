from rest_framework import serializers
from .models import User, Subscription, Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

        # def __init__(self, *args, **kwargs):
        #     super().__init__(*args, **kwargs)
        #     self.fields['subscription'].queryset = Subscription.objects.none()


class UserSerializer(serializers.ModelSerializer):
    # subscriptions = SubscriptionSerializer(many=True, read_only=True)

    # def get_user_name(self, instance):

    class Meta:
        model = User
        fields = ('id', 'name', 'age', 'location', 'user_img', 'total_cost', 'likes', 'num_of_subs', 'user_subscriptions')


class SubscriptionSerializer(serializers.ModelSerializer):
    # user_id = serializers.IntegerField(write_only=True)
    user_subscriptions = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Subscription
        fields = '__all__'

    def get_user_name(self, user):
        user_subscription = user.user_subscription
        serializer = SubscriptionSerializer(user_subscription)
        return serializer.data


    # def to_representation(self, instance):
    #     user_sub = super(SubscriptionSerializer, self).to_representation(instance)
    #     user_sub['foreignkey'] = YourNestedSerializer(instance.foreignkey).data
    #     return data

    # def update(self, instance, validated_data):
    #     instance.user_subscriptions = validated_data['user_subscriptions']
    #     instance.save
    #     return instance
