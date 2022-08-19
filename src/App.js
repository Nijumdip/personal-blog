import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Login/RequireAuth';
import AddCategories from './Pages/Dashboard/AddCategories';
import AddPost from './Pages/Dashboard/AddPost';
import ExtraRoute from './Pages/Dashboard/ExtraRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogDetails from './Pages/Home/BlogDetails';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
        <Route index element={<AddCategories />} />
        <Route path="addPost" element={<AddPost />} />
        <Route path="extraRoute" element={<ExtraRoute />} />
        </Route>
        <Route path="blogDetail/:id" element={
          <RequireAuth>
            <BlogDetails />
          </RequireAuth>
        } />

      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
