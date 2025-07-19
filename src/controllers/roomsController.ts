import { roomsService } from "@/services/roomsService";
import { RoomWithIsOwner, CreateRoomApiResponse } from "@/types";
import { cookies } from "next/headers";

export const roomsController = {
  async fetchUserRooms(): Promise<{
    rooms?: RoomWithIsOwner[];
    message?: string;
  }> {
    try {
      const rooms = await roomsService.fetchMyRooms();
      const userId = (await cookies()).get("user_id")?.value;
      const roomsWithIsOwner = rooms.map((room) => ({
        ...room,
        isOwner: room.owner._id === userId,
      }));
      return { rooms: roomsWithIsOwner };
    } catch (error: any) {
      console.error("Error in fetchUserRoomsController:", error);
      return { message: error.message || "Server error fetching your rooms." };
    }
  },
  async createRoom(formData: FormData): Promise<CreateRoomApiResponse> {
    try {
      const credentials = {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
      };

      if (!credentials.name || !credentials.description) {
        return {
          status: "error",
          message: "Room name and description are required.",
        };
      }

      const room = await roomsService.createRoom(credentials);

      return {
        status: "success",
        room: room,
      };
    } catch (error: any) {
      console.error("Error in createRoomController:", error);
      return {
        status: "error",
        message:
          error.message ||
          "An unexpected error occurred while creating the room.",
      };
    }
  },
  async joinRoom(roomCode: string): Promise<CreateRoomApiResponse> {
    try {
      const room = await roomsService.joinRoom(roomCode);
      return {
        status: "success",
        room: room,
      };
    } catch (error: any) {
      console.error("Error in joinRoomController:", error);
      return {
        status: "error",
        message:
          error.message ||
          "An unexpected error occurred while joining the room.",
      };
    }
  }
};
