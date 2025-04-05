import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/hello");
        const data = await response.json();
        setMessage(data);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    fetchMessage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/world", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: inputValue }),
      });

      const result = await response.json();
      console.log("post: ", inputValue );
      setServerMessage(result);
      setInputValue("");
      return result;
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <h1>{message}</h1>
      <form onSubmit={handleSubmit}>
        <h2>Post to Server:</h2>
        <input
          type="text"
          id="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <h3>{serverMessage}</h3>
    </>
  );
}

export default App;
