import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import RootRouter from "./Routes/RootRouter";
import { store, persistor } from "./Redux/Store";
import SignUp from "Views/SignUp";
import LogIn from "Views/Login";
import Details from "Views/Details";
import Verify from "Views/Verify";
import HomePage from "Views/Home/HomePage";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootRouter />
        {/* <HomePage/> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
