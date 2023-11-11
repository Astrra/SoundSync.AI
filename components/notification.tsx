import React from 'react'
import { BellIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
const Notification = () => {
  return (
    <div>
          <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="secondary" size="icon">
                    <BellIcon className='h-4 w-4 bg-inherit'/>
                </Button>
                </DropdownMenuTrigger>
              <DropdownMenuContent>
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Welcome to SoundSync.AI</DropdownMenuItem>
                  <DropdownMenuItem>Free tokens</DropdownMenuItem>
                  <DropdownMenuItem>Click to upgrade</DropdownMenuItem>
                  
              </DropdownMenuContent>
          </DropdownMenu>
    </div>
  )
}

export default Notification;
