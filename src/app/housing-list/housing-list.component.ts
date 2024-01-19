import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];
  result : HousingLocation[] = [];

  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: String ) {
    if (!searchText) return;
    this.result = this.locationList.filter(
      (location: HousingLocation) => location.city
        .toLowerCase()
        .includes(searchText.toLocaleLowerCase()) );
  }

  selectHousingLocation(location: HousingLocation) { 
    this.locationSelectedEvent.emit(location);
  }

}
