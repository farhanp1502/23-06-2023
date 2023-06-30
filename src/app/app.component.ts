import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '23-06-2023';
  movie ={
    name: "movietitle",
    img :"/assets/images/movie.jpeg"
  }
}
