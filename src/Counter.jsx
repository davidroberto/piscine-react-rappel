import { useState } from "react";

const Counter = () => {
  // permet de créer une variable d'état (de state)
  // qui est stockée en dehors du composant
  // avec une valeur initiale à 0 (au chargement du composant
  // si count n'existe pas dans le state, on l'initialise à 0, sinon
  // on prend la valeur du state
  const [count, setCount] = useState(0);

  // au click, on utilise la fonction setCount
  // pour modifier la valeur de count
  // setCount va automatiquement recharger le composant
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default Counter;
