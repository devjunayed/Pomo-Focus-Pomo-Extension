import { useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        console.log("Notification permission:", permission);
      });
    }
  }, []);

  return <Timer />;
}

export default App;
