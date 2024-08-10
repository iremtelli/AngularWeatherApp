import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../env/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(
    private http: HttpClient
  ) { }
  current(location: string) {
    return this.http.get(environment.baseUrl + "/current.json?key="+environment.key+"&q="+location+"&aqi=yes&lang=tr")
  }
  currentCoords(lat: number, long: number) {
    return this.http.get(environment.baseUrl + "/current.json?key="+environment.key+"&q="+lat+","+long+"&aqi=yes&lang=tr")
  }

  forecastCoords(lat: number, long: number) {
    return this.http.get(environment.baseUrl + "/forecast.json?key="+environment.key+"&q="+lat+","+long+"&days=7"+"&aqi=yes&lang=tr")
  }


}
