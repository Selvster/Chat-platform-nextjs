

import { User } from './auth';
export interface Room {
  _id: string; 
  name: string;
  description: string;
  owner: User;
  members: Array<User>;
  onlineUsers: number; 
}

export interface RoomWithIsOwner extends Room {
  isOwner: boolean;
}

export interface RoomsApiResponseData {
  rooms: Room[];
}

export interface CreateRoomApiResponse {
  status: string;
  message?: string;
  room?: Room;
}

export interface RoomCredentials {
  name: string;
  description: string;
}