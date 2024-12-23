import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import HomePage from './pages/HomePage/HomePage.jsx';
import AdminPage from './pages/AdminPage/AdminPage.jsx';
import Login from './pages/Login/Login.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
)
