import axios from 'axios';
import { User } from './models/user';
import Header from '@/components/pageheader';
import { Separator } from '@/components/ui/separator';

//TODO: Convert this code to work in a client setting. I need to convert it to use either useEffect or React Query as server components cant fetch from next backend
async function GetUser(): Promise<User> {
  "use server";
  const response = await axios.get<User>('http://localhost:3000/api/v1/user/gettestuser');
  return response.data;
}

const Home = async () => {
  const user: User = await GetUser()

  return (
    <div className='grid grid-rows-[auto,1fr] h-full w-full'>
      <Header>
        <h1 className='flex flex-row gap-2'>Hello, <span className='text-primary'>{user.name || 'no user'}</span></h1>
      </Header>
      <div className='p-4'>
        <h1 className='text-foreground text-6xl font-bold'>Dashboard</h1>
        <Separator />
        <div>
          <p>Other stuff</p>
        </div>
      </div>
    </div >
  );
}

export default Home;
