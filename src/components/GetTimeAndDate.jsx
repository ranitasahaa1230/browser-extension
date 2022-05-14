import React, { useEffect } from "react";
import { useBrowser } from "../contexts";

export const GetTimeAndDate = () => {
  const {
    browserState: { time, greetings, userName },
    browserDispatch,
  } = useBrowser();

  useEffect(() => {
    getTime();
    //eslint-disable-next-line
  }, [time]);

  const getTime = () => {
    const today = new Date();
    const getHour = today.getHours();
    const getMins=today.getMinutes();
    const curTime= (getHour < 10 ? "0" : '') + getHour + ":" + (getMins < 10 ? "0" : '') + getMins;
    setTimeout(getTime, 1000);
    browserDispatch({
      type: "GETTIME",
      payload: curTime,
    });
    browserDispatch({
      type: "GREETINGS",
      payload: getHour,
    });
  };

  return (
    <div>
      <h1 className="text-9xl">{time}</h1>
      <h1 className="m-5 text-6xl py-2 px-4">
        {greetings}, {userName}.
      </h1>
    </div>
  );
};
