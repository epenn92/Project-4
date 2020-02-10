from django.db import models


class User(models.Model):
    name = models.CharField(max_length=30)
    age = models.PositiveIntegerField(default=0)
    location = models.CharField(max_length=80, blank=True)
    satisfaction = models.IntegerField(default=10, blank=True)
    user_img = models.CharField(max_length=300, blank=True)
    total_cost = models.FloatField(default=0, blank=True)
    likes = models.CharField(max_length=350, blank=True)
    num_of_subs = models.IntegerField(default=0, blank=True)
    # subscription = models.ManyToManyField(Subscription, related_name='subscription_users')

    def __str__(self):
        return f'{self.name} {self.age}years old  {self.likes}'


class Subscription(models.Model):
    TYPE_OF_SERVICE = (
        ('Unsure', 'Not sure'),
        ('Movies', 'Tailored towards movies'),
        ('Video Games', 'Tailored towards Video Games'),
        ('TV/shows', 'Tailored towards Television Shows'),
        ('Cloud-based services', 'Tailored towards Cloud based data services'),
        ('Software Services', 'Tailored towards software apps like office'),
        ('Labor Services', 'Tailored towards physical in person labor services'),
    )
    BILLING_PERIOD = (
        ('Daily', 'Billed everyday'),
        ('Weekly', 'Billed weekly'),
        ('Bi-Weekly', 'Billed every two weeks'),
        ('Monthly', 'Billed every month'),
        ('Bi-Monthly', 'Billed every two months'),
        ('Yearly', 'Billed once a year'),
    )
    sub_name = models.CharField(max_length=100)
    price = models.DecimalField(default=0.00, max_digits=7, decimal_places=2)
    billing_period = models.CharField(max_length=30, choices=BILLING_PERIOD, default='Monthly')
    billing_date = models.CharField(max_length=100, default='N/A')
    type_of_service = models.CharField(max_length=100, choices=TYPE_OF_SERVICE, default='Unsure')
    active = models.BooleanField(default=False)
    average_rating = models.PositiveIntegerField(default=5)
    user = models.ManyToManyField(User, related_name='user_subscriptions')

    def __str__(self):
        return f'{self.sub_name} {self.price} {self.average_rating} {self.type_of_service}'

#
# class UserSubscription(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     subscription = models.ForeignKey(Subscription, on_delete=models.CASCADE)
#     user_name = models.CharField(max_length=100)





class Review(models.Model):
    RATINGS = (
        ('1', 'Awful'),
        ('2', 'Bad'),
        ('3', 'Ok'),
        ('4', 'Good'),
        ('5', 'Excellent'),
    )
    rating = models.CharField(max_length=250, choices=RATINGS, blank=True, default='5')
    comment = models.CharField(max_length=150, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_reviews')
    subscription = models.ForeignKey(Subscription, on_delete=models.CASCADE, related_name='subscription_reviews')

    def __str__(self):
        return f'{self.comment} {self.rating} {self.user} {self.subscription}'

# Create your models here.
