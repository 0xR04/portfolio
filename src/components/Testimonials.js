import { Fragment } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <Fragment>
      <div className="title">
        <h3>Testimonials.</h3>
      </div>
      <Swiper {...props}>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/team-1.jpg" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
            I had the pleasure of working with Jean, and I can say that my experience with him was enjoyable. He always wants to learn, improve, and give his best.
            </p>
            <h6>Santiago Correa</h6>
            <span>Front-End Developer</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/team-2.jpg" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
              I recommend Jean {`Roa's`} work, very good and clear. Excellent work and timely results. I am very grateful for his professionalism.
            </p>
            <h6>Pablo Montt</h6>
            <span>Product Designer</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="owl-dots"></div>
    </Fragment>
  );
};
export default Testimonials;
