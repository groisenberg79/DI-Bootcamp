import { useState } from "react";

const FormComponent = () => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        destination: "",
        nutsFree: false,
        lactoseFree: false,
        isVegan: false
      });

    
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        
        setValues(prevValues => ({
            ...prevValues,
            [name]: type === "checkbox" ? checked : value
        }));
    };
  
    return(
      <>
        <h1>Sample form</h1>
        <form className="inputForm">
          <input
            className="text"
            onChange={handleChange}
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
          />
          <br />
          <input
            className="text"
            onChange={handleChange}
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
          />
          <br />
          <input
            className="text"
            onChange={handleChange}
            name="age"
            placeholder="Age"
            value={values.age}
          />
          <br />
          <br />
          <label>
            <input
              className="radiobutton"
              type="radio"
              name="gender"
              value="male"
              checked={values.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <br />
            <input
              className="radiobutton"
              type="radio"
              name="gender"
              value="female"
              checked={values.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
          <br />
          <label className="destination-header">Select your destination</label>
          <br />
          <select
            className="destination-input"
            onChange={handleChange}
            name="destination"
            value={values.destination}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
          </select>
          <br />
          <br />
          <label className="restrictions-title">Dietary restrictions:</label>
          <br />
          <div className="restrictions">
            <input
              type="checkbox"
              name="nutsFree"
              onChange={handleChange}
              checked={values.nutsFree}
            />
            <span>Nuts free</span>
            <br />
            <input
              type="checkbox"
              name="lactoseFree"
              onChange={handleChange}
              checked={values.lactoseFree}
            />
            <span>Lactose free</span>
            <br />
            <input
              type="checkbox"
              name="isVegan"
              onChange={handleChange}
              checked={values.isVegan}
            />
            <span>Vegan</span>
          </div>
          <button className="submit">Submit</button>
        </form>

        <hr />

        <div className="entered-info">
          <h2>Entered information:</h2>
          <p>
            Your name: {values.firstName} {values.lastName}
          </p>
          <p>Your age: {values.age}</p>
          <p>Your gender: {values.gender}</p>
          <p>Your destination: {values.destination}</p>
          <p>Your dietary restrictions: </p>
          <div className="restrictions">
            <span>**Nuts free : {values.nutsFree ? " Yes" : "No"}</span> <br />
            <span>**Lactose free : {values.lactoseFree ? " Yes" : "No"}</span>{" "}
            <br />
            <span>**Vegan meal : {values.isVegan ? " Yes" : "No"}</span>
          </div>
        </div>
  
      </>
    )
  }

  export default FormComponent;