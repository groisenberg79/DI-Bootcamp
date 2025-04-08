import { useRef, useState } from "react";

const CharacterCounter = () => {
  const [length, setLength] = useState(0);
  const charRef = useRef("");

  const handleInput = () => {
    setLength(charRef.current.value.length);
  };

  return (
    <>
      <h2>Character Counter</h2>
      <input
        ref={charRef}
        onChange={() => handleInput()}
        type="text"
        placeholder="type anything"
      />
      <p>Character Count: {length}</p>
    </>
  );
};

export default CharacterCounter;
