

import { User } from './auth';
export interface Room {
  _id: string; 
  name: string;
  description: string;
  owner: User;
  members: Array<User>;
  onlineUsers: number; 
}

export interface RoomsApiResponseData {
  rooms: Room[];
}
