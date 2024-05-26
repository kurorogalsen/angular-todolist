import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  constructor() {}

  addTask(task: Task, todoList: Task[]) {
    task.id = todoList.length + 1000;
    todoList.push(task);
    return this.sortTask(todoList);
  }

  deleteTask(id: number, todoList: Task[]) {
    for (let i = 0; i < todoList.length; i++)
      todoList[i].id === id ? todoList.splice(i, 1) : '';
    return todoList;
  }

  sortTask(todoList: Task[]) {
    const newTodoList: Task[] = todoList.sort((task1: Task, task2: Task) => {
      const task1AsNumber: number = new Date(task1.deadline).getTime();
      const task2AsNumber: number = new Date(task2.deadline).getTime();
      return task1AsNumber - task2AsNumber;
    });
    return newTodoList;
  }

  isLate(deadline: Date) {
    const todayDate: Date = new Date();
    if (new Date(deadline).getTime() - new Date(todayDate).getTime() < 0) {
      return true;
    } else {
      return false;
    }
  }
}
