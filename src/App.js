import './App.scss';
import "swiper/css";
import "swiper/css/navigation";
import Footer from './components/general/Footer';
import Header from './components/general/Header';
import HomeScreen from './components/screens/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from './components/screens/LoginScreen';
import AboutMeScreen from './components/screens/AboutMeScreen';
import SignUpScreen from './components/screens/SignUpScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<SignUpScreen />} />
        <Route path="/about" element={<AboutMeScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
