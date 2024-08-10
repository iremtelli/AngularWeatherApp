import {Condition} from "./condition.model";
import {AirQuality} from "./airquality.model";

export class Day{
  maxtemp_c: number
  maxtemp_f: number
  mintemp_c: number
  mintemp_f: number
  avgtemp_c: number
  avgtemp_f: number
  maxwind_mph: number
  maxwind_kph: number
  totalprecip_mm: number
  totalprecip_in: number
  totalsnow_cm: number
  avgvis_km: number
  avgvis_miles: number
  avghumidity: number
  daily_will_it_rain: number
  daily_chance_of_rain: number
  daily_will_it_snow: number
  daily_chance_of_snow: number
  condition: Condition
  uv: number
  air_quality: AirQuality


  constructor(maxtemp_c: number, maxtemp_f: number, mintemp_c: number, mintemp_f: number, avgtemp_c: number, avgtemp_f: number, maxwind_mph: number, maxwind_kph: number, totalprecip_mm: number, totalprecip_in: number, totalsnow_cm: number, avgvis_km: number, avgvis_miles: number, avghumidity: number, daily_will_it_rain: number, daily_chance_of_rain: number, daily_will_it_snow: number, daily_chance_of_snow: number, condition: Condition, uv: number, air_quality: AirQuality) {
    this.maxtemp_c = maxtemp_c;
    this.maxtemp_f = maxtemp_f;
    this.mintemp_c = mintemp_c;
    this.mintemp_f = mintemp_f;
    this.avgtemp_c = avgtemp_c;
    this.avgtemp_f = avgtemp_f;
    this.maxwind_mph = maxwind_mph;
    this.maxwind_kph = maxwind_kph;
    this.totalprecip_mm = totalprecip_mm;
    this.totalprecip_in = totalprecip_in;
    this.totalsnow_cm = totalsnow_cm;
    this.avgvis_km = avgvis_km;
    this.avgvis_miles = avgvis_miles;
    this.avghumidity = avghumidity;
    this.daily_will_it_rain = daily_will_it_rain;
    this.daily_chance_of_rain = daily_chance_of_rain;
    this.daily_will_it_snow = daily_will_it_snow;
    this.daily_chance_of_snow = daily_chance_of_snow;
    this.condition = condition;
    this.uv = uv;
    this.air_quality = air_quality;
  }
}
