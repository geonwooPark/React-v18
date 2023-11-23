import React from 'react'
import AutoBatchEventHandler from './components/AutoBatchEventHandler'
import AutoBatchOther from './components/AutoBatchOther'
import Transition from './components/Transition/Transition'
import ReactQuery from './components/ReactQuery'

function App() {
  return (
    <div>
      <AutoBatchEventHandler />
      <hr className="my-4" />
      <AutoBatchOther />
      <hr className="my-4" />
      <Transition />
      <hr className="my-4" />
      <ReactQuery />
    </div>
  )
}

export default App
