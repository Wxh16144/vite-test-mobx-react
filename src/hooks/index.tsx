import { autorun } from "mobx";
import * as React from "react";
import { useRequest, useUpdateEffect,useDeepCompareEffect } from 'ahooks';

import store from '../store'

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random().toString(36).substring(7));
    }, 1000);
  });
}



export function useFoo(timer, index) {
  const { todos } = store
  const [state, setState] = React.useState([]);

  // React.useEffect(() => {
  //   autorun(() => {
  //     setState(todos);
  //   });
  // }, [todos]);

  React.useEffect(() => {
    console.log('useFoo=>React.useEffect', timer);
  }, [timer])

  // useUpdateEffect(() => {
  //   console.log('useFoo=>useUpdateEffect', timer);
  // }, [timer])

  // useDeepCompareEffect(() => {
  //   console.log('useFoo=>useDeepCompareEffect', timer);
  // }, [timer])

  // return React.useMemo(() => {
  return state[index]?.completed ? "ok" : " no";
  // }, [todos, index]);
  // React.useEffect(() => {
  //   console.log("useEffect", todo);
  // }, [todo])
}


export function useBar(value) {
  // const [state, setState] = React.useState([]);
  React.useEffect(() => {
    console.log('effect', value);
  }, [value])

  const { data, error, loading } = useRequest(getUsername, { refreshDeps: [value] });
  return { data, error, loading }
}
