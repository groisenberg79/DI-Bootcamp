import React from 'react';
import hongKong from './assets/hong-kong.jpg';
import macau from './assets/macau.webp';
import japan from './assets/japan.webp';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required CSS
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="App">
      <Carousel width="500px">
        <div>
          <img src={hongKong} alt="Slide 1" />cd
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={macau} alt="Slide 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={japan} alt="Slide 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
