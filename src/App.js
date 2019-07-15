import React from "react";
import StopWatch from "./components/StopWatch";
import CountDown from "./components/CountDown";
import Clock from "./components/Clock";

function App() {
    return (
        <div className="App">
            <StopWatch/>
            <Clock/>
            <CountDown/>
        </div>
    );
}

export default App;
