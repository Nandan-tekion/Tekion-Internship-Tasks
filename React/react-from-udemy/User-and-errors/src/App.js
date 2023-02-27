import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  
  const [users, setUsers] = useState([]);

  const addUserHandler = (username , age) => {
    const user = {
      id : Math.random().toString(),
      name : username,
      age : age
    }

    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      newUsers.push(user);
      return newUsers;
    })
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}  />
      <UserList  users={users} />
    </React.Fragment>
  );
}

export default App;
