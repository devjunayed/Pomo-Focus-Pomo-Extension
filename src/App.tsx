import { useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Tasks from "./components/Tasks";

function App() {
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        console.log("Notification permission:", permission);
      });
    }
  }, []);

  return <div>
    <Timer />
    <Tasks />
  </div>;
}

export default App;
