import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createUser } from "../../redux/users/users.slice";


const UsersGrid = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state["users"]);
  const hostName = useAppSelector((state) => state);

  return (
    <div style={{ border: "1.5px solid blue", marginTop: "10px" }}>
      <h3>Welcome to Users Grid</h3>

      <span>{JSON.stringify(hostName)}</span>
      <div>
        <button
          onClick={() =>
            dispatch(
              createUser({
                id: users.list.length + 1,
                name: "John Doe",
              })
            )
          }
        >
          Create User
        </button>
      </div>

      {/*tickets && (
        <div>
          <h3>Host App Tickets</h3>

          <ul>
            {tickets.list.map((ticket) => (
              <li key={ticket.id}>{ticket.name}</li>
            ))}
          </ul>
        </div>
      )*/}

      {users && (
        <div>
          <h3>Remote App Users</h3>

          <ul>
            {users.list.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UsersGrid;
