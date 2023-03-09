import React from 'react';
import bg1 from '../../assets/images/bg1.jpg';
import bg2 from '../../assets/images/bg2.jpg';
import bg3 from '../../assets/images/bg3.jpg';
import CarouselItem from './CarouselItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { useSelector } from 'react-redux';

function CarouselSection(props) {
  SwiperCore.use([Autoplay]);
  const allBlogs = useSelector(state => state.blog.blogs)

  return (
    <Swiper
      className="mySwiper"
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
    >
      {allBlogs.map(carouselItem => {
        return (
          <SwiperSlide key={carouselItem.id}>
            <CarouselItem
              id={carouselItem.id}
              image={carouselItem.image}
              type={carouselItem.type}
              title={carouselItem.title}
              subTitle={carouselItem.subTitle}
              createdAt={carouselItem.created_at}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
}

export default CarouselSection;