import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  isSelected?: boolean
  onClick: (assignee: string) => void
}

export const Avatar = ({ children, isSelected = false, onClick }: Props) => {
  return (
    <div
      className={`w-8 h-8 border-2 text-center cursor-pointer ${
        isSelected ? 'border-orange-400' : 'border-transparent'
      } rounded-full`}
      onClick={() => onClick(`${children}`)}
    >
      {children}
    </div>
  )
}
