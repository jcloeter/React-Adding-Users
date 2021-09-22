import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import { useState } from "react";

const ErrorModal = (props) => {
  const hideModalHandler = () => {
    props.onExitModal();
  };
  if (!props.showModal) return null;

  return (
    <div className={styles.backdrop} onClick={hideModalHandler}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Submission Error</h2>
        </header>
        <div className={styles.content}>
          <p>{props.errorMessage}</p>
        </div>
        <br />
        <footer>
          <Button className={styles.actions} onClick={hideModalHandler}>
            Okay
          </Button>
        </footer>
      </Card>
      ;
    </div>
  );
};

export default ErrorModal;
