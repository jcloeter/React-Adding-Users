import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const ModalWindow = (props) => {
  return (
    <Fragment>
      ReactDOM.createPortal(
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Submission Error</h2>
        </header>
        <div className={styles.content}>
          <p>{props.errorMessage}</p>
        </div>
        <br />
        <footer>
          <Button className={styles.actions} onClick={props.hideModalHandler}>
            Okay
          </Button>
        </footer>
      </Card>
      , document.getElementById("overlay") );
    </Fragment>
  );
};

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const ErrorModal = (props) => {
  const hideModalHandler = () => {
    props.onExitModal();
  };
  if (!props.showModal) return null;

  //Start by figuring out how to pass the props

  return (
    <Fragment className={styles.backdrop} onClick={hideModalHandler}>
      {ReactDOM.createPortal(
        <Backdrop onClick={hideModalHandler} />,
        document.getElementById("overlay")
      )}

      {ReactDOM.createPortal(
        <ModalWindow
          errorMessage={props.errorMessage}
          onClick={props.onClick}
          hideModalHandler={hideModalHandler}
        />,
        document.getElementById("pop-up")
      )}
      {/* <Card className={styles.modal}>
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
      </Card> */}
    </Fragment>
  );
};

export default ErrorModal;
