


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


const Home = () => {
    return (
        <div className='mt-5'>
            <div className="max-w-6xl mx-auto">
         <div className='h-96'>
         <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img  className='h-96 w-full object-cover' src="https://i.ibb.co/wW0xjGv/Food-Drive-header.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96 w-full object-cover' src="https://i.ibb.co/Nrr8YJY/images-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96 w-full object-cover' src="https://i.ibb.co/prG1t2R/1000-F-295623492-bo-Bopdk-Dqw-MDHu-Pj-IZIP8oh-B753-Vfeb7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96 w-full object-cover 'src="https://i.ibb.co/KmnFbgC/GITH-Food-Campaign-Banner-1024x576.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-96 w-full object-cover' src="https://i.ibb.co/GCKwgpK/1600w-Iq-HYh-STbn1-I.webp" alt="" /></SwiperSlide>
      </Swiper>
         </div>
            </div>
        </div>
    );
};

export default Home;