
import './App.css'

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;

function App() {

  return (
    <> 
      <h1>Hello, World!</h1>
      { myelement }
      <h2>React is { sum } times better with JSX</h2>
    </>
  )
}
export default App
