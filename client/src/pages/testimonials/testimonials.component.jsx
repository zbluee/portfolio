import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTestimonyLists } from "../../redux/testimony/testimony.selectors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.styles.css";

const Testimonials = ({ testimonialLists }) => (
  <section className="testimonial container section">
    <h2 className="section-title">Comments</h2>
    <hr className="title-underline" />
    <Swiper
      className="testimonial-container"
      loop
      grabCursor
      spaceBetween={24}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      }}
      modules={[Pagination]}
    >
      {testimonialLists.map(({ id, imageUrl, name, description }) => (
        <SwiperSlide className="testimonial-card" key={id}>
          <img src={imageUrl} className="testimonial-img" alt="user-img" />
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-comment">{description}</p>
          <p className="testimonial-occupation">software engineer</p>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

const mapStateToProps = createStructuredSelector({
  testimonialLists: selectTestimonyLists,
});

export default connect(mapStateToProps)(Testimonials);
