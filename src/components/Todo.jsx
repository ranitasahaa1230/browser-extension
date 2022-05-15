import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditID] = useState(0);
  const [openTodo, setOpenTodo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updateTodo = todos.map((item) =>
        item.id === editTodo.id
          ? (item = { id: item.id, text })
          : { id: item.id, text: item.text, completed: false }
      );
      setTodos(updateTodo);
      setEditID(0);
      setText("");
      return;
    }
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

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todoo", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todoo")) || []);
  }, []);

  const editHandler = (id) => {
    const editTodo = todos.find((elem) => elem.id === id);
    setText(editTodo.text);
    setEditID(id);
  };
  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.removeItem("todoo");
  };
  const handleTodos = (id) => {
    const todoToBeCompleted = todos.find((elem) => elem.id === id);
    todoToBeCompleted.completed = !todoToBeCompleted.completed;
    const completedTodos = [
      ...todos.filter((todo) => todo.id !== id),
      todoToBeCompleted,
    ];
    setTodos(completedTodos);
  };

  return (
    <>
      {openTodo && (
        <div className="bg-neutral-800 w-80 h-auto absolute bottom-32 right-10 m-2 mx-4 p-4 rounded-lg">
          {todos.length === 0 ? (
            <>
              <p className="p-2 text-xl font-medium">
                Add a todo to get started
              </p>
              <button
                className="bg-indigo-500 hover:bg-indigo-800 p-2 rounded-md cursor-pointer"
                id="handle-todo"
              >
                New Todo
              </button>
            </>
          ) : (
            <div className="flex items-center justify-between m-2">
              <p className="text-xl text-left font-medium">Today's Todo</p>
              <span
                className="cursor-pointer text-emerald-500"
                onClick={() => setOpenTodo(!openTodo)}
              >
                <ImCross size={14} />
              </span>
            </div>
          )}

          <div className="text-left m-1 text-xl font-medium">
            <ul>
              {todos.map((item) => (
                <li
                  className="flex items-center justify-start gap-1"
                  key={item.id}
                  style={
                    item.completed
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                    name={item.text}
                    value={item.text}
                    onClick={() => handleTodos(item.id)}
                  />
                  <span className="text-xl m-0.5">{item.text}</span>
                  <span
                    className="px-1.5 text-lime-400 cursor-pointer"
                    onClick={() => editHandler(item.id)}
                  >
                    <FaEdit size={18} />
                  </span>
                  <span
                    className="text-red-600 cursor-pointer"
                    onClick={() => deleteHandler(item.id)}
                  >
                    <AiFillDelete size={20} />
                  </span>
                </li>
              ))}
            </ul>
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
      )}

      <div
        className="text-xl bg-neutral-400 text-black font-bold p-1 px-2 rounded-md absolute bottom-8 right-14 cursor-pointer"
        onClick={() => setOpenTodo(!openTodo)}
      >
        TODO
      </div>
    </>
  );
};
