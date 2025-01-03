import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { store } from './app/store.js';
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage/HomePage.jsx';
import AdminPage from './pages/AdminPage/AdminPage.jsx';
import Login from './pages/Login/Login.jsx';
import HomePageCoinList from './pages/HomePageCoinList/HomePageCoinList.jsx';
import AdminCoinAdd from './pages/AdminCoinAdd/AdminCoinAdd.jsx';
import ProtectedRoute from './pages/utils/ProtectedRoute.jsx';
import FilteredCoinList from './pages/FilteredCoinList/FilteredCoinList.jsx';
import CoinDetails from './pages/CoinDetails/CoinDetails.jsx';
import AdminCoinEdit from './pages/AdminCoinEdit/AdminCoinEdit.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/delete/:id" element={<AdminPage />} />
          <Route path="/admin/coin-edit/:id" element={<AdminCoinEdit />} />
          <Route path="/coin-add" element={<AdminCoinAdd />} />
        </Route>

        <Route path="/" element={<HomePage />} />
        <Route path="/filtered-coins" element={<FilteredCoinList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:id" element={<HomePageCoinList />} />
        <Route path="/coin-details/:id" element={<CoinDetails />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  
)
