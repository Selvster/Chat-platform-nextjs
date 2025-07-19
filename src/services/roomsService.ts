import { serverFetch } from "@/libs/authorizedApi";
import { RoomsApiResponseData, Room, CreateRoomApiResponse, RoomCredentials } from "@/types";


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
};