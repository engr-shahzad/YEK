"use client";
import Image from "next/image";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  const faqs: {
    key: string;
    question: string;
    answer: string;
    delay: string;
  }[] = [
    {
      key: "faq1",
      question: "How can I become a volunteer with Yaran e Khair?",
      answer:
        "We welcome volunteers who share our mission of serving marginalized communities. You can join us in organizing sessions, facilitating programs, or supporting our relief efforts. Contact us through our website to learn about current volunteer opportunities.",
      delay: ".3s",
    },
    {
      key: "faq2",
      question: "What areas does Yaran e Khair serve?",
      answer:
        "We primarily work in Lower Chitral, Upper Chitral, and remote valleys including Garam Chashma and Shah Saleem. Our programs focus on underserved communities that lack access to quality education, healthcare, and emergency support.",
      delay: ".5s",
    },
    {
      key: "faq3",
      question: "How can I contribute or donate to support your programs?",
      answer:
        "Your donations help us provide scholarships, emergency relief, and comprehensive educational support to students in need. You can contribute through our website or contact us directly to sponsor a student or support specific programs.",
      delay: ".7s",
    },
  ];
  return (
    <div className="faq-content">
      <div className="section-title">
        <span className="sub-title color-2 wow fadeInUp">
          <i className="far fa-heart" />
          Common Questions
        </span>
        <h2 className="mt-char-animation">
          Empowering Communities <br />
          Since 2022
        </h2>
      </div>
      <div className="faq-accordion mt-4 mt-md-0">
        <Accordion defaultActiveKey="faq2">
          {faqs.map(({ key, question, answer, delay }) => (
            <Accordion.Item
              key={key}
              eventKey={key}
              className="wow fadeInUp"
              data-wow-delay={delay}
            >
              <Accordion.Header>{question}</Accordion.Header>
              <Accordion.Body>{answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export const Faq1 = () => {
  return (
    <section className="faq-section fix section-padding">
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <Faq />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="faq-image-items-2">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src="/assets/img/faq/one.jpg"
                  alt="img"
                  className="faq-img"
                />
                <div className="faq-image-2">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img/faq/two.jpeg"
                    alt="img"
                  />
                </div>
                <div className="faq-image-3">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img/faq/three.jpg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Faq2 = () => {
  return (
    <section className="faq-section fix section-padding">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <Faq />
          </div>
          <div className="col-lg-6">
            <div className="faq-image-items">
              <div className="counter-box">
                <h2>
                  <span className="count">3</span>+
                </h2>
                <p>Years of Impact</p>
              </div>
              <div className="row g-4">
                <div
                  className="col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="faq-image">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/faq/faq1.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="faq-image">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/faq/faq2.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="faq-image">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/faq/faq3.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="faq-image">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/faq/faq4.jpg"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Faq3 = () => {
  const faqItems: {
    title: string;
    description: string;
    bgImage: string;
    icon: string;
    link: string;
    cardClass: string;
  }[] = [
    {
      title: "Mental Health Support",
      description:
        "Sessions promoting emotional well-being and resilience among students through guided activities",
      bgImage: "/assets/img/fc1.jpg",
      icon: "/assets/img/f1.png",
      link: "/contact",
      cardClass: "card1",
    },
    {
      title: "Career Counseling",
      description:
        "Guidance to help students explore educational and professional opportunities for their future",
      bgImage: "/assets/img/fc2.jpg",
      icon: "/assets/img/f2.png",
      link: "/about",
      cardClass: "card2",
    },
    {
      title: "Leadership Development",
      description:
        "Programs cultivating democratic thinking, participation, and community leadership among youth",
      bgImage: "/assets/img/fc3.jpg",
      icon: "/assets/img/f3.png",
      link: "/team",
      cardClass: "card3",
    },
  ];
  return (
    <section className="faq-wrap section-padding pb-0 text-center">
      <div className="container">
        <div className="row">
          {faqItems.map((item, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4 wow fadeInUp">
              <div
                className={`single-faq-card ${item.cardClass}`}
                style={{ backgroundImage: `url(${item.bgImage})` }}
              >
                <div className="icon">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "50px", width: "auto" }}
                    src={item.icon}
                    alt="icon"
                  />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link href={item.link}>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};