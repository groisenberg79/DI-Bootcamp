const QuoteAndAuthor = (props) => {
  const randomColor = props.displayColor();
  const html = document.documentElement;
  html.style.backgroundColor = randomColor;

  return (
    <>
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="quote">"{props.quote}"</h1>
          <h5 id="author">-{props.author ? props.author : "Unknown"}-</h5>
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          id="newquote"
          onClick={props.handleClick}
        >
          New quote
        </button>
      </div>
    </>
  );
};

export default QuoteAndAuthor;
