"use client";
import axios from 'axios';
import { User } from './models/user';
import Header from '@/components/pageheader';
import { Separator } from '@/components/ui/separator';
import { useQuery } from '@tanstack/react-query';

async function GetUser(): Promise<User> {
  const url = process.env.NEXT_PUBLIC_API_URL
  const response = await axios.get<User>(`${url}/api/v1/user/gettestuser`);
  return response.data;
}

const Home = () => {
  const { data: user, isPending: userLoading, isError: userError } = useQuery({
    queryKey: ['user'],
    queryFn: GetUser,
  })

  if (userError) return <p>Error finding user</p>
  return (
    <div className='grid grid-rows-[auto,1fr] h-full w-full'>
      <Header>
        <h1 className='flex flex-row gap-2'>Hello, <span className='text-primary'>{userLoading ? 'Loading...' : user.name}</span></h1>
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
