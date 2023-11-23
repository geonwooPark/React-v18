import React from 'react'
import AutoBatchEventHandler from './components/AutoBatchEventHandler'
// import AutoBatchOther from './components/AutoBatchOther'
import Transition from './components/Transition/Transition'

function App() {
  return (
    <div>
      <AutoBatchEventHandler />
      <hr className="my-4" />
      {/* <AutoBatchOther /> */}
      <hr className="my-4" />
      <Transition />
    </div>
  )
}

export default App
