import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../service/weather.service";
import { GeolocationService } from "../../service/geolocation.service";
import { Weather } from "../../models/weather.model";
import {NgIf, DatePipe, NgForOf, NgStyle} from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DividerModule } from "primeng/divider";
import {ChartData, ChartOptions} from "chart.js";
import {ChartModule} from "primeng/chart";
import {ButtonDirective} from "primeng/button";
import {TodayComponent} from "../today/today.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {Forecastday} from "../../models/forecastday.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    NgIf,
    DatePipe,
    FormsModule,
    NgForOf,
    DividerModule,
    NgStyle,
    ChartModule,
    ButtonDirective,
    TodayComponent
  ],
  providers: [DialogService, DatePipe]
})
export class HomeComponent implements OnInit {
  weather: Weather | any;
  city: string = "";
  public data: { datasets: { backgroundColor: string[]; data: number[]; hoverBackgroundColor: string[] }[]; labels: string[] } = {
    labels: [],
    datasets: []
  };
  public options: ChartOptions<'doughnut'> = {
    cutout: '60%',
    plugins: {
      legend: {
        labels: {
          color: '#000'
        }
      }
    }
  };
  todayVisible=false;

  ref: DynamicDialogRef | undefined;
  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService,
    public dialogService: DialogService,
    private datePipe: DatePipe,

  ) { }

  ngOnInit() {
    this.geolocationService.getCurrentLocation().then(
      position => {
        this.weatherService.forecastCoords(position.coords.latitude, position.coords.longitude).subscribe((data: any) => {
          this.weather = data;
          console.log(this.weather);
          this.updateUVChart(this.weather?.current?.uv);

        });
      }
    );
  }

  getTodayWeather() {
    this.weatherService.current(this.city).subscribe((data: any) => {
      this.weather = data;
      this.updateUVChart(this.weather?.current?.uv);

    });
  }

  getImage(code: number) {
    switch (code) {
      case 1000:
        return "https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg";
      case 1006:
        return "https://basmilius.github.io/weather-icons/production/fill/all/overcast.svg";
      case 1135:
        return "https://basmilius.github.io/weather-icons/production/fill/all/fog.svg";
      case 1003:
        return "https://basmilius.github.io/weather-icons/production/fill/all/overcast-day.svg";
      case 1153:
        return "https://basmilius.github.io/weather-icons/production/fill/all/drizzle.svg";
      case 1180:
        return "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg";
      default:
        return "https://basmilius.github.io/weather-icons/production/fill/all/not-available.svg";
    }
  }

  updateUVChart(uvIndex: number) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color').trim();

    this.data = {
      labels: [ ],
      datasets: [
        {
          data: [uvIndex],
          backgroundColor: [this.getUVColor(uvIndex)],
          hoverBackgroundColor: [this.getUVColor(uvIndex)]
        }
      ]
    };

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }

  getUVColor(uvIndex: number): string {
    if (uvIndex <= 2) return '#4CAF50';
    if (uvIndex <= 5) return '#FFEB3B';
    if (uvIndex <= 7) return '#FFC107';
    if (uvIndex <= 10) return '#FF5722';
    return '#D32F2F';
  }

  hourDialog(fore: Forecastday){
    const ref = this.dialogService.open(TodayComponent, {
      data: {
        hourList: fore.hour,
      },
      header: this.datePipe.transform(fore.date_epoch * 1000)?.toString(),
      width: '80%',
      height: '70%',

    })
  }
}
