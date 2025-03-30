import { useState, useEffect } from "react";



const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState("red");

    useEffect(() => {
        alert("useEffect reached");
        setFavoriteColor("yellow");
      }, []);
    
    const setBlue = () => setFavoriteColor("blue");

    return(

        <>
            <h2>My favorite color is {favoriteColor}.</h2>
            <button onClick={setBlue}>change to blue</button>
        </>

    )
}

export default Color;