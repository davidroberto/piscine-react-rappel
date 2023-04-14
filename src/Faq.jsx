import { useState } from "react";

const Faq = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div>
      <p onClick={handleClick}>Quel est la couleur d'une orange ?</p>
      {showAnswer && <p>La couleur d'une orange est ... ORANGE</p>}
    </div>
  );
};

export default Faq;
