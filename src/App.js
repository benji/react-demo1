import React from "react";
import "./App.css";
import Component1 from "./Component1";
import Component2 from "./Component2";

const observer = new PerformanceObserver(list => {
  for (const entry of list.getEntries()) {
    const metricName = entry.name;
    if (metricName.indexOf("cascading update") >= 0) {
      console.log("Detected cascading update", entry); // <---
    }
  }
});
observer.observe({ entryTypes: ["measure"] });

function App() {
  return (
    <div className="App">
      <Component1 />
      <br />
      <br />
      <Component2 />
    </div>
  );
}

export default App;
