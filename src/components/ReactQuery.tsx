import React, { Suspense } from 'react'
import Sidebar from './Sidebar'
import AlbumList from './AlbumList'
import TodoList from './TodoList'
import { ErrorBoundary } from 'react-error-boundary'

export default function ReactQuery() {
  return (
    <div className="flex p-4">
      <Sidebar />
      <div className="flex-1">
        <ErrorBoundary fallback={<p>Album 리스트 에러입니다!</p>}>
          <Suspense fallback={<p>Album 리스트 로딩중...</p>}>
            <AlbumList />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<p>Todo 에러입니다!</p>}>
          <Suspense fallback={<p>Todo 리스트 로딩중...</p>}>
            <TodoList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}
