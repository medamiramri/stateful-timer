import React from 'react';
import ReactDOM from 'react-dom';


import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // timer: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isWorking: false
    };
    setInterval(() => {
      if (this.state.isWorking) {
        if (this.state.seconds < 59) {
          this.setState({
            // timer: this.state.timer + 1,
            // hours: parseInt(this.state.timer / 3600),
            // minutes: parseInt((this.state.timer % 3600) / 60),
            // seconds: parseInt((this.state.timer % 3600) % 60)
            seconds: this.state.seconds + 1
          });
        } else {
          this.setState({
            seconds: 0
          });
          if (this.state.minutes < 59) {
            this.setState({
              minutes: this.state.minutes + 1
            });
          } else {
            this.setState({
              minutes: 0,
              hours: this.state.hours + 1
            });
          }
        }
      }
    }, 1000);
  }

  start = () => {
    this.setState({
      isWorking: !this.state.isWorking
    });
  };
  reset = () => {
    this.setState({
      // timer: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
  };

  render() {
    return (
      <div className="container">
        <div className="timer">
          <div className="unit">
            <h2>{String(this.state.hours).padStart(2, "0")}:</h2>
            <p className="label">Hour</p>
          </div>
          <div className="unit">
            <h2>{String(this.state.minutes).padStart(2, "0")}:</h2>
            <p className="label">Minute</p>
          </div>
          <div className="unit">
            <h2>{String(this.state.seconds).padStart(2, "0")}</h2>
            <p className="label">Second</p>
          </div>
        </div>
        <div className="buttons">
          <button onClick={this.start}>
            {this.state.isWorking ? "Pause" : "Start"}
          </button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
