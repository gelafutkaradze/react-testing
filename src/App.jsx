import React, { useEffect, useState } from "react";

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUsers(data);
    };

    getUsers();
  }, []);

  // const onChangeCheckBoxEvent = (e, index) => {
  //   console.log(e, index);
  // };

  return (
    <>
      <div className="container">
        <p>ALL(10)</p>
        <div className="title-parent">
          <input type="checkbox" />
          <p>userName</p>
          <p>UserEmail</p>
          <p>Password</p>
          <p>Phone</p>
          <p>Status</p>
          <p>Action</p>
        </div>
        {users.map((user, index) => (
          <div className="map-container" key={user.id}>
            <div className="checkbox-parent">
              <input
                type="checkbox"
                onChange={(e, index) => {
                  e.target.value;
                  console.log(user);
                }}
              ></input>
            </div>
            <div>
              <div className="username">{user.username}</div>
            </div>
            <div>
              <div>{user.email}</div>
            </div>
            <div>
              <div>{user.password}</div>
            </div>
            <div>
              <div>{user.phone}</div>
            </div>
            <div className="danger">
              <div className="status">status</div>
            </div>
            <div>
              <div style={{ fontWeight: "bolder", fontSize: "15px" }}>...</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
