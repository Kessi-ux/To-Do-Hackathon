import React from 'react'

export const ClassWithChildren = ({children}) => {
  return (
    <div className = "flex space-x-2">
        <div className = {'w-10 ${}'}>

        </div>
        ClassWithChildren
    </div>
  )
}