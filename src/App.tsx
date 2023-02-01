import MainContainer from "./components/Main/MainContainer";
import AlertDialog from "./components/UI/AlertDialog";
import SnackbarWindow from "./components/UI/SnackbarWindow";

const App = (): JSX.Element => {
  return (
    <>
      <MainContainer />
      <SnackbarWindow />
      <AlertDialog />
    </>
  );
};

export default App;
