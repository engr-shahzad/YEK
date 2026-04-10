"use client";
import { sliderProps } from "@/utility/sliderProps";
import Image from "next/image";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import causesData from "@/data/causes.json";

// ─── Types ───────────────────────────────────────────────────────────────────

type CauseList = {
  category: string;
  image: string;
  title: string;
  progress: number;
  raised: number;
  goal: number;
  author: string;
  delay: string;
};

type CauseFull = {
  id: number;
  slug: string;
  list: CauseList;
  details: {
    category: string;
    bannerImage: string;
    title: string;
    progress: number;
    raised: number;
    goal: number;
    description: string;
    fullContent: string[];
    goals: string[];
    contentImages: string[];
    sidebarGallery: string[];
  };
};

// ─── Shared Card ─────────────────────────────────────────────────────────────

const CausesCard = ({
  slug,
  delay,
  image,
  title,
  progress,
  raised,
  goal,
}: {
  slug: string;
  delay: string;
  image: string;
  title: string;
  progress: number;
  raised: number;
  goal: number;
}) => (
  <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={delay}>
    <div className="causes-box-items box-shadow">
      <div
        className="causes-image bg-cover"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="cause-content">
        <h4>
          <Link href={`/causes-details/${slug}`}>{title}</Link>
        </h4>
  
 
      </div>
    </div>
  </div>
);

// ─── Causes1 ─────────────────────────────────────────────────────────────────

