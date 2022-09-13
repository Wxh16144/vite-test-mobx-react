import * as React from "react";

export function useFoo(todo, index) {
  return React.useMemo(() => {
    return todo[index]?.completed ? "ok" : " no";
  }, [todo, index]);
}
