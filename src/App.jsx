import {
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { SecondPage } from "./pages/SecondPage";

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App