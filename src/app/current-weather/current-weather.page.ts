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

  }

  onCityNameChange() {
    console.log('City name changed to:', this.cityName);
  }



  searchWeather() {

    this.utility.getWeatherByCity(this.cityName).subscribe(
      (data) => {
     console.log(data,"api")

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
        this.weatherData = null;
      }
    );

  
    console.log('Searching for weather in:', this.cityName); 
  }
}
