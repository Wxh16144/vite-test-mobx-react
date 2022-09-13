import { makeAutoObservable, runInAction } from "mobx";

class GlobalStore {
  constructor() {
    makeAutoObservable(this);
  }

  todos = [
    { id: 1, text: "Buy eggs1", completed: true },
    { id: 2, text: "Write a post", completed: false }
  ];

  toggleTodo = (index) => {
    console.log(this);
    // runInAction(() => {
    //   console.log("in", this);
    // });
    this.todos[index].completed = !this.todos[index].completed;
  };

  get remainingTodos() {
    return this.todos.filter((t) => !t.completed).length;
  }
}

export default new GlobalStore();
