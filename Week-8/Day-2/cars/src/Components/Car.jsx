import { useState } from "react";
import Garage from "./Garage";

const CarModel = (props) => {
    const [ color, setColor ] = useState("red");
    return(
        <>
            <h1>This is a {color} {props.model}.</h1>
            <Garage size="small"/>
        </>
        
    )
}
export default CarModel;