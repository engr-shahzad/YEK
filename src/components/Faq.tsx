"use client";
import Image from "next/image";
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
          Frequently Asked <br />
          Questions
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
                  alt="Volunteers helping community members"
                  className="faq-img"
                />
                <div className="faq-image-2">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img/faq/two.jpeg"
                    alt="Charity program participants smiling"
                  />
                </div>
                <div className="faq-image-3">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img/faq/three.jpg"
                    alt="Community members receiving support"
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
