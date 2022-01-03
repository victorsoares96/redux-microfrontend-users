import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store as appStore } from './redux/store';
import counterReducer from './redux/counter/counter.slice';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { increment } from './redux/counter/counter.slice';

const remoteAppScope = 'counter';

const RemoteApp = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(state => state[remoteAppScope]);
  // const state = useSelector((state) => state[remoteAppScope]);

  if (counter) {
    console.log(counter.value)
  }
  return (
    <div style={{ marginTop: '10px' }}>
      <div>RemoteApp</div>
      <div>
        RemoteApp's name from the redux store : {counter && JSON.stringify(counter.value)}
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
