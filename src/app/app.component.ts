import { Component } from '@angular/core';
import { ToDo } from './todo'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo'; 

  constructor() { }

  ngOnInit(): void {
  }
  tasks:ToDo[] = [
    {
      task:"Cook pets gourmet breakfast",
      completed: false
    },
    {
      task:"Wash dishes",
      completed:false
    },
    {
      task:"Grocery shop",
      completed:false
    },
    {
      task:"Do laundry",
      completed:false
    },
    {
      task:"Buy squishmallow",
      completed:false
    },
    {
      task:"Catch a firefly",
      completed:false
    },
    {
      task:"Buy dog new outfit",
      completed:false
    }
  ]

  

  completeTask(choice:ToDo):void {
    let index = this.tasks.findIndex(t => t.task == choice.task );
    this.tasks[index].completed = true;
  }

  //just create a new item, and push it to your existing []
  addTodo(form:NgForm):void{
    let newToDo:ToDo = {
      task: form.form.value.Task,
      completed: false
    };

    this.tasks.push(newToDo);
  }

  //just loop through the tasks and check if ANY are incomplete; if so, 
  // flip the boolean 
  //no param needed, returns a bool so we can use ngIf 
 TasksComplete():boolean{
    let result:boolean = true; 
    this.tasks.forEach((t:ToDo) =>{
      if(t.completed == false){
        result = false;
      }
    });
    return result;
  }

  Remove(choice:ToDo):void{ 
    //find it 
    let index = this.tasks.findIndex(t => t.task == choice.task);
    //remove it 
    this.tasks.splice(index,1);
  }

  
  



}
