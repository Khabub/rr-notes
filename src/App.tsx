import MainContainer from "./components/Main/MainContainer";
import NavMobile from "./components/Main/NavMobile";
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
