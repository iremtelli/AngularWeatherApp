import {AirQuality} from "./airquality.model";
import {Condition} from "./condition.model";

export class Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  air_quality: AirQuality;


  constructor(last_updated_epoch: number, last_updated: string, temp_c: number, temp_f: number, is_day: number, condition: Condition, wind_mph: number, wind_kph: number, wind_degree: number, wind_dir: string, pressure_mb: number, pressure_in: number, precip_mm: number, precip_in: number, humidity: number, cloud: number, feelslike_c: number, feelslike_f: number, windchill_c: number, windchill_f: number, heatindex_c: number, heatindex_f: number, dewpoint_c: number, dewpoint_f: number, vis_km: number, vis_miles: number, uv: number, gust_mph: number, gust_kph: number, air_quality: AirQuality) {
    this.last_updated_epoch = last_updated_epoch;
    this.last_updated = last_updated;
    this.temp_c = temp_c;
    this.temp_f = temp_f;
    this.is_day = is_day;
    this.condition = condition;
    this.wind_mph = wind_mph;
    this.wind_kph = wind_kph;
    this.wind_degree = wind_degree;
    this.wind_dir = wind_dir;
    this.pressure_mb = pressure_mb;
    this.pressure_in = pressure_in;
    this.precip_mm = precip_mm;
    this.precip_in = precip_in;
    this.humidity = humidity;
    this.cloud = cloud;
    this.feelslike_c = feelslike_c;
    this.feelslike_f = feelslike_f;
    this.windchill_c = windchill_c;
    this.windchill_f = windchill_f;
    this.heatindex_c = heatindex_c;
    this.heatindex_f = heatindex_f;
    this.dewpoint_c = dewpoint_c;
    this.dewpoint_f = dewpoint_f;
    this.vis_km = vis_km;
    this.vis_miles = vis_miles;
    this.uv = uv;
    this.gust_mph = gust_mph;
    this.gust_kph = gust_kph;
    this.air_quality = air_quality;
  }
}
