import { useEffect, useState } from "react";
import { useBrowser } from "./contexts";
import { pics } from "./database";
import { HomePage, UserOnboarding } from "./pages";

function App() {
  const {
    browserState: { userName }, browserDispatch
  } = useBrowser();
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const getBgImage = pics[Math.floor(Math.random() * pics.length)];
    setBgImage(getBgImage);
    const getName=localStorage.getItem("userName");
    browserDispatch({
      type: "USERNAME",
      payload: getName,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover opacity-85"
      style={{
        backgroundImage: `url("${bgImage}")`,
      }}
    >
      {userName ? <HomePage /> : <UserOnboarding />}
    </div>
  );
}

export default App;
