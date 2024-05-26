import { Component } from '@angular/core';
import { Task } from './task';
import { CommonModule } from '@angular/common';
import { TodolistService } from './todolist.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  todoList: Task[] = [
    {
      id: 1,
      title: 'Cuisiner les repas de la semaine',
      deadline: new Date('2024-05-22'),
    },
    {
      id: 2,
      title: 'Réviser le court de droit',
      deadline: new Date('2024-05-27'),
    },
    {
      id: 3,
      title: 'Prendre rdv chez le dentiste',
      deadline: new Date('2024-05-26'),
    },
  ];
  newTask!: FormGroup;
  constructor(
    private todoListService: TodolistService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.sortTask(this.todoList);
    this.newTask = this.fb.group({ id: 0, title: '', deadline: '' });
  }

  addNewTask() {
    this.todoList = this.todoListService.addTask(
      this.newTask.value,
      this.todoList
    );
  }

  deleteTask(id: number) {
    this.todoList = this.todoListService.deleteTask(id, this.todoList);
  }

  isLate(deadline: Date) {
    return this.todoListService.isLate(deadline);
  }
}
