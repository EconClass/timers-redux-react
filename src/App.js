import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import NewTimer from './components/new-timer';
import ListTimers from './components/list-timers';
import { update } from './actions';

const store = createStore(reducers)

let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 50)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NewTimer />
        <ListTimers />
      </div>
    </Provider>
  );
}

export default App;
