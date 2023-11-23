import React, { Suspense, useState, useTransition } from 'react'
import Sidebar from './Sidebar'
import AlbumList from './AlbumList'
import TodoList from './TodoList'
import { ErrorBoundary } from 'react-error-boundary'

type Tabs = 'album' | 'todo'

export default function ReactQuery() {
  const [selectedTab, setSelectedTab] = useState<Tabs>('album')
  const [isPending, startTransition] = useTransition()

  const onClickTab = (tab: Tabs) => {
    startTransition(() => setSelectedTab(tab))
  }

  return (
    <div className="flex p-4">
      <Sidebar />
      <div className="flex-1">
        <div className="flex justify-center gap-2">
          <button
            className={`p-2 border-2
            ${
              selectedTab === 'album'
                ? 'border-orange-400'
                : 'border-transparent'
            }
            ${isPending ? 'opacity-20' : 'opacity-100'}`}
            onClick={() => onClickTab('album')}
          >
            Album
          </button>
          <button
            className={`p-2 border-2
            ${
              selectedTab === 'todo'
                ? 'border-orange-400'
                : 'border-transparent'
            }
            ${isPending ? 'opacity-20' : 'opacity-100'}`}
            onClick={() => onClickTab('todo')}
          >
            Todo
          </button>
        </div>

        <ErrorBoundary fallback={<p>Album 리스트 에러입니다!</p>}>
          <Suspense fallback={<p>Album 리스트 로딩중...</p>}>
            {selectedTab === 'album' ? <AlbumList /> : <TodoList />}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}
