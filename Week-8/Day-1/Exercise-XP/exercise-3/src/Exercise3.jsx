import reactLogo from "./assets/react.svg";
import './Exercise.css';
const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

const Exercise = () => {
    return(
        <>  
            <h1 style={{color: "red", background: "lightblue"}}>This is a header</h1>
            <h1 style={style_header}>This is a Header</h1>

            <p className="para">This is a paragraph</p>

            <a href="https://www.google.com">This is  link</a>

            <form action="">

                <h2>This is a form:</h2>
                <p>Enter your name:</p>

                <input type="text" />
                <button type="submit">Submit</button>

            </form>

            <h3>Here's an image:</h3>
            <img width="100px" src={reactLogo} alt="react logo" />

            <h3>This is a list:</h3>

            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </>
    )
}

export { Exercise };