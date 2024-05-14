// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/1.jpg'
import bgimg2 from '../assets/2.jpg'
import bgimg3 from '../assets/3.jpg'

export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto rounded-lg'>
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper rounded-2xl'
      >
        <SwiperSlide >
          <Slide 
            image={bgimg1}
            text='Healthcare: "Healing together, for a healthier tomorrow."'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Animal Welfare: "Compassion in action, for every paw and claw."'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Education: "Knowledge is the key, unlocking futures for all."'
            
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
