import './App.css';
import "swiper/css";
import "swiper/css/navigation";
import CarouselSection from './components/carousels/CarouselSection';
import BlogList from './components/blogs/BlogList';
import Pagination from './components/general/Pagination';
import Footer from './components/general/Footer';
import Header from './components/general/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselSection />
      <div className="bg-ghost-white">
        <BlogList />
        <Pagination />
      </div>
      <Footer />
    </div>
  );
}

export default App;
