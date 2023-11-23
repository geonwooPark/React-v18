import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import axios from 'axios'

type Todo = {
  userId: number
  id: number
  title: string
}

const fetchTodos = async () => {
  const result = await axios.get<Todo[]>(
    'http://jsonplaceholder.typicode.com/todos',
  )
  return result.data
}

export default function TodoList() {
  const { data } = useSuspenseQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  return (
    <div className="h-[300px] border-2 bg-blue-200 text-center overflow-y-scroll">
      <h2 className="text-2xl font-bold">TodoList</h2>
      {data?.map((todo) => <p key={todo.id}>{todo.title}</p>)}
    </div>
  )
}
