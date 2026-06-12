"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

export const HeroSlider1 = () => {
  const slides: {
    img: string;
    mission: string;
    h1: string;
    video: string;
    delays: {
      h5: string;
      h1: string;
      buttons: string;
      video: string;
    };
  }[] = [
    {
      img: "assets/img/hero/banner.jpg",
      mission: "Education, Healthcare, Rural Development and Climate Change.",
      h1: "We’re On A Mission \n To Change The World",
      video: "https://www.youtube.com/watch?v=p6DV1qL5UcM",
      delays: { h5: "1.3s", h1: "1.5s", buttons: "1.7s", video: "1.5s" },
    },
  ];

  return (
    <section className="hero-section hero-4">
      <Swiper {...sliderProps.heroSlider1} className="swiper hero-slider-2">
        {slides.map((slide, i) => (
          <SwiperSlide className="swiper-slide" key={i}>
            <div
              className="hero-image bg-cover"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="container">
                <div className="row g-4 align-items-center justify-content-between">
                  <div className="col-lg-9">
                    <div className="hero-content">
                      <h5
                        data-animation="fadeInUp"
                        data-delay={slide.delays.h5}
                        className="mb-2"
                      >
                        <i className="far fa-heart" /> {slide.mission}
                      </h5>
                      <h1
                        data-animation="fadeInUp"
                        data-delay={slide.delays.h1}
                      >
                        {slide.h1}
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="/projects"
                          data-animation="fadeInUp"
                          data-delay={slide.delays.buttons}
                          className="theme-btn"
                        >
                          View Projects
                        </Link>
                        <Link
                          href="/donation-details"
                          data-animation="fadeInUp"
                          data-delay={slide.delays.buttons}
                          className="theme-btn transparent-btn"
                        >
                          Donate Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="video-box">
                      <a
                        href={slide.video}
                        data-animation="fadeInUp"
                        data-delay={slide.delays.video}
                        className="video-buttton ripple video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-dot text-center">
          <div className="dot" />
        </div>
      </Swiper>
    </section>
  );
};
