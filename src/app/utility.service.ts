import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject,throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99'; // Modify the URL as needed
  private apiKey = 'c2f0a16732f911f0bb7123d1ecc76f57'; // Replace with your OpenWeatherMap API key
  private currentWeatherData: any;
  private forecastData: any;
  public data = new Subject<any>()

  //  private cityName
 
  // private weatherDataSubject = new Subject<any>();
  // appid={c2f0a16732f911f0bb7123d1ecc76f57}
  //   -->
  // this.http.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c2f0a16732f911f0bb7123d1ecc76f57").subscribe(data=>console.log(data,"dfgfgkhfhfjh"))


  constructor(private http: HttpClient) {}

// getWeatherForecast(){
//   // api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}
  
// }

// getCurrentWeatherData(): any {
//   return this.currentWeatherData;
// }


  getWeatherByCity(cityName: string): Observable<any> {
    const params = {
      q: cityName,
      appid: this.apiKey,
    };

    return this.http.get(this.apiUrl, { params }).pipe(
      catchError((error)=>{
        return throwError(error)
      })
    );
  }

setWeatherByCity(cityName: any){
  // console.log(cityName)
  this.data.next(cityName)
}


  // sendWeatherData(weatherData: any) {
  //   this.weatherDataSubject.next(weatherData);
  // }
  

}
