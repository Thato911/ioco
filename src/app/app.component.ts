import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  persons = [{name: 'Thato'}, {name: 'Max'}];
  
  selectedPerson;

  constructor(private api:ApiService){
    this.getEmployees();
    this.selectedPerson = { id: -1, first_name: "", last_name: "", birth_date: "", employee: [] };
  }
  getEmployees = () => {
    this.api.getAllEmployees().subscribe(
      data => {
        this.persons = data
      },
      error => {
        console.log(error);
      }
    );
  }
  personClicked = (person) => {
    this.api.getOneEmployees(person.id).subscribe(
      data => {
        console.log(data)
        this.selectedPerson = data;
      },
      error => {
        console.log(error);
      }
    ); 
  }
  updatePerson = () => {
    this.api.updatePerson(this.selectedPerson).subscribe(
      data => {
        this.getEmployees();
      },
      error => {
        console.log(error);
      }
    ); 
  }
  createPerson = () => {
    this.api.createPerson(this.selectedPerson).subscribe(
      data => {
        this.persons.push = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  deletePerson = () => {
    this.api.deletePerson(this.selectedPerson.id).subscribe(
      data => {
        this.getEmployees();
      },
      error => {
        console.log(error);
      }
    );  
  }
}
