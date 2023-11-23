import React, { memo, useDeferredValue } from 'react'
import { Task } from './Transition'

type TaskProps = {
  taskList: Task[]
  isPending: boolean
}

export default function TaskList({ taskList, isPending }: TaskProps) {
  // const deferredTaskList = useDeferredValue(taskList)

  return (
    <>
      {taskList.map((task) => (
        <div
          key={task.id}
          className={`w-[300px] bg-pink-400 mb-2 ${
            isPending ? 'opacity-20' : 'opacity-100'
          }`}
        >
          <p>제목: {task.title}</p>
          <p>담당자：{task.assignee}</p>
        </div>
      ))}
    </>
  )
}
