import React, {Component} from "react";

class Clock extends Component {
    state = {
        time: new Date()
    };

    componentDidMount() {
        this.timerID = setInterval(()=> this.tick(), 1000);
    };

    componentWillUnmount() {
        clearInterval(this.timerID)
    };

    tick() {
        this.setState({
            time: new Date()
        });
    };

    render() {
        return(
            <div className="clock">
                <div className="clock-header">
                    <h1>Current Time</h1>
                </div>
                <div className="clock-display">
                    {this.state.time.toLocaleTimeString()}
                </div>
            </div>
        )
    };
}

export default Clock;