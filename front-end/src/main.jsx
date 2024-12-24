import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import HomePage from './pages/HomePage/HomePage.jsx';
import AdminPage from './pages/AdminPage/AdminPage.jsx';
import Login from './pages/Login/Login.jsx';
import { store } from './app/store.js';
import { Provider } from 'react-redux';
import ListOfCoins from './pages/ListOfCoins/ListOfCoins.jsx';
import HomePageCoinList from './pages/HomePageCoinList/HomePageCoinList.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coinlist" element={<HomePageCoinList />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
