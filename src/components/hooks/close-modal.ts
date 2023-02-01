import { closeNoteModal } from "../reducers/modalSlice";
import { useAppDispatch } from "../hooks/redux";

// custom hook for closing modal window
export const useCloseModal = () => {
  const dispatch = useAppDispatch();

  const closeHandler = () => {
    dispatch(closeNoteModal());
  };

  return {
    closeHandler,
  };
};
