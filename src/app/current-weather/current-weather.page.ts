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
  foreCastData:any;
  data:string="This is data comming from current data"
   

  // data
  constructor( private utility:UtilityService,private http:HttpClient) {}

  ngOnInit() {

    // console.log("current weather")
    // this.http.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c2f0a16732f911f0bb7123d1ecc76f57").subscribe(data=>console.log(data,"dfgfgkhfhfjh"))
  }

setData(){
  let data = "this is currenyt data"
  this.utility.setData(data)
  console.log(data)
}

  onCityNameChange() {
    console.log('City name changed to:', this.cityName);
  }

  searchWeather() {
    this.utility.getWeatherByCity(this.cityName).subscribe(
      (data) => {
        this.utility.setWeatherByCity(data)
        this.weatherData = {
          temperature: data.main.temp,
          description: data.weather[0].description,
          iconName: data.weather[0].icon,
          // date:data.dt
        };
        // console.log(this.iconName)
        this.errorMessage = '';
      },
      (error) => {
            console.error('Error:', error);
        if (error.status === 404) {
          this.errorMessage = 'City not found. Please check the city name.';
        } else {
          this.errorMessage = 'Network issue. Please try again later.';
        }
        // this.weatherData = null;
      }
    );  
    console.log('Searching for weather in:', this.cityName); 
  }
}
