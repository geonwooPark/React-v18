import React, { useState } from 'react'
import { flushSync } from 'react-dom'

export default function AutoBatchEventHandler() {
  console.log('AutoBatchEventHandler!!')

  const [state1, setState1] = useState<number>(0)
  const [state2, setState2] = useState<number>(0)

  const onClickUpdateButton = () => {
    flushSync(() => {
      setState1((state1) => state1 + 1)
    })
    setState2((state2) => state2 + 1)
  }

  return (
    <div>
      <p>Automatic Batching (EventHandler)</p>
      <button className="bg-orange-400 p-2" onClick={onClickUpdateButton}>
        State
      </button>
      <p>State1: {state1}</p>
      <p>State2: {state2}</p>
    </div>
  )
}
