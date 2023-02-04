import { setNoteModal } from "../reducers/modalSlice";
import { useAppDispatch } from "../hooks/redux";

// custom hook for closing modal window
export const useCloseModal = () => {
  const dispatch = useAppDispatch();

  const closeHandler = () => {
    dispatch(setNoteModal(false));
  };

  return {
    closeHandler,
  };
};
