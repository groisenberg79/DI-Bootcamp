import "./App.css";

const url = "https://webhook.site/79dbc5c2-b039-4b95-aa42-57718651c3ac";
const data = {
  key1: "myusername",
  email: "mymail@gmail.com",
  name: "Isaac",
  lastname: "Doe",
  age: 27,
};

const sendData = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
  } catch (error) {
    console.log("Some error occured: ", { error });
  }
};

function App() {
  return <button onClick={sendData}>Press me to post some data</button>;
}

export default App;
