"use client";
import { useStickyHeader } from "@/utility";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

const Header = () => {
  useStickyHeader();
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  return (
    <Fragment>
      <Header1 open={() => setToggleMobileMenu(true)} />
      <MobileMenu
        open={toggleMobileMenu}
        close={() => setToggleMobileMenu(false)}
      />
    </Fragment>
  );
};

export default Header;

const Logo = ({
  logo = "YEK.png",
  className = "header-logo",
}: {
  logo?: string;
  className?: string;
}) => (
  <Link href="/" className={className}>
    <Image
      src={`/assets/img/logo/${logo}`}
      width={100}
      height={100}
      alt="logo-img"
    />
  </Link>
);

const socialLinks = [
  { icon: "facebook-f", href: "https://www.facebook.com/share/18oEqzmQm8/", label: "Facebook" },
  { icon: "instagram", href: "https://www.instagram.com/yaranekhair?igsh=a2dyc2xyZ2QwOXYy", label: "Instagram" },
  { icon: "linkedin-in", href: "https://pk.linkedin.com/company/yaran-e-khair", label: "LinkedIn" },
  { icon: "youtube", href: "https://youtube.com/@yaranekhair?si=tz5RG1wNhwuyv2pe", label: "YouTube" },
  { icon: "whatsapp", href: "https://whatsapp.com/channel/0029VafZhJnF6smws7g5Wx2H", label: "WhatsApp" },
];

const SocialIcons = ({ label = "Follow Us:" }: { label?: string }) => (
  <div className="social-icon d-flex align-items-center">
    <span>{label}</span>
    {socialLinks.map((social) => (
      <a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        key={social.icon}
      >
        <i className={`fab fa-${social.icon}`} />
      </a>
    ))}
  </div>
);

// ✅ Shared nav links - rendered identically in desktop and mobile menus
const navLinks: { href: string; label: string; plainCase?: boolean }[] = [
  { href: "/bayan-e-yaran", label: "Bayan e Yaran", plainCase: true },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Our Projects" },
  { href: "/team", label: "Team" },
  { href: "/news-grid", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Header1 = ({ open }: { open: () => void }) => (
  <header id="header-sticky" className="header-4">
    <div className="container">
      <div className="mega-menu-wrapper">
        <div className="header-main style-2">
          <div className="header-left">
            <div className="logo">
              <Logo />
            </div>
          </div>
          <div className="header-right d-flex justify-content-end align-items-center">
            <div className="mean__menu-wrapper">
              <Nav />
            </div>
            <div className="header-button d-none d-sm-block">
              <Link href="/donation-details" className="theme-btn">
                Donate Now
                <i className="ps-2 far fa-heart" />
              </Link>
            </div>
            <div className="header__hamburger d-xl-none my-auto">
              <div className="sidebar__toggle" onClick={open}>
                <i className="fas fa-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="main-menu d-none d-xl-block">
      <nav id="mobile-menu">
        <ul>
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? "active" : undefined}
                style={item.plainCase ? { textTransform: "none" } : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const MobileMenu = ({ open, close }: { open: boolean; close: () => void }) => (
  <Fragment>
    <div className="fix-area">
      <div className={`offcanvas__info ${open ? "info-open" : ""}`}>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo">
                <Logo logo="YEK.png" className="" />
              </div>
              <div className="offcanvas__close">
                <button onClick={close}>
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <MobileNav />
            <div className="offcanvas__contact">
              <h4>Contact Info</h4>
              <ul>
                {[
                  {
                    icon: "fal fa-map-marker-alt",
                    link: "#",
                    text: "Garamchashma, District Lower Chitral",
                  },
                  {
                    icon: "fal fa-envelope",
                    link: "mailto:yaranekhairngo@gmail.com",
                    text: "yaranekhairngo@gmail.com",
                  },
                  {
                    icon: "fas fa-phone",
                    link: "tel:03359834070",
                    text: "03359834070",
                  },
                ].map((item, i) => (
                  <li key={i} className="d-flex align-items-center">
                    <div
                      className={`offcanvas__contact-icon ${
                        i > 0 ? "mr-15" : ""
                      }`}
                    >
                      <i className={item.icon} />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a
                        target={item.link === "#" ? "_blank" : undefined}
                        href={item.link}
                      >
                        {item.text}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="header-button mt-4">
                <Link href="/donation-details" className="theme-btn text-center">
                  <span>
                    Donate Now
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </Link>
              </div>
              <SocialIcons label="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className={`offcanvas__overlay ${open ? "overlay-open" : ""}`}
      onClick={close}
    ></div>
  </Fragment>
);

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div className="mobile-menu fix mb-3 mean-container">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            {navLinks.map((item, i) => (
              <li
                key={item.href}
                className={i === navLinks.length - 1 ? "mean-last" : undefined}
              >
                <Link
                  href={item.href}
                  className={pathname === item.href ? "active" : undefined}
                  style={item.plainCase ? { textTransform: "none" } : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};