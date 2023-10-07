import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.page.html',
  styleUrls: ['./weather-forecast.page.scss'],
})
export class WeatherForecastPage implements OnInit {
  forecastData: any[] = [];
  cityName:any;
  weatherData:any
  constructor(private utility:UtilityService) {
    console.log("this is  wether")
  }


  ngOnInit(): void {
    this.utility.data.subscribe(res=>{
      this.cityName = res
    })
  }

  ionViewDidEnter() {
    this.getWeatherForecastData(this.cityName); 
  }


  getWeatherForecastData(cityName: string) {
  
    this.forecastData = [
      {
        date: '2023-10-05',
        temperature: 22,
        description: 'Partly Cloudy',
        iconName: 'partly-sunny',
      },
      {
        date: '2023-10-06',
        temperature: 20,
        description: 'Cloudy',
        iconName: 'cloudy',
      },
      {
        date: '2023-10-07',
        temperature: 25,
        description: 'Sunny',
        iconName: 'sunny',
      },

    ];
  }
}
