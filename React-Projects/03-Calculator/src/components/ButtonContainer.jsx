import styles from "./ButtonContainer.module.css";

function ButtonContainer({ handleInput }) {
  const buttons = ['C', '<-', '1', '2', '+', '3', '4', '5', '-', '6', '7', '8', '*', '9', '0', '=', '/', '.'];

  return (
    <div className={styles.buttonContainer}>
      {buttons.map((button, index) => <button key={index} className={styles.button} onClick={() => handleInput(button)}>{button}</button>)}
    </div>

  );
}

export default ButtonContainer;