import React from 'react'
import AutoBatchEventHandler from './components/AutoBatchEventHandler'
import AutoBatchOther from './components/AutoBatchOther'

function App() {
  return (
    <div>
      <AutoBatchEventHandler />
      <hr className="my-4" />
      <AutoBatchOther />
      <hr className="my-4" />
    </div>
  )
}

export default App
