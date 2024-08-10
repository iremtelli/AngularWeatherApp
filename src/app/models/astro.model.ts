export class Astro{
  sunrise: string | any
  sunset: string
  moonrise: string
  moonset: string
  moon_phase: string
  moon_illumination: number
  is_moon_up: number
  is_sun_up: number


  constructor(sunrise: any, sunset: string, moonrise: string, moonset: string, moon_phase: string, moon_illumination: number, is_moon_up: number, is_sun_up: number) {
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.moonrise = moonrise;
    this.moonset = moonset;
    this.moon_phase = moon_phase;
    this.moon_illumination = moon_illumination;
    this.is_moon_up = is_moon_up;
    this.is_sun_up = is_sun_up;
  }
}
