import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store as appStore } from "./redux/store";
import counterReducer from "./redux/users/users.slice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { createUser } from "./redux/users/users.slice";

const remoteAppScope = "users";

const RemoteApp = () => {
  const dispatch = useAppDispatch();
  // const tickets = useAppSelector((state) => state["tickets"]);
  const users = useAppSelector((state) => state["users"]);
  const hostName = useAppSelector((state) => state);
  // const state = useSelector((state) => state[remoteAppScope]);

  return (
    <div style={{ border: "1.5px solid blue", marginTop: "10px" }}>
      <h3>Welcome to Remote App</h3>

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

const RemoteAppWrapper = (props: any) => {
  const { store } = props;
  useEffect(() => {
    if (store) store.injectReducer(remoteAppScope, counterReducer);
  }, []);

  return (
    <Provider store={store || appStore}>
      <RemoteApp />
    </Provider>
  );
};

export default RemoteAppWrapper;
