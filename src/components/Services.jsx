import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { SERVICES } from '@/utils/constants';
import { sliderSettings } from '@/utils/common';

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className='flexCenter services-buttons'>
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

const Services = () => {
  return (
    <section className='services-wrapper'>
      <div className='paddings innerWidth services-container'>
        <div className='services-head flexColStart'>
          <span className='orangeText'>Specialities</span>
          <span className='primaryText'>Our Services</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {SERVICES.map((service, i) => (
            <SwiperSlide key={i}>
              <div className='flexColStart services-card'>
                <img src={service.image} alt={service.name} />
                <span className='secondaryText services-price'>
                  <span style={{ color: 'orange' }}>$</span>
                  <span>{service.price}</span>
                </span>
                <span className='primaryText services-name'>
                  {service.name}
                </span>
                <span className='secondaryText services-detail'>
                  {service.detail}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
