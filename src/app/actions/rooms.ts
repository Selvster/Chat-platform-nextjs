"use server";
import { roomsController } from "@/controllers/roomsController";
import { CreateRoomApiResponse, RoomWithIsOwner } from "@/types";
import { revalidatePath } from "next/cache";

export async function fetchUserRooms(): Promise<{
  rooms?: RoomWithIsOwner[];
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

export async function leaveRoom(roomId: string): Promise<boolean> {
  let res = await roomsController.leaveRoom(roomId);
  if (res) {
    revalidatePath("/rooms/my-rooms");
  }
  return res;
}

export async function editRoom(
  id: string,
  name: string,
  description: string
): Promise<CreateRoomApiResponse> {
  const res = await roomsController.editRoom(id, name, description);
  if (res.status == "success") {
    revalidatePath("/rooms/my-rooms");
  }
  return res;
}
