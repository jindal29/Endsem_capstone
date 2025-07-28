import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import Settings from "./pages/Settings"
import About from "./pages/About"
import RecipesPage from "./pages/RecipesPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
// import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipess" element={<RecipesPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
