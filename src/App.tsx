import { useState } from 'react'
import { observer } from "mobx-react-lite";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import store from "./store";
// import GlobalStore from "./store";

import { useFoo } from "./hooks";

// const store = new GlobalStore();

function App() {

  // const hooksResult = useFoo(store.todos, 1);

  // console.log({ store }, "-");

  return (
    <div className="App">
      <h2>A Todo App yet again!</h2>
      <TodoList todos={store.todos} toggleTodo={store.toggleTodo} />
      <Footer remaining={store.remainingTodos} total={store.todos.length} />
    </div>
  );
}

export default observer(App)
