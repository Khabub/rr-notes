import { closeNoteModal } from "../reducers/modalSlice";
import { useAppDispatch } from "../hooks/redux";

export const useCloseModal = () => {
  const dispatch = useAppDispatch();

  const closeHandler = () => {
    dispatch(closeNoteModal());     
  };
  return {
    closeHandler,
  };
};
