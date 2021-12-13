import React, { useState } from 'react';
import Users from './components/users';
import API from './api';
import SearchStatus from './components/searchStatus';

function App() {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  return users.length > 0 ? (
    <>
      <SearchStatus length={users.length} />
      <Users arr={users} onDelete={handleDelete} />
    </>
  ) : (
    <span className={`badge bg-danger`}>Никто не тусанёт с тобой сегодня</span>
  );
}

export default App;
