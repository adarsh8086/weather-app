# from django.urls import path
# from.views import get_weather

# urlpatterns = [
#     path('weather/', get_weather, name='get_weather'),
# ]


from django.urls import path
from .views import WeatherAPIView,home

urlpatterns = [
   
    path('weather/', WeatherAPIView.as_view(), name='weather-api'),
    path('', home, name='home'),
]