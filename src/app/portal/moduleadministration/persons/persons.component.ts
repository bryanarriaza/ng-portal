import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {PersonsService} from './persons.service';
import {Person} from './person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'lastname', 'salary', 'age'];
  dataSource = new MatTableDataSource<Person>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private personService: PersonsService,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getData();
  }

  getData() {
    this.personService.query().subscribe((data: any) => {
      this.dataSource = data.content;
    });
  }

  formElement(person: Person) {
    console.log(person);
  }

}
