import './MyClock.scss';
import React from "react";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

class MyClock extends React.Component {
    timer;
    constructor(props){
        super(props);
        this.state = {
            currentDate: new Date(),
        }
        this.stop = this.stop.bind(this);
        this.start = this.start.bind(this);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.setState({currentDate: new Date()}), 1000);
    }

    render() {
      return (
          <div className="clock">
              <button onClick={this.start}>Start</button>
              <button onClick={this.stop}>Stop</button>
              <div className='myClock'>
                  <Clock value={this.state.currentDate} />
              </div>
          </div>
      );
  }

}

export default MyClock;
