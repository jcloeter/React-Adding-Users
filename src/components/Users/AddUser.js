import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const addSubmitHandler = function (e) {
    e.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addSubmitHandler}>
        <label forHTML="username">Username</label>
        <input type="text" />
        <label forHTML="age">Age</label>
        <input type="number" />
        <Button type="submit">Hello</Button>
      </form>
    </Card>
  );
};

export default AddUser;
