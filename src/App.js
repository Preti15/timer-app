import React from 'react'
export default class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      time: 0
    }
  }

  startTimer = () => {
    const{time} = this.state;
    this.setState({
      time: time + 1
    });
    
  }

  tick = () => {
    this.interval = setInterval(
      ()=>this.startTimer(), 1000 
    )
  }

  stopTick = () =>{
    clearInterval(this.interval);
  }

  resetTick = () => {
    this.stopTick();
    this.interval = null;
    this.setState({
      time: 0
    })

  }

  render() {
    return(
    <div>
      <label>{this.state.time}</label>
      <div>
        <button onClick={this.tick} >{!this.interval ?`Start` : `Continue`}</button>
        <button onClick={this.stopTick} disabled={!this.interval}>Stop</button>
        <button onClick={this.resetTick} disabled={!this.interval}>Reset</button>
      </div>
    </div>
    );
  }
    
  
}


