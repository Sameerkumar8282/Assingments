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
    // It store the length of array.
    this.length = 0;

    // Object to store elements.
    this.data = [];
  }
  add(str) {
    this.data[this.length] = str;
    this.length++;
    return this.data;
  }

  remove(index) {
    if (index > -1) { // only splice array when item is found
      this.data.splice(index, 1); // 2nd parameter means remove one item only
    }
    return this.data;
  }

  update(index, item) {
    this.data.splice(index, 0, item);
  }

  get(indexOfTodo) {
    return this.data[indexOfTodo];
  }

      getAll() {
    return this.data;
  }
  clear() {
    return (this.result = []);
  }
}

module.exports = Todo;
