
export type ModalAction =
  | { type: 'OPEN_DELETE' }
  | { type: 'CLOSE_DELETE' }
  | { type: 'OPEN_LEAVE' }
  | { type: 'CLOSE_LEAVE' }
  | { type: 'OPEN_EDIT' }
  | { type: 'CLOSE_EDIT' };

export interface ModalState {
  isDeleteModalOpen: boolean;
  isLeaveModalOpen: boolean;
  isEditModalOpen: boolean;
}

export const initialModalState: ModalState = {
  isDeleteModalOpen: false,
  isLeaveModalOpen: false,
  isEditModalOpen: false,
};

export const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case 'OPEN_DELETE':
      return { ...state, isDeleteModalOpen: true };
    case 'CLOSE_DELETE':
      return { ...state, isDeleteModalOpen: false };
    case 'OPEN_LEAVE':
      return { ...state, isLeaveModalOpen: true };
    case 'CLOSE_LEAVE':
      return { ...state, isLeaveModalOpen: false };
    case 'OPEN_EDIT':
      return { ...state, isEditModalOpen: true };
    case 'CLOSE_EDIT':
      return { ...state, isEditModalOpen: false };
    default:
      return state;
  }
};