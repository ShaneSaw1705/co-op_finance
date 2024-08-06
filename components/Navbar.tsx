"use client";

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Separator } from "@/components/ui/separator";
import {
  UsersIcon,
  Home,
  Settings,
} from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className='min-w-64 h-screen bg-background border-secondary border-solid border-2 flex flex-col justify-start items-center text-start'>
      <div className='h-[80px] w-full flex flex-row text-start justify-start items-center'>
        <h1 className='text-foreground'>Co-op Finance</h1>
      </div>
      <div className='flex flex-col w-full *:w-full *:justify-start'>
        <Separator />
        <Button
          variant={'ghost'}
          className={`py-6 ${pathname === '/' ? 'bg-primary text-white' : ''}`}
          onClick={() => router.push('/')}
        >
          <Home className='mr-2' /> Dashboard
        </Button>
        <Separator />
        <Button
          variant={'ghost'}
          className={`py-6 ${pathname === '/groups' ? 'bg-primary text-white' : ''}`}
          onClick={() => router.push('/groups')}
        >
          <UsersIcon className='mr-2' /> Groups
        </Button>
        <Separator />
        <Button
          variant={'ghost'}
          className={`py-6 ${pathname === '/settings' ? 'bg-primary text-white' : ''}`}
          onClick={() => router.push('/settings')}
        >
          <Settings className='mr-2' /> Settings
        </Button>
        <Separator />
      </div>
    </div>
  );
}
