import Image from "next/image";
import Link from "next/link";

const Footer = () => <Footer1 />;

export default Footer;
const Footer1 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper style-2">
          <div className="row">
            <FooterLogoContainer />
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5  wow fadeInUp"
              data-wow-delay=".4s"
            >
              <LinksCol heading="Useful Links" links={usefulLink} />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5  wow fadeInUp"
              data-wow-delay=".6s"
            >
              <LinksCol heading="Legal" links={legalLink} />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6   wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4 className="text-white">Contact Us</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    <div className="contact-items">
                      <div className="icon">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="content">
                        <h6 style={{ color: "#ccc" }}>Garamchashma, District Lower Chitral</h6>
                      </div>
                    </div>
                    <div className="contact-items">
                      <div className="icon color-2">
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="mailto:yaranekhairngo@gmail.com" className="link" style={{ color: "#ccc" }}>
                            yaranekhairngo@gmail.com
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-items">
                      <div className="icon color-3">
                        <i className="fal fa-phone" />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="tel:03359834070" style={{ color: "#ccc" }}>03359834070</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom color-style">
        <div className="container">
          <div className="footer-wrapper">
            <p className="wow fadeInUp text-center" data-wow-delay=".3s">
              © <Link href="/">Yaran e Khair</Link> Community - {new Date().getFullYear()}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
const FooterLogoContainer = () => (
  <div
    className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp"
    data-wow-delay=".2s"
  >
    <div className="single-footer-widget">
      <div className="widget-head">
        <Link href="/">
          <Image
            src="/assets/img/logo/YEK.png"
            width={128}
            height={128}
            alt="logo-img"
          />
        </Link>
      </div>
      <div className="footer-content">
        <p>
          We bring together individuals from all walks of life with a shared goal of serving humanity and fostering positive social impact through collaborative efforts.
        </p>
        <div className="social-icon d-flex align-items-center">
          <a href="https://www.facebook.com/share/18oEqzmQm8/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://www.instagram.com/yaranekhair?igsh=a2dyc2xyZ2QwOXYy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://youtube.com/@yaranekhair?si=tz5RG1wNhwuyv2pe" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube" />
          </a>
          <a href="https://pk.linkedin.com/company/yaran-e-khair" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://whatsapp.com/channel/0029VafZhJnF6smws7g5Wx2H" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

type LinkItem = { link: string; text: string };

// Resolve footer link entries to absolute paths so they work correctly
// from nested routes like /project-details/[slug]
const resolveLink = (link: string) => (link === "index" ? "/" : `/${link}`);

const LinksCol = ({
  heading,
  links = [],
}: {
  heading?: string;
  links?: LinkItem[];
}) => (
  <div className="single-footer-widget">
    {heading && (
      <div className="widget-head">
        <h4 className="text-white">{heading}</h4>
      </div>
    )}
    <ul className="list-area">
      {links.map((e, i) => (
        <li key={i}>
          <a href={resolveLink(e.link)}>
            <i className="fas fa-angles-right" />
            {e.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const usefulLink = [
  { link: "index", text: "Home" },
  { link: "about", text: "About Us" },
  { link: "projects", text: "Popular Projects" },
  { link: "team", text: "Our Team" },
];
const legalLink = [
  { link: "terms", text: "Terms of Use" },
  { link: "privacy", text: "Privacy Policy" },
  { link: "contact", text: "Contact Us" },
];
