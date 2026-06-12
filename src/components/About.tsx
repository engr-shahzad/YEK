import Image from "next/image";
import Link from "next/link";
import Counter from "./Counter";

export const About1 = () => {
  return (
    <section className="about-section-3 fix section-padding">
      <div className="container">
        <div className="about-wrapper-3">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image-items-2">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                    <div className="about-image">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                        src="/assets/img/about/kids1.jpg"
                        alt="Children supported by Yaran e Khair"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 wow fadeInUp" data-wow-delay=".5s">
                  <div className="about-img">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                                 src="/assets/img/bazm/1.JPG"
                        alt="Yaran e Khair community gathering event"
                      />
                    </div>
                    <div className="about-img">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                                 src="/assets/img/about/mental1.JPG"
                        alt="Mental health support session"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            <div className="about-content">
  <div className="section-title">
    <span className="sub-title color-2 wow fadeInUp">
      <i className="far fa-heart" />
      About Us
    </span>
    <h2 className="mt-char-animation">
      Yaran e Khair: Friends of Goodness
    </h2>
  </div>
  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
    A non-profit student initiative founded in 2022, dedicated to uplifting 
    marginalised communities. We bring together individuals from all walks of 
    life with a shared goal of serving humanity and fostering positive social 
    impact through collaborative efforts.
  </p>
  <div className="d-flex align-items-center flex-wrap mb-5">
    <ul
      className="checked-list wow fadeInUp"
      data-wow-delay=".3s"
    >
      <li>
        <i className="fas fa-check" /> Education
      </li>
      <li>
        <i className="fas fa-check" /> Healthcare
      </li>
    </ul>
    <ul
      className="checked-list wow fadeInUp"
      data-wow-delay=".5s"
    >
      <li>
        <i className="fas fa-check" /> Climate Change
      </li>
      <li>
        <i className="fas fa-check" /> Culture Preservation
      </li>
    </ul>
  </div>
  <Link
    href="projects"
    className="theme-btn wow fadeInUp"
    data-wow-delay=".7s"
  >
    Learn More
  </Link>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AboutStory = () => {
  return (
    <section className="about-section section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="far fa-heart" />
            Our Story
          </span>
          <h2 className="mt-char-animation">
            From Garamchashma to the Mountains of Chitral
          </h2>
        </div>
        <p
          className="text-center wow fadeInUp"
          data-wow-delay=".3s"
          style={{ maxWidth: 800, margin: "0 auto 40px" }}
        >
          Yaran e Khair was founded in 2022 in Garamchashma, District Lower Chitral, as a
          small student-led initiative with a simple goal: bring friends together to do good.
          What started with a handful of volunteers has grown into a fully youth-led
          organisation running active programmes in Education, Healthcare, Climate Awareness,
          and Leadership Development — reaching communities across Lower Chitral, Upper
          Chitral, and remote valleys including Garam Chashma and Shah Saleem.
        </p>
        <div className="row g-4 text-center justify-content-center">
          <div className="col-6 col-md-3 wow fadeInUp" data-wow-delay=".3s">
            <div className="counter-box">
              <h2>2022</h2>
              <p>Founded</p>
            </div>
          </div>
          <div className="col-6 col-md-3 wow fadeInUp" data-wow-delay=".5s">
            <div className="counter-box">
              <h2>
                <span className="count">
                  <Counter end={7} />
                </span>
                +
              </h2>
              <p>Active Programmes</p>
            </div>
          </div>
          <div className="col-6 col-md-3 wow fadeInUp" data-wow-delay=".7s">
            <div className="counter-box">
              <h2>
                <span className="count">
                  <Counter end={4} />
                </span>
              </h2>
              <p>Focus Areas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
