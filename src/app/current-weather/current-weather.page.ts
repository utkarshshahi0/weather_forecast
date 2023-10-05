import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

// HttpClient
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.page.html',
  styleUrls: ['./current-weather.page.scss'],
})
export class CurrentWeatherPage implements OnInit {
  errorMessage: string = '';
  cityName: string = '';
  weatherData: any ;
  foreCastData:any
  constructor( private utility:UtilityService,private http:HttpClient) {}

  ngOnInit() {
    // this.http.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c2f0a16732f911f0bb7123d1ecc76f57").subscribe(data=>console.log(data,"dfgfgkhfhfjh"))
    // this.utility.getWeatherByCity(this.cityName).subscribe((data)=>
    // console.log(data,"api"))
    // api.openweathermap.org/data/2.5/weather?q=peshawar&appid=API_key    
  }

  onCityNameChange() {
    // You can add logic here to handle the user's input, e.g., make an API request to get the weather for the entered city.
    console.log('City name changed to:', this.cityName);
  }



  searchWeather() {

    // this.utility.getWeatherByCity(this.cityName).subscribe(
    //   (data) => {
    //     // Handle the response data
    //     this.weatherData = {
    //       temperature: data.main.temp,
    //       description: data.weather[0].description,
    //       iconName: data.weather[0].icon,
    //     };
    //     this.errorMessage = ''; // Clear any previous error message
    //   },
    //   (error) => {
    //     console.error('Error:', error);

    //     // Display an error message to the user
    //     if (error.status === 404) {
    //       this.errorMessage = 'City not found. Please check the city name.';
    //     } else {
    //       this.errorMessage = 'Network issue. Please try again later.';
    //     }

    //     // Clear weather data
    //     this.weatherData = null;
    //   }
    // );

    this.utility.getWeatherByCity(this.cityName).subscribe(
      (data) => {
     console.log(data,"api")
    // this.foreCastData = data

        this.utility.setWeatherByCity(data)
        // Handle the response data and update the UI
        this.weatherData = {
          temperature: data.main.temp,
          description: data.weather[0].description,
          iconName: data.weather[0].icon,
        };
        this.errorMessage = '';
      },
      (error) => {
            console.error('Error:', error);
        // Display an error message to the user
        if (error.status === 404) {
          this.errorMessage = 'City not found. Please check the city name.';
        } else {
          this.errorMessage = 'Network issue. Please try again later.';
        }
        // Clear weather data
        // this.weatherData = null;
      }
    );

     //     console.error('Error:', error);

    //     // Display an error message to the user
    //     if (error.status === 404) {
    //       this.errorMessage = 'City not found. Please check the city name.';
    //     } else {
    //       this.errorMessage = 'Network issue. Please try again later.';
    //     }

    //     // Clear weather data
    //     this.weatherData = null;
    //   }
    // );
    // Implement weather search logic here.
    // You can make an API request to fetch weather data for the entered city.
    console.log('Searching for weather in:', this.cityName);

    // this.weatherData = {
    //   temperature: 25, // Replace with actual temperature data
    //   description: 'Sunny', // Replace with actual weather description
    //   iconName: 'sunny', // Replace with actual icon name
    // };
    // Call your weather API here.

    
  }
 

}
