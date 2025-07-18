import RoomCard from './RoomCard';
import Info from '../common/Info';
import { fetchUserRooms } from '@/app/actions';
import Error from '../common/Error';

export default async function RoomsGrid() {
    const response = await fetchUserRooms();
    
    const rooms = response.rooms || [];
    const errorMessage = response.message;

    if (errorMessage) {
        return <Error message={errorMessage} />;
    }
    return (
        rooms.length === 0 ? (
            <Info message="No rooms available. You can create a new one or join an existing one!" />
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {rooms.map((room) => (
                    <RoomCard key={room._id} room={room} />
                ))}
            </div>
        )
    );
}
