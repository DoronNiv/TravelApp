import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travle App';
  newTrip = {
    title: ""
  }
  
  trips = [
    {
      title: "Trip to Rome",
      startDate: Date.now()
    }, 
    {
      title: "Trip to Madrid",
      startDate: Date.now()
    }
  ];

  addTrip(trip) {
  	console.log("Trip", trip);
  	this.trips.push(trip);
  	this.newTrip = {title:""};
  }

}


