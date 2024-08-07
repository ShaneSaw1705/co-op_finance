import React from 'react'

export default function Header({ children }) {
  return (
    <div className='w-full h-[60px] border-secondary border-b-2 flex flex-row px-3 justify-start items-center text-center'>
      {children}
    </div>
  )
}
