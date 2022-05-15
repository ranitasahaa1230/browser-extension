import React, { useEffect, useState } from "react";
import { useBrowser } from "../contexts";

export const Focus = () => {
  const today = new Date().toLocaleDateString();
  const [mainFocus, setMainFocus] = useState(null);
  const [focusCompleted, setFocusCompleted] = useState(false);
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
    localStorage.setItem("tasks",JSON.stringify({
      focus: e.target.value,
      date: today,
      completed: false,
    }));
    setMainFocus(e.target.value);
  };

  useEffect(()=>{
        const getTasks=JSON.parse(localStorage.getItem("tasks"));
        if(getTasks){
          if(getTasks.date!==today){
            localStorage.removeItem("tasks");
          }else{
            setMainFocus(getTasks.focus);
            setFocusCompleted(getTasks.completed);
          }
        }

  },[])

  return (
    <div>
      {tasks ? (
        <>
          <h4 className="text-3xl">Today's Focus :</h4>
          <div className="flex items-center justify-center gap-3 m-3">
            <input type="checkbox" className="w-4 h-4"/>
            <span className="text-2xl"> {mainFocus}</span>
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