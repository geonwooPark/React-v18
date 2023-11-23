import React, { Suspense } from 'react'
import AutoBatchEventHandler from './components/AutoBatchEventHandler'
import AutoBatchOther from './components/AutoBatchOther'
import Transition from './components/Transition/Transition'
import ReactQuery from './components/ReactQuery'
import { ErrorBoundary } from 'react-error-boundary'

function App() {
  return (
    <div>
      <AutoBatchEventHandler />
      <hr className="my-4" />
      <AutoBatchOther />
      <hr className="my-4" />
      <Transition />
      <hr className="my-4" />
      <ErrorBoundary fallback={<p>전체 에러입니다!</p>}>
        <Suspense fallback={<p>전체 로딩중...</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App
