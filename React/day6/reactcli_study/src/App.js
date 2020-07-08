import React from 'react';
import WithCount from './container/WithCount'
import WithList from './container/WithList'
import WithSearch from './container/WithSearch'
import {Provider} from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <WithSearch/>
      <WithList/>
      {/* <WithCount></WithCount> */}
    </Provider>
  );
}

export default App;
