import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
