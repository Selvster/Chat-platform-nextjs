"use server";
import { serverFetch } from "@/libs/authorizedApi";
import { RoomsApiResponseData, Room, CreateRoomApiResponse } from "@/types";
export async function fetchUserRooms(): Promise<{
  rooms?: Room[];
  message?: string;
}> {
  try {
    const data = await serverFetch<RoomsApiResponseData>("/rooms/my-rooms", {
      method: "GET",
    });

    return { rooms: data.data?.rooms || [] };
  } catch (error: any) {
    return { message: error.message || "Server error fetching your rooms." };
  }
}

export async function createRoom(
  formData: FormData
): Promise<CreateRoomApiResponse> {
  try {
    const credentials = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
    };
    const response = await serverFetch<CreateRoomApiResponse>("/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (response.status !== "success") {
      return {
        status: "error",
        message: response.message || "Failed to create room.",
      };
    }
    return {
      status: "success",
      room: response.data?.room,
    };
  } catch (error: any) {
    return {
      status: "error",
      message:
        error.message ||
        "An unexpected error occurred while creating the room.",
    };
  }
}
