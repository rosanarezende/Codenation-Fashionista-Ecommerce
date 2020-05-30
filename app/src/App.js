import React from 'react';
import Routes from './routes';
import { history} from "./store"

function App() {
  return <Routes history={history} />
}

export default App;