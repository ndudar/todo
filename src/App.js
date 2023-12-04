// import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/tasklist" element={<TaskList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
