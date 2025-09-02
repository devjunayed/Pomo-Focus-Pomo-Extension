import { useEffect, useState } from "react";
import { notifyUser } from "../utils/notifyUser";

const initialMin = 0;
const initialSec = 2;

function Timer() {
    const [count , setCount] = useState(0);
  const [min, setMin] = useState(initialMin);
  const [sec, setSec] = useState(initialSec);
  const [isRunning, setIsRunning] = useState(false);

  const playSound = () => {
    const audio = new Audio("/alert.mp3");
    audio.play();
  };

  const resetTimer = () => {
    setMin(initialMin);
    setSec(initialSec);
    setIsRunning(false);
    setCount((c) => c+1);

  };

  useEffect(() => {
    if (!isRunning) return;

    if (min === 0 && sec === 0) {
      notifyUser("Time up", {
        body: "25 min of time up",
      });
      playSound();
      resetTimer();
      return;
    }

    const timer = setTimeout(() => {
      if (sec === 0) {
        setMin((m) => m - 1);
        setSec(59);
      } else {
        setSec((s) => s - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [min, sec, isRunning]);

  return (
    <>
    <h3>{count}/10</h3>
      <h1>
        {
          <span>
            {min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}
          </span>
        }
      </h1>
      <div className="gap-4 flex justify-center mt-4 ">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={() => resetTimer()}>Skip</button>
      </div>
    </>
  );
}

export default Timer;
