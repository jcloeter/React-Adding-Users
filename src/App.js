import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/UI/ErrorModal";
import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([{ name: "Jim Bob", age: 799 }]);

  const [showModal, setShowModal] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const addUserHandler = (newUser) => {
    setUsersList((oldUsers) => {
      return [newUser, ...oldUsers];
    });
  };

  const exitModalHandler = () => {
    setShowModal(false);
  };

  // const addModalHandler = () => {
  //   setShowModal(true);
  // };

  const submitErrorHandler = (message) => {
    setErrorMessage(message);

    setShowModal(true);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} onSubmitError={submitErrorHandler} />
      <UsersList users={usersList} />
      <ErrorModal
        showModal={showModal}
        onExitModal={exitModalHandler}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default App;
