"use server";
import { roomsController } from "@/controllers/roomsController";
import { Room, CreateRoomApiResponse } from "@/types";

export async function fetchUserRooms(): Promise<{
  rooms?: Room[];
  message?: string;
}> {
  return roomsController.fetchUserRooms();
}

export async function createRoom(
  formData: FormData
): Promise<CreateRoomApiResponse> {
  return roomsController.createRoom(formData);
}

export async function joinRoom(
  roomCode: string
): Promise<CreateRoomApiResponse> {
  return roomsController.joinRoom(roomCode);
}