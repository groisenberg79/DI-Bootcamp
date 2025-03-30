import './App.css'
import CarModel from './Components/Car.jsx';
import Events from './Components/Events.jsx';
import Phone from './Components/Phone.jsx';

const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (

    <>
      <CarModel model={carinfo.model} />
      <Events />
      <Phone />
    </>
    
  );
}

export default App;
