import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public weather: any;
  public icon: string;
  public temp: string;

  constructor(private weatherService: WeatherService) {
    this.temp = '0';
  }

  ngOnInit() {
    this.weatherService.getWeather().subscribe(data => {
      this.weather = data;
      this.icon = this.setIconUrl(this.weather.weather[0].icon);
      this.temp = this.weather.main.temp;
    });
    this.loadGallery();
  }

  private setIconUrl(icon: string) {
    return `assets/images/weather/${icon.slice(0, 2)}.png`;
  }

  private loadGallery() {
    $(document).ready(function () {
      $('#gallery').unitegallery({
        gallery_theme: 'tiles',
        tiles_type: 'justified'
      });
    });
  }

}
