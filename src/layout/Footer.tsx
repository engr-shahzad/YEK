import Image from "next/image";
import Link from "next/link";

const Footer = () => <Footer1 />;

export default Footer;

const socialLinks = [
  { icon: "facebook-f", href: "https://www.facebook.com/share/18oEqzmQm8/", label: "Facebook" },
  { icon: "instagram", href: "https://www.instagram.com/yaranekhair?igsh=a2dyc2xyZ2QwOXYy", label: "Instagram" },
  { icon: "youtube", href: "https://youtube.com/@yaranekhair?si=tz5RG1wNhwuyv2pe", label: "YouTube" },
  { icon: "linkedin-in", href: "https://pk.linkedin.com/company/yaran-e-khair", label: "LinkedIn" },
  { icon: "whatsapp", href: "https://whatsapp.com/channel/0029VafZhJnF6smws7g5Wx2H", label: "WhatsApp" },
];

type LinkItem = { link: string; text: string };

// Resolve footer link entries to absolute paths so they work correctly
// from nested routes like /project-details/[slug]
const resolveLink = (link: string) => (link === "index" ? "/" : `/${link}`);

const usefulLink: LinkItem[] = [
  { link: "index", text: "Home" },
  { link: "about", text: "About Us" },
  { link: "projects", text: "Popular Projects" },
  { link: "team", text: "Our Team" },
];
const legalLink: LinkItem[] = [
  { link: "terms", text: "Terms of Use" },
  { link: "privacy", text: "Privacy Policy" },
  { link: "contact", text: "Contact Us" },
];

const contactInfo = [
  { icon: "fal fa-map-marker-alt", text: "Garamchashma, District Lower Chitral" },
  { icon: "fal fa-envelope", text: "yaranekhairngo@gmail.com", href: "mailto:yaranekhairngo@gmail.com" },
  { icon: "fal fa-phone", text: "0335 9834070", href: "tel:03359834070" },
];

const Footer1 = () => (
  <footer className="ftr-section">
    <style>{`
      .ftr-section {
        background: var(--header);
        padding: 80px 0 0;
      }
      .ftr-grid {
        display: grid;
        grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
        gap: 50px 30px;
        padding-bottom: 56px;
      }
      @media (max-width: 991px) {
        .ftr-grid { grid-template-columns: repeat(2, 1fr); gap: 40px 30px; }
      }
      @media (max-width: 575px) {
        .ftr-grid { grid-template-columns: 1fr; gap: 36px; }
      }

      .ftr-brand .ftr-logo { display: inline-flex; }
      .ftr-brand p {
        margin: 20px 0 22px;
        color: rgba(255,255,255,0.55);
        font-size: 14px;
        line-height: 1.8;
        font-weight: 300;
        max-width: 320px;
      }
      .ftr-social { display: flex; gap: 10px; }
      .ftr-social a {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 50%;
        color: rgba(255,255,255,0.7);
        font-size: 14px;
        transition: all 0.25s ease;
      }
      .ftr-social a:hover {
        background: var(--theme);
        border-color: var(--theme);
        color: #fff;
      }

      .ftr-col h4 {
        color: #fff;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 24px;
      }
      .ftr-col ul {
        display: flex;
        flex-direction: column;
        gap: 12px;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .ftr-col ul li a,
      .ftr-col ul li span {
        color: rgba(255,255,255,0.55);
        font-size: 14.5px;
        font-weight: 300;
        transition: color 0.25s ease;
      }
      .ftr-col ul li a:hover { color: var(--theme-3); }

      .ftr-contact li {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        line-height: 1.6;
      }
      .ftr-contact li i {
        color: var(--theme-3);
        margin-top: 3px;
        font-size: 14px;
        width: 16px;
        text-align: center;
      }

      .ftr-bottom {
        border-top: 1px solid rgba(255,255,255,0.08);
        padding: 22px 0;
        text-align: center;
      }
      .ftr-bottom p {
        color: rgba(255,255,255,0.45);
        font-size: 13.5px;
        font-weight: 300;
        margin: 0;
      }
      .ftr-bottom p a { color: var(--theme-3); font-weight: 400; }
      .ftr-bottom p a:hover { color: #fff; }
    `}</style>

    <div className="container">
      <div className="ftr-grid">
        <div className="ftr-brand">
          <Link href="/" className="ftr-logo">
            <Image
              src="/assets/img/logo/YEK.png"
              width={70}
              height={70}
              alt="Yaran e Khair logo"
            />
          </Link>
          <p>
            We bring together individuals from all walks of life with a shared goal of
            serving humanity and fostering positive social impact through collaborative
            efforts.
          </p>
          <div className="ftr-social">
            {socialLinks.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <i className={`fab fa-${s.icon}`} />
              </a>
            ))}
          </div>
        </div>

        <div className="ftr-col">
          <h4>Useful Links</h4>
          <ul>
            {usefulLink.map((item, i) => (
              <li key={i}>
                <Link href={resolveLink(item.link)}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ftr-col">
          <h4>Legal</h4>
          <ul>
            {legalLink.map((item, i) => (
              <li key={i}>
                <Link href={resolveLink(item.link)}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ftr-col">
          <h4>Contact Us</h4>
          <ul className="ftr-contact">
            {contactInfo.map((item, i) => (
              <li key={i}>
                <i className={item.icon} />
                {item.href ? <a href={item.href}>{item.text}</a> : <span>{item.text}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ftr-bottom">
        <p>
          © <Link href="/">Yaran e Khair</Link> Community - {new Date().getFullYear()}. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