export const Causes1 = () => {
  const causes = (causesData as CauseFull[]).slice(0, 4);

  return (
    <section className="causes-section fix section-bg section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="far fa-heart" />
            Help The People
          </span>
          <h2 className="mt-char-animation">Our Popular Causes</h2>
        </div>
        <div className="row">
          {causes.map((item) => (
            <div
              key={item.id}
              className="col-xl-6 wow fadeInUp"
              data-wow-delay={item.list.delay}
            >
              <div className="popular-causes-card-items">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="thumb">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src={item.list.image}
                        alt={item.list.title}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <h4>
                        <Link href={`/causes-details/${item.slug}`}>{item.list.title}</Link>
                      </h4>
                      <p>{item.details.description}</p>
                      <div className="progress-items">
                        <span className="point">{item.list.progress}%</span>
                  
                        <div className="progress-goals">
                          <span>
                            Raised <b>${item.list.raised}</b>
                          </span>
                          <span>
                            Goal <b>${item.list.goal}</b>
                          </span>
                        </div>
                      </div>
                      <Link
                        href={`/causes-details/${item.slug}`}
                        className="theme-btn transparent-btn-2"
                      >
                        <i className="far fa-heart" /> Donate Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Causes2 ─────────────────────────────────────────────────────────────────

export const Causes2 = () => {
  const causes = causesData as CauseFull[];

  return (
    <section className="causes-section fix section-bg section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="sub-title color-2 wow fadeInUp">
              <i className="far fa-heart" /> Recent Causes
            </span>
            <h2 className="mt-char-animation">
              Introducing Our <br /> Campaigns
            </h2>
          </div>
          <div className="array-button">
            <button className="array-prev">
              <i className="fas fa-long-arrow-left" />
            </button>
            <button className="array-next">
              <i className="fas fa-long-arrow-right" />
            </button>
          </div>
        </div>
        <div className="causes-wrapper">
          <Swiper {...sliderProps.causes1} className="swiper causes-slider-2">
            <div className="swiper-wrapper">
              {causes.map((cause) => (
                <SwiperSlide className="swiper-slide" key={cause.id}>
                  <div className="causes-card-items card-style-2">
                    <div className="causes-image">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src={cause.list.image}
                        alt={cause.list.title}
                      />
                      <div className="post-cat">{cause.list.category}</div>
                    </div>
                    <div className="causes-content">
                      <h3>
                        <Link href={`/causes-details/${cause.slug}`}>{cause.list.title}</Link>
                      </h3>
                      <div className="progress-items">
                        <span className="point">{cause.list.progress}%</span>
                  
                        <div className="progress-goals">
                          <span>
                            Raised <b>${cause.list.raised}</b>
                          </span>
                          <span>
                            Goal <b>${cause.list.goal}</b>
                          </span>
                        </div>
                      </div>
                      <Link
                        href={`/causes-details/${cause.slug}`}
                        className="theme-btn transparent-btn-2"
                      >
                        <i className="far fa-heart" /> Donate Now
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

// ─── Causes3 ─────────────────────────────────────────────────────────────────

export const Causes3 = () => {
  const causes = (causesData as CauseFull[]).slice(0, 3);

  return (
    <section className="causes-section fix section-padding fix section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">
            <i className="far fa-heart" />
            Trending Cause
          </span>
          <h2 className="mt-char-animation">
            It&apos;s About Impact, <br />
            <span>Good</span> History
          </h2>
        </div>
        <div className="row">
          {causes.map((cause) => (
            <div
              key={cause.id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={cause.list.delay}
            >
              <div className="causes-box-items">
                <div
                  className="causes-image bg-cover"
                  style={{ backgroundImage: `url(${cause.list.image})` }}
                />
                <div className="cause-content">
                  <h4>
                    <Link href={`/causes-details/${cause.slug}`}>{cause.list.title}</Link>
                  </h4>
   
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Causes4 ─────────────────────────────────────────────────────────────────

export const Causes4 = () => {
  const causes = causesData as CauseFull[];

  return (
    <section className="causes-section-2 fix section-padding fix section-bg">
      <div className="container">
        <div className="section-title">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="far fa-heart" />
            Help The People
          </span>
          <h2 className="mt-char-animation">
            Our <span>Popular</span> Causes
          </h2>
        </div>
        <Swiper {...sliderProps.causes2} className="swiper causes-slider">
          <div className="swiper-wrapper">
            {causes.map((cause) => (
              <SwiperSlide key={cause.id} className="swiper-slide">
                <div className="causes-card-items">
                  <div className="causes-image">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src={cause.list.image}
                      alt={cause.list.title}
                    />
                  </div>
                  <div className="causes-content">
                    <h3>
                      <Link href={`/causes-details/${cause.slug}`}>{cause.list.title}</Link>
                    </h3>
                    <p>{cause.details.description}</p>
                    <div className="progress-items">
                      <span className="point">{cause.list.progress}%</span>
                
                      <div className="progress-goals">
                        <span>
                          Raised <b>${cause.list.raised}</b>
                        </span>
                        <span>
                          Goal <b>${cause.list.goal}</b>
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/causes-details/${cause.slug}`}
                      className="theme-btn transparent-btn-2"
                    >
                      <i className="far fa-heart" /> Donate Now
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

// ─── Causes5 (Events) ────────────────────────────────────────────────────────

export const Causes5 = () => {
  const events: {
    category: string;
    date: string;
    title: string;
    location: string;
    image: string;
  }[] = [
    {
      category: "Water Day",
      date: "24th January 2024",
      title: "2024 Water Full Day Main Conference",
      location: "M12/A Miranda Hall Town Hall Street New York, United States",
      image: "/assets/img/event/event-card-bg.jpg",
    },
    {
      category: "Friendship Day",
      date: "24th May 2024",
      title: "How We Can Be A Good Friends",
      location: "M12/A Miranda Hall Town Hall Street New York, United States",
      image: "/assets/img/event/event-card-bg.jpg",
    },
    {
      category: "Teachers Day",
      date: "24th January 2024",
      title: "Teachers Presentation Day of 2024",
      location: "M12/A Miranda Hall Town Hall Street New York, United States",
      image: "/assets/img/event/event-card-bg.jpg",
    },
  ];

  return (
    <section className="event-section fix section-padding fix section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="far fa-heart" />
            Events
          </span>
          <h2 className="mt-char-animation">Upcoming Events</h2>
        </div>
        <div className="row">
          {events.map((event, index) => {
            const delay = (0.3 + index * 0.2).toFixed(1) + "s";
            return (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={delay}
              >
                <div
                  className="event-box-items bg-cover"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  <div className="cat-name">
                    <Link href="/events">{event.category}</Link>
                  </div>
                  <span>{event.date}</span>
                  <h3>
                    <Link href="/event-details">{event.title}</Link>
                  </h3>
                  <p>
                    <i className="fal fa-map-marker-alt" /> {event.location}
                  </p>
                  <Link href="/event-details" className="buy-ticket">
                    <i className="fal fa-chair" /> Book Your Seat
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── CausesTab ────────────────────────────────────────────────────────────────

export const CausesTab = () => {
  const allCauses = causesData as CauseFull[];

  const tabs = [
    { key: "all", label: "All Categories", delay: ".3s" },
    { key: "Education", label: "Education", delay: ".5s" },
    { key: "Health", label: "Health", delay: ".7s" },
    { key: "Water", label: "Water", delay: ".9s" },
  ];

  const getFiltered = (key: string) =>
    key === "all"
      ? allCauses
      : allCauses.filter((c) => c.list.category === key);

  return (
    <section className="causes-section fix section-padding fix">
      <div className="container">
        <Tab.Container defaultActiveKey="all">
          <div className="cuases-tab-header">
            <Nav as="ul" className="nav mb-4" role="tablist">
              {tabs.map((tab) => (
                <Nav.Item
                  key={tab.key}
                  as="li"
                  className="nav-item wow fadeInUp"
                  data-wow-delay={tab.delay}
                  role="presentation"
                >
                  <Nav.Link eventKey={tab.key} className="nav-link">
                    {tab.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>

          <Tab.Content className="tab-content">
            {tabs.map((tab) => (
              <Tab.Pane key={tab.key} eventKey={tab.key} className="tab-pane fade">
                <div className="row">
                  {getFiltered(tab.key).map((cause) => (
                    <CausesCard
                      key={cause.id}
                      slug={cause.slug}
                      delay={cause.list.delay}
                      image={cause.list.image}
                      title={cause.list.title}
                      progress={cause.list.progress}
                      raised={cause.list.raised}
                      goal={cause.list.goal}
                    />
                  ))}
                </div>
              </Tab.Pane>
            ))}

            {/* <div className="page-nav-wrap mt-5 text-center">
              <ul>
                <li>
                  <a className="page-numbers" href="#">
                    <i className="fal fa-long-arrow-left" />
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    01
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    02
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    ..
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    10
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </li>
              </ul>
            </div> */}
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};