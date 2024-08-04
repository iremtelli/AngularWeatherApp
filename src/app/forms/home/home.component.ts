import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../service/weather.service";
import {HttpClient} from "@angular/common/http";
import {Current} from "../../models/current.model";
import {DatePipe, NgIf} from "@angular/common";
import {Weather} from "../../models/weather.model";
import {FormsModule} from "@angular/forms";
import {GeolocationService} from "../../service/geolocation.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    DatePipe,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  weather: Weather | any;
city:string = "";
  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService
  ) {
  }

  ngOnInit() {
    this.geolocationService.getCurrentLocation().then(
      position => {
        this.weatherService.currentCoords(position.coords.latitude, position.coords.longitude).subscribe((data) => {
          this.weather = data;
        })
      }
    )


  }

  getTodayWeather(){
    this.weatherService.current(this.city).subscribe((data: any) => {
      this.weather = data;
    });
  }
  getImage(code: number) {
    switch (code) {
      case 1000: {
        return "https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg"
      }
      case 1006: {
        return "https://basmilius.github.io/weather-icons/production/fill/all/overcast.svg"
      } case 1135: {
        return "https://basmilius.github.io/weather-icons/production/fill/all/fog.svg"
      }case 1003: {
        return "https://basmilius.github.io/weather-icons/production/fill/all/overcast-day.svg"
      }case 1153: {
        return "https://basmilius.github.io/weather-icons/production/fill/all/drizzle.svg"
      }case 1180: {
        return "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg"
      }
      default:
        return "https://basmilius.github.io/weather-icons/production/fill/all/not-available.svg"
    }
  }
}
