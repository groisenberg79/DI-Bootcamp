import './App.css'
import CarModel from './Components/Car.jsx';

const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
    <CarModel model={carinfo.model} />
  );
}

export default App;
