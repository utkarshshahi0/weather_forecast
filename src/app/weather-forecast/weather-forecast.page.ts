import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.page.html',
  styleUrls: ['./weather-forecast.page.scss'],
})
export class WeatherForecastPage implements OnInit {  
  forecastData: any;
  constructor(private utility:UtilityService) {   
  }
  
  ngOnInit(): void {
    // this.utility.data.subscribe(
    //   (res:any[])=>{
    //   this.forecastData = res
    //   console.log(this.forecastData,"forcast data")
    // })
  }

  ionViewDidEnter() {
    this.getWeatherForecastData(); 
  }

  getWeatherForecastData() {

    this.utility.data.subscribe(
      (res:any[])=>{
      this.forecastData = res
      console.log(this.forecastData,"forcast data")
    })

    // this.forecastData = [
    //   {
    //     date: ,
    //     temperature: 22,
    //     description: 'Partly Cloudy',
    //     iconName: 'partly-sunny',
    //   },
    // ]
    //   {
    //     date: '2023-10-06',
    //     temperature: 20,
    //     description: 'Cloudy',
    //     iconName: 'cloudy',
    //   },
    //   {
    //     date: '2023-10-07',
    //     temperature: 25,
    //     description: 'Sunny',
    //     iconName: 'sunny',
    //   },

    // ];
  }
}
