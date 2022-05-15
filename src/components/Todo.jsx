import React, { useState } from "react";
import { useBrowser } from "../contexts";

export const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const {
    browserState: { todo },
    browserDispatch,
  } = useBrowser();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleTodo = (e) => {
    if (e.key === "Enter") {
      const id = Math.random();
      setTodos((updateTodos) => [
        ...updateTodos,
        { id, text, completed: false },
      ]);
      setText("");
    }
  };
  console.log(todos.length);
  return (
    <>
      <div className="bg-gray-800 w-80 h-auto absolute bottom-32 right-10 m-2 p-4 rounded-lg">
        {todos.length === 0 ? (
          <>
            <p className="p-2 text-xl font-medium">Add a todo to get started</p>
            <button
              className="bg-indigo-500 hover:bg-indigo-800 p-2 rounded-md cursor-pointer"
              id="handle-todo"
            >
              New Todo
            </button>
          </>
        ) : (
          <p className="text-xl text-left font-medium">Today's Todo</p>
        )}

        <div className="text-left m-1 text-xl font-medium">
          <p>
            {todos.map((item) => (
              <div className="flex items-center justify-start gap-1">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-xl">{item.text}</span>
              </div>
            ))}
          </p>
          
        </div>
        <div className="text-left m-1">
          <form onSubmit={handleSubmit} id="handle-todo">
            <input
              type="text"
              className="border-0 outline-none rounded-md text-white cursor-pointer bg-transparent"
              placeholder="New Todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyPress={handleTodo}
            />
          </form>
        </div>
      </div>
      <div className="text-xl font-medium absolute bottom-8 right-14 cursor-pointer">
        Todo
      </div>
    </>
  );
};
