

import { useEffect } from "react";
import { useAppDispatch } from "./components/hooks/redux";
import MainContainer from "./components/Main/MainContainer";
import NavMobile from "./components/Main/NavMobile";
import { setLanguageSet } from "./components/reducers/modalSlice";
import AlertDialog from "./components/UI/AlertDialog";
import SnackbarWindow from "./components/UI/SnackbarWindow";

const App = (): JSX.Element => { 
    

  return (
    <>
      <NavMobile />
      <MainContainer />
      <SnackbarWindow />
      <AlertDialog />  
    </>
  );
};

export default App;

