import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apikey = '5f5f5ef4e6b59c195b604f5a300b5631';
  private city = 'Bajamar';
  private countryCode = 'cr';

  constructor(private http: HttpClient) { }

  getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
    return this.http.get(URI);
  }

}
