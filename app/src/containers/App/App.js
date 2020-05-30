import React from 'react';
import { Provider } from 'react-redux'

import Routes from '../../routes';
import { history, store} from "../../store"

function App() {
  return (
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  );
}

export default App;
