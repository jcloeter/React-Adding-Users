import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addSubmitHandler = function (e) {
    e.preventDefault();

    if (+enteredAge < 1) return;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return;

    props.onAddUser({
      name: enteredUsername,
      age: enteredAge,
      id: Math.random.toString(),
    });

    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addSubmitHandler}>
        <label forhtml="username">Username</label>
        <input
          onChange={usernameChangeHandler}
          value={enteredUsername}
          type="text"
        />
        <label forhtml="age">Age</label>
        <input onChange={ageChangeHandler} value={enteredAge} type="number" />
        <Button type="submit">Hello</Button>
      </form>
    </Card>
  );
};

export default AddUser;
