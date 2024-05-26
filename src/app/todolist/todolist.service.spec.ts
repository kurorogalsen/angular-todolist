import { TestBed } from '@angular/core/testing';

import { TodolistService } from './todolist.service';
import { Task } from './task';

describe('TodolistService', () => {
  let service: TodolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a new task and sort it', () => {
    let taskList: Task[] = [
      {
        id: 1,
        title: 'Task1',
        deadline: new Date('2024-07-21'),
      },
    ];
    const newTask: Task = {
      id: 2,
      title: 'Task2',
      deadline: new Date('2024-07-07'),
    };

    taskList = service.addTask(newTask, taskList);
    expect(taskList.length).toBe(2);
    expect(taskList[0].title).toBe('Task2');
  });
});