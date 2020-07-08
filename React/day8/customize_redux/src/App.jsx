import React from 'react';
import store from './store'
import { Provider } from "./react-redux"
import WithCount from "./container/WithCount"
// console.log(store.getState());
function App() {
  return (
    <Provider store={store}>
      <div className="App" >
        <WithCount></WithCount>
    </div>
    </Provider>
  );
}

export default App;