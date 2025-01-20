import { Toaster } from "react-hot-toast";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import NavbarContextProvider from "./context/NavbarContext";

function App() {
  return (
    <>
      <NavbarContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </NavbarContextProvider>
    </>
  );
}

export default App;
