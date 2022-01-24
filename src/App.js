import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/AuthPage/Signup';
import Login from './pages/AuthPage/Login';
import ConfirmationPage from './pages/AuthPage/ConfirmationPage';
import HomePage from './pages/DashboardPage/HomePage';
import MobileFooter from './Components/LandingPages/MobileFooter';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/confirmation" element={<ConfirmationPage />}></Route>
        </Routes>
      </BrowserRouter>
      <MobileFooter/>
    </>
  );
}

export default App;
