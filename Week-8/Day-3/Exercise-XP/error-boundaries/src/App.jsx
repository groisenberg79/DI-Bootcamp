import React, { Component, useState } from 'react';
import './App.css'
import ErrorBoundary from './components/ErrorBoundary';
import CarModel from './components/CarModel';
import Color from './components/Color';

const carinfo = {name: "Ford", model: "Mustang"};

const BuggyCounter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  if (count > 5 ){
    throw new Error('I crashed!');
  }

  return <h1 onClick={handleClick}>{count}</h1>
}

class App extends Component {
  render() {
    return (
      <>
        <p style={{fontWeight: "bold"}} >Click on the numbers to increase the counters. <br />
        The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</p>
        <hr />
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>

        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>

        <hr />

        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
        
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <hr />

        <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>

        <BuggyCounter></BuggyCounter>
        <BuggyCounter></BuggyCounter>

        <hr />

        <CarModel model={carinfo.model} />
        <Color />
      </>
    );
  }
}

export default App;
