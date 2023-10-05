import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.page.html',
  styleUrls: ['./weather-forecast.page.scss'],
})
export class WeatherForecastPage implements OnInit {
  forecastData: any[] = []; // Store weather forecast data here
  cityName:any;
  weatherData:any
  constructor(private utility:UtilityService) {
    console.log("this is  wether")
  }


  ngOnInit(): void {
    this.utility.data.subscribe(res=>{
      // console.log(res)
      this.cityName = res
    })

    // this.utility.setWeatherByCity()

    // this.utility.data.subscribe(res=>{
    //   console.log(res,"data")
    //   this.weatherData = res
      // this.for
    // })
  }

  ionViewDidEnter() {
    // Fetch weather forecast data when the view is entered
    this.getWeatherForecastData(this.cityName); // Replace with the actual city name
  }
  // cityName(cityName: any) {
  //   throw new Error('Method not implemented.');
  // }

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
      // Add more forecast items for the next days
    ];
  }

}