"use server"; 
import {
  fetchUserRoomsController,
  createRoomController,
} from "@/controllers/roomsController";
import { Room, CreateRoomApiResponse } from "@/types"; 

export async function fetchUserRooms(): Promise<{
  rooms?: Room[];
  message?: string;
}> {
  return fetchUserRoomsController();
}

export async function createRoom(
  formData: FormData
): Promise<CreateRoomApiResponse> {
  return createRoomController(formData);
}