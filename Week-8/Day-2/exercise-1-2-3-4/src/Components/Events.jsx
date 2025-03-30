import { useState } from "react";

const clickMe = () => {
    alert('I was clicked.');
}

const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert("The Enter key was pressed, your input is: " + event.target.value);
    }
  };
  
const Events = () => {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const switchState = () => {
        setIsToggleOn(!isToggleOn);
    }

    const switchLabel = () => {
        if(isToggleOn) {
            return "ON";
        } else {
            return "OFF";
        }
    }

    return (
        <>
            <button onClick={clickMe}>click me!</button>
            <input type="text" onKeyDown={handleKeyDown}/>
            <button onClick={switchState}>{switchLabel()}</button>
        </>
    ); 
};

export default Events;