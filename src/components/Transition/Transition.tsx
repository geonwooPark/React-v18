import React, { useState, useTransition } from 'react'
import { Avatar } from './Avatar'
import TaskList from './TaskList'

export type Task = {
  id: number
  title: string
  assignee: string
}

const member = {
  a: 'A',
  b: 'B',
  c: 'C',
}

const generateDummyTasks = (): Task[] => {
  return Array(10000)
    .fill('')
    .map((_, index) => {
      const addedIndex = index + 1
      return {
        id: addedIndex,
        title: `문서 ${addedIndex}`,
        assignee:
          addedIndex % 3 === 0
            ? member.a
            : addedIndex % 2 === 0
              ? member.b
              : member.c,
      }
    })
}
const tasks = generateDummyTasks()

const filteringAssignee = (assignee: string) => {
  if (assignee === '') return tasks
  return tasks.filter((task) => task.assignee === assignee)
}

export default function Transition() {
  const [isPending, startTransition] = useTransition()

  const [selectedAssignee, setSelectedAssignee] = useState<string>('')
  const [taskList, setTaskList] = useState<Task[]>(tasks)
  const [isShowList, setIsShowList] = useState<boolean>(false)

  const onClickAssignee = (assignee: string) => {
    setSelectedAssignee(assignee)
    startTransition(() => setTaskList(filteringAssignee(assignee)))
  }

  return (
    <div>
      <p>transition</p>
      <div className="flex">
        <Avatar
          isSelected={selectedAssignee === member.a}
          onClick={onClickAssignee}
        >
          {member.a}
        </Avatar>
        <Avatar
          isSelected={selectedAssignee === member.b}
          onClick={onClickAssignee}
        >
          {member.b}
        </Avatar>
        <Avatar
          isSelected={selectedAssignee === member.c}
          onClick={onClickAssignee}
        >
          {member.c}
        </Avatar>
      </div>
      <br />
      <div className="flex gap-4 mb-4">
        <button
          className="bg-orange-400 p-2"
          onClick={() => onClickAssignee('')}
        >
          초기화
        </button>
        <button
          className="bg-orange-400 p-2"
          onClick={() => setIsShowList(!isShowList)}
        >
          리스트
        </button>
      </div>
      {isShowList && <TaskList taskList={taskList} isPending={isPending} />}
    </div>
  )
}
