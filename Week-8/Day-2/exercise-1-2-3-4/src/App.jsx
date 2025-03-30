import './App.css'
import CarModel from './Components/Car.jsx';
import Events from './Components/Events.jsx';
import Phone from './Components/Phone.jsx';
import Color from './Components/Color.jsx';

const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (

    <>
      <CarModel model={carinfo.model} />
      <Events />
      <Phone />
      <Color />
    </>
    
  );
}

export default App;
