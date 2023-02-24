import React from 'react';
import bg1 from '../../assets/images/bg1.jpg';
import bg2 from '../../assets/images/bg2.jpg';
import bg3 from '../../assets/images/bg3.jpg';
import CarouselItem from './CarouselItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

function CarouselSection(props) {
  SwiperCore.use([Autoplay]);
  const carouselList = [
    { id: 1, image: bg1, type: "Livestype" },
    { id: 2, image: bg2, type: "Technology" },
    { id: 3, image: bg3, type: "Food" },
  ]

  return (
    <Swiper
      className="mySwiper"
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
    >
      {carouselList.map(carouselItem => {
        return (
          <SwiperSlide key={carouselItem.id}>
            <CarouselItem 
              image={carouselItem.image}
              type={carouselItem.type}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
}

export default CarouselSection;