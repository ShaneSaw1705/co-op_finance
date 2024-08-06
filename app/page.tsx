import { Button } from '@/components/ui/button';
import axios from 'axios';


export default async function Home() {

  const user = await axios.get('http://localhost:3000/api/v1/user/gettestuser')

  return (
    <div className='flex flex-col h-screen justify-start'>
      <Button variant={'secondary'}>{user.data.name}</Button>
    </div>
  );
}
