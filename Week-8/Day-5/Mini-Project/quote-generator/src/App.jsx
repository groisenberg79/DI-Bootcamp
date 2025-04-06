import { useState } from "react";
import "./App.css";
import quotes from "./assets/QuoteDatabase";
import QuoteAndAuthor from "./components/QuoteAndAuthor";

const randomQuote = () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

const randomColor = () => {
  const color = `rgb(
    ${Math.floor(Math.random() * 155)},
    ${Math.floor(Math.random() * 155)},
    ${Math.floor(Math.random() * 155)})`;
  return color;
};

function App() {
  const [quote, setQuote] = useState(quotes[0].quote);
  const [author, setAuthor] = useState(quotes[0].author);

  const handleClick = () => {
    const generateRandomQuote = randomQuote();
    setQuote(generateRandomQuote.quote);
    setAuthor(generateRandomQuote.author);
  };

  return (
    <>
      <QuoteAndAuthor
        displayColor={randomColor}
        handleClick={handleClick}
        quote={quote}
        author={author}
      />
    </>
  );
}

export default App;
