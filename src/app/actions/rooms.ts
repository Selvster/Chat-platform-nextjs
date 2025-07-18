'use server';
import { serverFetch } from '@/libs/authorizedApi'; 
import { RoomsApiResponseData, Room } from '@/types';
export async function fetchUserRooms(): Promise<{ rooms?: Room[]; message?: string }> {
  try {
    const data = await serverFetch<RoomsApiResponseData>('/rooms/my-rooms', {
      method: 'GET',
    });


    return { rooms: data.data?.rooms || [] };
  } catch (error: any) {
    return { message: error.message || 'Server error fetching your rooms.' };
  }
}
