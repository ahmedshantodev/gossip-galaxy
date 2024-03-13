import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import RootLayout from "./RootLayout";

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<Signin />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
