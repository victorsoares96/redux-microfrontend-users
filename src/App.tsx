import { CombinedState, EnhancedStore } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import UsersGrid from "./components/UsersGrid/UsersGrid";

import { store as myStore } from './redux/store';
import usersReducer from "./redux/users/users.slice";

const App = ({ hostStore }: { hostStore: EnhancedStore<CombinedState<any>> }) => {
  useEffect(() => {
    // Inject usersReducer inside host store if this microfrontend initializes inside the host app.
    if (hostStore) hostStore.injectReducer('users', usersReducer);
  }, []);
  return (
    <Provider store={hostStore ?? myStore}>
      <UsersGrid />
    </Provider>
  )
};

export default App;