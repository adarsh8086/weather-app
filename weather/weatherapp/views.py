



from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
import requests

class WeatherAPIView(APIView):
    def get(self, request):
        # Get the city from the request query parameter, default to 'London' if not provided
        city = request.GET.get('city', 'London')
        
        # Your OpenWeatherMap API key
        api_key = 'enter api key here'
        
        # Construct the API URL using the city and API key
        url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'  # Adding 'units=metric' to get temperature in Celsius
        
        try:
            # Make the request to OpenWeatherMap API
            response = requests.get(url)
            
            # Check if the API call was successful
            if response.status_code == 200:
                weather_data = response.json()  # Parse JSON response
                return Response(weather_data)
            else:
                # Handle errors from OpenWeatherMap API (e.g., city not found)
                return Response({'error': 'City not found'}, status=404)
        except Exception as e:
            # Handle any other errors (e.g., network issues)
            return Response({'error': str(e)}, status=500)







def home(request):
    return HttpResponse("Welcome to the Weather API! Visit /api/weather/?city=London to get weather data.")
