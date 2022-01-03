import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store as appStore } from './redux/store';
import counterReducer from './redux/counter/counter.slice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { increment } from './redux/counter/counter.slice';

const remoteAppScope = 'remoteApp';

const RemoteApp = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(state => state.counter.value);
  // const state = useSelector((state) => state[remoteAppScope]);

  return (
    <div style={{ marginTop: '10px' }}>
      <div>RemoteApp</div>
      <div>
        RemoteApp's name from the redux store : {counter}
      </div>

      <div>
        <button onClick={() => dispatch(increment())}>
          Dispatch RemoteApp new name
        </button>
      </div>
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
