import Link from "next/link";

export const Cta1 = () => {
  return (
    <section className="cta-banner fix">
      <div className="container">
        <div
          className="cta-banner-wrapper section-padding bg-cover"
          style={{ backgroundImage: 'url("assets/img/join-cat-bg.jpg")' }}
        >
          <div className="row">
            <div className="offset-xl-5 col-xl-6 col-lg-8 offset-lg-2 col-md-12">
              <div className="section-title">
                <span className="sub-title text-white wow fadeInUp">
                  <i className="far fa-heart" />
                  Life Changing Video
                </span>
                <h2 className="mt-char-animation text-white">
                  Joel Orphanage Of Ministry Uganda
                </h2>
              </div>
              <div className="button-items mt-4 mt-md-0">
                <Link
                  href="projects"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <i className="fal fa-briefcase" />
                  Careers
                </Link>
                <Link
                  href="donation-details"
                  className="theme-btn transparent-btn wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <i className="fal fa-user" />
                  Internship
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const Cta5 = () => {
  return (
    <section
      className="cta-video-section-2 fix section-padding bg-cover"
      style={{ backgroundImage: 'url("assets/img/about/maxresdefault.jpg")' }}
    >
      <div className="container">
        <div className="cta-video-wrapper d-block center">
          <div className="section-title">
            <span className="sub-title color-2 wow fadeInUp">
              <i className="far fa-heart" />
              Scholarship Program
            </span>
            <h2 className="mt-char-animation text-white">
              We are united for <br />
              Others
            </h2>
          </div>
          <div
            className="video-play-btn pt-4 mt-md-0 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <a
              href="https://www.youtube.com/watch?v=mti1IwGFSS8"
              className="video-btn ripple video-popup"
            >
              <i className="fas fa-play" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=mti1IwGFSS8"
              className="video-text video-popup wow fadeInUp"
              data-wow-delay=".5s"
            >
              Play Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
