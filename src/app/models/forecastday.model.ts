import {Hour} from "./hour.model";
import {Astro} from "./astro.model";
import {Day} from "./day.model";

export class Forecastday{
  date: string
  date_epoch: number
  day: Day
  astro: Astro
  hour: Hour[]


  constructor(date: string, date_epoch: number, day: Day, astro: Astro, hour: Hour[]) {
    this.date = date;
    this.date_epoch = date_epoch;
    this.day = day;
    this.astro = astro;
    this.hour = hour;
  }
}
