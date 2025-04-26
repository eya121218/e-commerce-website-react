import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carousel.css';

type ImageCarouselProps = {
    images: string[];
};

const Carousel: React.FC<ImageCarouselProps> = ({ images }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            spaceBetween={20}
            slidesPerView={1}
        >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <img src={img} alt={`Slide ${index}`} className="carousel-image" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
