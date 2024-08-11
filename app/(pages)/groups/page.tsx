"use client";
import Header from '@/components/pageheader';
import { CreateGroups } from '@/components/creategroup';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'


//TODO: I need to build the functionality for checking the users group joining table in order to display the groups the user is in.
const Groups = () => {

  const [create, setCreate] = useState(false)

  const handleCreate = () => {
    setCreate(!create)
  }

  const handleSuccess = (success: boolean) => {
    if (success) {
      console.log('success!')
    }
  }

  return (
    <div className='grid grid-rows-[auto,1fr] h-full w-full overflow-hidden'>
      <Header>
        <div className='flex flex-row w-full justify-between items-center'>
          <h1>Groups</h1>
          <Button variant={'ghost'} onClick={handleCreate}>Create Group</Button>
        </div>
      </Header>
      <div className='p-4'>
        {/* just creates hover menu */}
        {create && <CreateGroups success={handleSuccess} close={handleCreate} />}
        {/* --- */}
        <p>Other stuff</p>
      </div>
    </div >
  )
}

export default Groups
