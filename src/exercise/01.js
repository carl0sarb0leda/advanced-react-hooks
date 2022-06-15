// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
// 💰 you can write the countReducer function so you don't have to make any
// changes to the next two lines of code! Remember:
// The 1st argument is called "state" - the current value of count
// The 2nd argument is called "newState" - the value passed to setCount
function countReducer(state, action) {
  console.log({action})
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + action.step}
    case 'DECREMENT':
      return {count: state.count - action.step}
    default:
      throw new Error(`Unsupported action method: ${action.type}`)
  }
}

function Counter({initialCount = 0, step = 2}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useState(initialCount)

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'DECREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
