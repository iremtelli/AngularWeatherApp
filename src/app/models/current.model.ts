import {AirQuality} from "./airquality.model";
import {Condition} from "./condition.model";

export class Current {
  last_updated_epoch: number | undefined;
  last_updated: string | undefined;
  temp_c: number | undefined;
  temp_f: number | undefined;
  is_day: number | undefined;
  condition: Condition | undefined;
  wind_mph: number | undefined;
  wind_kph: number | undefined;
  wind_degree: number | undefined;
  wind_dir: string | undefined;
  pressure_mb: number | undefined;
  pressure_in: number | undefined;
  precip_mm: number | undefined;
  precip_in: number | undefined;
  humidity: number | undefined;
  cloud: number | undefined;
  feelslike_c: number | undefined;
  feelslike_f: number | undefined;
  windchill_c: number | undefined;
  windchill_f: number | undefined;
  heatindex_c: number | undefined;
  heatindex_f: number | undefined;
  dewpoint_c: number | undefined;
  dewpoint_f: number | undefined;
  vis_km: number | undefined;
  vis_miles: number | undefined;
  uv: number | undefined;
  gust_mph: number | undefined;
  gust_kph: number | undefined;
  air_quality: AirQuality | undefined;
  location: Location | undefined;
}
