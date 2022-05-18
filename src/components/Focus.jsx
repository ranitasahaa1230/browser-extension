import React, { useState } from "react";
import { useBrowser } from "../contexts";

export const Focus = () => {
  const {
    browserState: { tasks },
    browserDispatch,
  } = useBrowser();

  const today = new Date().toLocaleDateString();
  const [mainFocus, setMainFocus] = useState(null);
  const [focusCompleted, setFocusCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFocus = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      browserDispatch({
        type: "TASKS",
        payload: e.target.value,
      });
      localStorage.setItem(
        "tasks",
        JSON.stringify({
          focus: e.target.value,
          date: today,
          completed: false,
        })
      );
      setMainFocus(e.target.value);
    }
  };

  // useEffect(() => {
  //   const getTasks = JSON.parse(localStorage.getItem("tasks"));
  //   if (getTasks) {
  //     if (getTasks.date !== today) {
  //       localStorage.removeItem("tasks");
  //     } else {
  //       setMainFocus(getTasks.focus);
  //       setFocusCompleted(getTasks.completed);
  //     }
  //   }
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div>
      {tasks ? (
        <>
          <h4 className="text-xl md:text-3xl">Today's Focus :</h4>
          <div
            className="flex items-center justify-center gap-3 m-3 font-extrabold"
            style={
              focusCompleted
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            <input
              type="checkbox"
              className="w-5 h-5"
              onClick={() => {
                setFocusCompleted((prev) => !prev);
                let data = JSON.parse(localStorage.getItem("tasks"));
                data.completed = !data.completed;
                localStorage.setItem("tasks", JSON.stringify(data));
              }}
            />
            <div className="text-xl md:text-3xl font-extrabold">{mainFocus}</div>
            {" "}<br/>
          </div>
          <div className="block	text-xl font-medium">{focusCompleted ? "Good job!" : ""}</div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl md:text-4xl font-bold">What's your main focus for today?</h3>
          <input
            type="text"
            required
            className="text-center border-none my-6 px-10 text-xl md:text-4xl bg-transparent focus:outline-none border-class font-bold"
            onKeyPress={handleFocus}
          />
        </form>
      )}
    </div>
  );
};
