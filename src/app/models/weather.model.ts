import {Location} from "./location.model";
import {Current} from "./current.model";
import {Forecast} from "./forecast.model";

export class Weather {
  current: Current
  location: Location
  forecast: Forecast


  constructor(current: Current, location: Location, forecast: Forecast) {
    this.current = current;
    this.location = location;
    this.forecast = forecast;
  }
}
