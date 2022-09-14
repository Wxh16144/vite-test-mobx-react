import { useState } from 'react'
import { observer } from "mobx-react-lite";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import store from "./store";
// import GlobalStore from "./store";

import { useBar, useFoo } from "./hooks";
import { autorun, toJS } from 'mobx';
import TimerView from './components/TimerView';
import React from 'react';

// const store = new GlobalStore();

const Foo = observer(() => {

  const { todos, toggleTodo, remainingTodos, timer, reset, resetTodos } = store
  // const { data } = useBar(timer)

  // const hooksResult = useFoo(timer,1);

  // console.log({ store, hooksResult,t:toJS(todos) }, "-");
  React.useEffect(() => {
    console.log('useFoo=>React.useEffect', );

    autorun(() => {
      console.log('autorun-------', );
      todos.forEach((todo) => {
        console.log('autorun', todo);
      })
    })
  }, [todos])

  return (
    <div className="App">
      {/* <h1>name:{data}</h1> */}
      <h2>timer:{timer}</h2>
      <h3>A Todo App yet again!</h3>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <Footer remaining={remainingTodos} total={todos.length} />
      <button onClick={reset}>reset</button>
      <button onClick={resetTodos}>resetTodos</button>

    </div>
  );
})

function App() {
  // const hooksResult = useFoo(1,1);

  // console.log('App render', hooksResult);

  return (
    <>
      <Foo />
      {/* <TimerView /> */}
    </>
  );
}


export default (App)
