import {Forecastday} from "./forecastday.model";


export class Forecast{
  forecastday: Forecastday[]


  constructor(forecastday: Forecastday[]) {
    this.forecastday = forecastday;
  }
}
