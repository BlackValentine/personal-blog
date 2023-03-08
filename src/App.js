import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/general/Footer';
import Header from './components/general/Header';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/LoginScreen';
import AboutMeScreen from './components/screens/AboutMeScreen';
import SignUpScreen from './components/screens/SignUpScreen';
import NotFoundScreen from './components/screens/NotFoundScreen';
import NewBlogScreen from './components/screens/NewBlogScreen';
import CategoryScreen from './components/screens/CategoryScreen';
import BlogDetailScreen from './components/screens/BlogDetailScreen';
import Loading from './components/general/Loading';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';
import { getAllBlogs } from './api/blogApi';
import './App.scss';
import "swiper/css";
import "swiper/css/navigation";
import { setLightMode } from './features/generalSlice';

function App() {
  const dispatch = useDispatch();
  const lightMode = useSelector(state => state.general.lightMode)

  useEffect(() => {
    if (window.matchMedia('(prefer-color-scheme: dark').matches) {
      dispatch(setLightMode(false))
    } else {
      dispatch(setLightMode(true))
    }
  }, [])

  useEffect(() => {
    if (lightMode === false) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [lightMode])

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <Loading />
      <div style={{paddingTop: '75px'}}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<SignUpScreen />} />
          <Route path="/reset" element={<ResetPasswordScreen />} />
          <Route path="/about" element={<AboutMeScreen />} />
          <Route path="/blog/edit" element={<NewBlogScreen />} />
          <Route path="/blog/:id" element={<BlogDetailScreen />} />
          <Route path="/category" element={<CategoryScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
