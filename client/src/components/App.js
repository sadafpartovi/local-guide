import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import Provider from "../context/Provider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <Provider>
      <ToastContainer />
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
