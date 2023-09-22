import React, { useContext } from 'react';
import Topbar from "./components/topbar/topbar"
import Home from "./components/pages/home/Home"
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Write from "./components/pages/write/Write"
import Settings from "./components/pages/settings/Settings"
import Single from "./components/pages/single/Single"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Context } from './context/Context';


function App() {
  const {user} = useContext(Context);
  return (
  <Router>
    <Topbar />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/settings" element={user ? <Settings /> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
    </Routes>
  </Router>
  );
}

export default App;
