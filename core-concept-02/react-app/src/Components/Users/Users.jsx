import React from "react";
import "./Users.css";
import User from "../User/User";

const Users = ({ users, loading }) => {
  console.log(loading);

  if (loading) {
    return (
      <div className="loading">
        <img src="/loader.gif" alt="Loading Gif" />
      </div>
    );
  } else {
    return (
      <div className="user-list">
        {users.map((user) => (
          <User className="user-item" user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

export default Users;
