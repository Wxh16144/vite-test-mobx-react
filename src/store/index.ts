import { makeAutoObservable, runInAction } from "mobx";

class GlobalStore {
  constructor() {
    makeAutoObservable(this);

    setInterval(() => {
      runInAction(() => {
        this.timer += 1;
      })
    }, 3000);
  }

  todos = [
    { id: 1, text: "Buy eggs", completed: true },
    { id: 2, text: "Write a post", completed: false }
  ];
  timer = 0


  toggleTodo = (index) => {
    // console.log(this);
    // runInAction(() => {
    //   console.log("in", this);
    // });
    this.todos[index].completed = !this.todos[index].completed;
  };

  get remainingTodos() {
    return this.todos.filter((t) => !t.completed).length;
  }
  reset = () => {
    this.timer = 0;
  };
  resetTodos = () => {
    // this.todos = [
    //   { id: 1, text: "Buy eggs-reset", completed: false },
    // ]
    this.todos.push(
      { id: Date.now(), text: 'xx', completed: false }
    )
  }
}

export default new GlobalStore();
