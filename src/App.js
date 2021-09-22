import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([{ name: "Jim Bob", age: 799 }]);

  const addUserHandler = (newUser) => {
    setUsersList((oldUsers) => {
      return [newUser, ...oldUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
