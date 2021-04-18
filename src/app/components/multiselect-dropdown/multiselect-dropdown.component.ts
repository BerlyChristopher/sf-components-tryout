import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.css']
})
export class MultiselectDropdownComponent implements OnInit {

  // defined the array of data
  public data: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
  // set placeholder to MultiSelect input element
  public placeholder: string = 'Select games';

  constructor() { }

  ngOnInit(): void {
  }

}
