import React from 'react'
import State from './context/State'
import Tabs from './components/Tabs'
import List from './components/List'

const App = ():JSX.Element => {
  return (
    <State>
      <main className="container">
        <h1>Eurocamp</h1>
        <Tabs />
        <List />
      </main>
    </State>
  );
}

export default App