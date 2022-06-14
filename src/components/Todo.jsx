import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const [toBeEdited, setToBeEdited] = useState({});
  const [openTodo, setOpenTodo] = useState(false);

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

  const editHandler = (item) => {
    setToBeEdited(item);
  };

  const updateTodo = () => {
    setTodos(() =>
      todos.map((item) => (item.id === toBeEdited.id ? toBeEdited : item))
    );
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
    // setTodos((todo)=>(
    //   todo.map((item)=>item.id === itemId ? {...item,completed:!item.completed} : item)
    // ))
  };

  return (
    <>
      {openTodo && (
        <div className="bg-neutral-800 w-80 h-auto absolute bottom-32 right-10 m-2 mx-4 p-4 rounded-lg">
          {todos.length === 0 ? (
            <>
              <p className="p-2 sm:text-xl font-medium">
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
              <p className="sm:text-xl text-left font-medium">Today's Todo</p>
              <span
                className="cursor-pointer text-emerald-500"
                onClick={() => setOpenTodo(!openTodo)}
              >
                <ImCross size={14} />
              </span>
            </div>
          )}

          <div className="text-left m-1 sm:text-xl font-medium">
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
                  <span className="sm:text-xl m-0.5">{item.text}</span>
                  <span
                    className="px-1.5 text-lime-400 cursor-pointer"
                    onClick={() => {
                      editHandler(item);
                      setEdit(true);
                    }}
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
            {!isEdit && (
              <form onSubmit={(e) => e.preventDefault()} id="handle-todo">
                <input
                  type="text"
                  className="border-0 outline-none rounded-md text-white cursor-pointer bg-transparent"
                  placeholder="New Todo"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyPress={handleTodo}
                />
              </form>
            )}
          </div>

          <div className="text-left m-1">
            {isEdit && (
              <form onSubmit={(e) => e.preventDefault()} id="handle-todo">
                <input
                  type="text"
                  className="border-0 outline-none rounded-md text-white cursor-pointer bg-transparent"
                  placeholder="New Todo"
                  value={toBeEdited.text}
                  onChange={(e) =>
                    setToBeEdited((todo) => {
                      return {
                        ...todo,
                        text: e.target.value,
                      };
                    })
                  }
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      updateTodo();
                      setEdit(false);
                    }
                  }}
                />
              </form>
            )}
          </div>
        </div>
      )}

      <div
        className="sm:text-xl bg-neutral-400 text-black font-bold p-1 px-2 rounded-md absolute bottom-8 right-14 cursor-pointer"
        onClick={() => setOpenTodo(!openTodo)}
      >
        TODO
      </div>
    </>
  );
};
