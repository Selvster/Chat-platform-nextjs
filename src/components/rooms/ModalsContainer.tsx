import React, { useState } from "react";
import DeleteRoomModal from "./modals/DeleteRoomModal";
import LeaveRoomModal from "./modals/LeaveRoomModal";
import EditRoomModal from "./modals/EditRoomModal";
import { RoomWithIsOwner } from "@/types";

interface ModalsContainerProps {
    room: RoomWithIsOwner;
    dispatch: React.Dispatch<any>;
    modalState: {
        isDeleteModalOpen: boolean;
        isLeaveModalOpen: boolean;
        isEditModalOpen: boolean;
    };
}

export default function ModalsContainer({ room,
    modalState,
    dispatch
}: ModalsContainerProps) {

    return (
        <>
            <DeleteRoomModal
                isOpen={modalState.isDeleteModalOpen}
                onClose={() => dispatch({ type: 'CLOSE_DELETE' })}
                roomName={room.name}
                roomId={room._id}
            />
            <LeaveRoomModal
                isOpen={modalState.isLeaveModalOpen}
                onClose={() => dispatch({ type: 'CLOSE_LEAVE' })}
                roomId={room._id}
                roomName={room.name}
            />
            <EditRoomModal
                isOpen={modalState.isEditModalOpen}
                onClose={() => dispatch({ type: 'CLOSE_EDIT' })}
                initialName={room.name}
                initialDescription={room.description}
                roomId={room._id}
            />
        </>
    );
}
