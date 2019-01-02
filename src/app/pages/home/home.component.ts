import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public weather: any;
  public icon: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(data => {
      this.weather = data;
      this.icon = this.setIconUrl(this.weather.weather[0].icon);
      console.log(this.icon);
      console.log(this.weather);
    });
  }

  private setIconUrl(icon: string) {
    return `assets/images/weather/${icon.slice(0, 2)}.png`;
  }

}
