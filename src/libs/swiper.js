import Swiper from "swiper";
import { Navigation, } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

document.addEventListener("DOMContentLoaded", function () {
  const main_swiper = new Swiper(".main", {
    modules: [Navigation],
    centeredSlides: true,
    autoplay: {
        delay: 2000,
    },
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
  });
});
