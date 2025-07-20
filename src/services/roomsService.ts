import { serverFetch } from "@/libs/authorizedApi";
import {
  RoomsApiResponseData,
  Room,
  CreateRoomApiResponse,
  RoomCredentials,
} from "@/types";

export const roomsService = {
  fetchMyRooms: async (): Promise<Room[]> => {
    const data = await serverFetch<RoomsApiResponseData>("/rooms/my-rooms", {
      method: "GET",
    });

    if (data.status === "error") {
      throw new Error(data.message || "Failed to fetch user rooms from API.");
    }

    return data.data?.rooms || [];
  },

  createRoom: async (credentials: RoomCredentials): Promise<Room> => {
    const response = await serverFetch<CreateRoomApiResponse>("/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.status !== "success") {
      throw new Error(response.message || "API failed to create room.");
    }

    if (!response.data?.room) {
      throw new Error("API did not return room data upon successful creation.");
    }

    return response.data.room;
  },

  joinRoom: async (roomCode: string): Promise<Room> => {
    const response = await serverFetch<CreateRoomApiResponse>(
      `/rooms/${roomCode}/join`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomCode }),
      }
    );
    if (response.status !== "success") {
      throw new Error(response.message || "API failed to join room.");
    }
    if (!response.data?.room) {
      throw new Error("API did not return room data upon successful join.");
    }
    return response.data.room;
  },

  leaveRoom: async (roomId: string): Promise<void> => {
    const response = await serverFetch<{ message: string }>(
      `/rooms/${roomId}/leave`,
      {
        method: "POST",
      }
    );
    if (response.status !== "success") {
      throw new Error(response.message || "API failed to leave room.");
    }
  },

  editRoom: async (
    roomId: string,
    updatedData: RoomCredentials
  ): Promise<Room> => {
    const response = await serverFetch<CreateRoomApiResponse>(
      `/rooms/${roomId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );
    if (response.status !== "success") {
      throw new Error(response.message || "API failed to edit room.");
    }
    if (!response.data?.room) {
      throw new Error("API did not return room data upon successful edit.");
    }
    return response.data.room;
  },
};
