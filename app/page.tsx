import { Button } from '@/components/ui/button';
import axios from 'axios';
import { User } from './models/user';
import Header from '@/components/pageheader';

async function GetUser(): Promise<User> {
  const response = await axios.get<User>('http://localhost:3000/api/v1/user/gettestuser');
  return response.data
}

const Home = async () => {

  const user: User = await GetUser()

  return (
    <div className='grid gird-rows-2 h-full w-full'>
      <Header><h1 className='flex flex-row gap-2'>Hello, <span className='text-primary'>{user.name}</span></h1></Header>
      <div className='px-3 h-full w-full'>
        <p>testing this will be deleted later, this is just a test, nothing to see here yet, this is just a test</p>
        <div className='flex flex-row gap-4'>
          <Button variant={'outline'}>This is one button</Button>
          <Button variant={'secondary'}>This is also a button</Button>
          <Button variant={'ghost'}>This is a third button</Button>
        </div>
      </div>
    </div>
  )
}

export default Home