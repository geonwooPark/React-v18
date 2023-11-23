import React, { useState } from 'react'
import { flushSync } from 'react-dom'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function AutoBatchOther() {
  console.log('AutoBatchOther!!')

  const [todos, setTodos] = useState<Todo[] | null>(null)
  const [isFinishApi, setIsFinishApi] = useState<boolean>(false)

  const onClickExecuteApi = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        flushSync(() => {
          setTodos(data)
        })
        setIsFinishApi(true)
      })
  }

  return (
    <div>
      <p>Automatic Batching</p>
      <button className="bg-orange-400 p-2" onClick={onClickExecuteApi}>
        데이터 불러오기
      </button>
      <p>isFinishApi: {isFinishApi ? 'true' : 'false'}</p>
      {todos?.map((todo) => <p key={todo.id}>{todo.title}</p>)}
    </div>
  )
}
