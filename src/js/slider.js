import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';

export default function slider() {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        breakpoints: {
            0: {
                slidesPerView: 1,
              },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
        },
        spaceBetween: 30,
        modules: [Navigation],
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });
}