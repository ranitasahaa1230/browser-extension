import React, { useEffect, useState } from "react";
import axios from "axios";

export const Weather = () => {
  const [temp, setTemp] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${"687323c4b6d49653323ab7e2574d10f4"}`;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(URL);
        const { name, main, weather } = data;
        setLocation(name);
        setTemp(Math.round(main.temp));
        setImage(weather[0].icon);
      } catch (error) {
        console.log(error);
      }
    })();
        // eslint-disable-next-line
  }, [latitude, longitude]);

  return (
    <>
      <div className="absolute top-1.5 right-8">
        <div className="flex flex-col p-0">
          <div className="flex items-center gap-1">
            <img
              src={`https://openweathermap.org/img/wn/${image}@2x.png`}
              alt="weather-logo"
              className="w-14"
            />
            <div className="text-3xl">
              {temp}
              <span>&#176;</span>
            </div>
          </div>
          <span className="m-0 p-0 text-xl mr-2 font-medium">{location}</span>
        </div>
      </div>
    </>
  );
};
