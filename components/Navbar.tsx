"use client";

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Separator } from "@/components/ui/separator";
import {
  UsersIcon,
  Home,
  Settings,
  ChartColumnBigIcon,
} from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className='min-w-64 h-screen bg-background border-secondary border-solid border-2 flex flex-col justify-start items-center text-start'>
      <div className='flex flex-col justify-between w-full h-full'>
        <div>
          <div className='h-[80px] w-full flex flex-row text-start justify-start items-center px-4'>
            <h1 className='text-primary'>Name here</h1>
          </div>
          <div className='flex flex-col w-full *:w-full *:justify-start'>
            <Button
              variant={'ghost'}
              className={`py-6 ${pathname === '/' ? 'bg-primary text-white hover:bg-primary hover:text-white' : ''}`}
              onClick={() => router.push('/')}
            >
              <Home className='mr-2' /> Dashboard
            </Button>
            <Button
              variant={'ghost'}
              className={`py-6 ${pathname === '/groups' ? 'bg-primary text-white hover:bg-primary hover:text-white' : ''}`}
              onClick={() => router.push('/groups')}
            >
              <UsersIcon className='mr-2' /> Groups
            </Button>
            <Button
              variant={'ghost'}
              className={`py-6 ${pathname === '/stats' ? 'bg-primary text-white hover:bg-primary hover:text-white' : ''}`}
              onClick={() => router.push('/stats')}
            >
              <ChartColumnBigIcon className='mr-2' /> Stats
            </Button>
            <Button
              variant={'ghost'}
              className={`py-6 ${pathname === '/settings' ? 'bg-primary text-white hover:bg-primary hover:text-white' : ''}`}
              onClick={() => router.push('/settings')}
            >
              <Settings className='mr-2' /> Settings
            </Button>
          </div>
        </div>
        <div className='flex w-full justify-center py-4'>
          <Button variant={'outline'}>Logout</Button>
        </div>
      </div>
    </div>
  );
}
