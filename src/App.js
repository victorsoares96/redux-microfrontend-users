import React from 'react'
import ReactDOM from 'react-dom';
import RemoteAppWrapper from './RemoteApp';

export function App2() {
  return <RemoteAppWrapper />;
}

ReactDOM.render(<App2 />, document.getElementById('root'));