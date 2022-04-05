import React from 'react';

class Counter extends React.Component {
  constructor(props){
    super();
    this.state = {
      count: props.count
    }
  }
  
  interval=null

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  startCountDown = () => {
    clearInterval(this.interval);
    this.setState({count: this.props.count})
    this.interval = setInterval(() => {
      if(this.state.count>0){
        console.log(this.state.count)
        this.setState({
          count: this.state.count - 1,
        })
      } else {
        clearInterval(this.interval)
      }
      
    }, 1000);
  }
  render()  {
    return (
      <>
        <button onClick={this.startCountDown} type="button">CountDown</button>
        <h1>{this.state?.count}</h1>
      </>
    );
  }
}

export default Counter;