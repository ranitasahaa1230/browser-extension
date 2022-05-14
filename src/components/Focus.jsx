import React from "react";
import { useBrowser } from "../contexts";

export const Focus = () => {
  const {
    browserState: { tasks },
    browserDispatch,
  } = useBrowser();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFocus = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      browserDispatch({
        type: "TASKS",
        payload: e.target.value,
      });
    }
    localStorage.setItem("tasks", e.target.value);
  };

  return (
    <div>
      {tasks ? (
        <>
          <h4 className="text-3xl">Today's Focus :</h4>
          <div className="flex items-center justify-center gap-3 m-3">
            <input type="checkbox" className="w-4 h-4"/>
            <span className="text-2xl"> {tasks}</span>
            <button>Edit</button>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-4xl">What's your main focus for today?</h3>
          <input
            type="text"
            required
            className="text-center border-none my-6 px-10 text-4xl bg-transparent focus:outline-none border-class font-bold"
            onKeyPress={handleFocus}
          />
        </form>
      )}
    </div>
  );
};