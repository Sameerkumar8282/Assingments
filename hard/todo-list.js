/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todo = [];
  }
  add(str) {
    return this.todo.push(str);
  }

  remove(index) {
    // if (index > -1) {
    //   // only splice array when item is found
    //   this.data.splice(index, 1); // 2nd parameter means remove one item only
    // }
    // return this.data;
    let newArray = [];
    for (let k = 0; k < this.todo.length; k++) {
      if (k !== index) newArray.push(this.todo[k]);
    }
    this.todo = newArray;

  }

  update(index, item) {
    if (index < this.todo.length) 
    this.todo[index] = item;
  }

  get(indexOfTodo) {
    if(indexOfTodo<this.todo.length)return this.todo[indexOfTodo];
    return null;
  }

  getAll() {
    return this.todo;
  }
  clear() {
   let n = this.todo.length
   for (let index = 0; index < n; index++) {
    this.todo.pop()
   }
  }
}

module.exports = Todo;
