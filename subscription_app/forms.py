# from django import forms
# from .models import Review, Subscription, User
#
#
# class ReviewForm(forms.ModelForm):
#     class Meta:
#         model = Review
#         fields = '__all__'
#
#         def __init__(self, *args, **kwargs):
#             super().__init__(*args, **kwargs)
#             self.fields['subscription'].queryset = Subscription.objects.none()