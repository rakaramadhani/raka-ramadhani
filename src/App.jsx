import { Routes, Route } from "react-router"
import HomePage from "./pages/Home"
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return(
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App;
