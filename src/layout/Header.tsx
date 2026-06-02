"use client";
import { useStickyHeader } from "@/utility";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

const Header = ({ header }: { header?: number }) => {
  useStickyHeader();
  // Only Header1 and Header2 available (non-transparent)
  const headers = { 1: Header1, 2: Header2 };
  const HeaderComponent = headers[header as keyof typeof headers] || Header1;
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  return (
    <Fragment>
      <HeaderComponent open={() => setToggleMobileMenu(true)} />
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

const SocialIcons = ({ label = "Follow Us:" }: { label?: string }) => (
  <div className="social-icon d-flex align-items-center">
    <span>{label}</span>
    {["facebook-f", "twitter", "linkedin-in", "youtube"].map((icon) => (
      <a href="#" key={icon}>
        <i className={`fab fa-${icon}`} />
      </a>
    ))}
  </div>
);

const ContactList = ({
  items,
}: {
  items: { icon: string; content: string | React.ReactNode }[];
}) => (
  <ul className="contact-list">
    {items.map((item, i) => (
      <li key={i}>
        <i className={item.icon} />
        {item.content}
      </li>
    ))}
  </ul>
);

const Header1 = ({ open }: { open: () => void }) => (
  <header id="header-sticky" className="header-4">
    <div className="container">
      <div className="mega-menu-wrapper">
        <div className="header-main style-2">
          <div className="header-left">
            <div className="logo">
              <Logo />
              <Logo className="header-logo-2" logo="YEK.png" />
            </div>
          </div>
          <div className="header-right d-flex justify-content-end align-items-center">
            <div className="mean__menu-wrapper">
              <Nav />
            </div>
            <div className="header-button d-none d-sm-block">
              <Link href="/contact" className="theme-btn">
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

const Header2 = ({ open }: { open: () => void }) => (
  <Fragment>
    <div className="header-top-section-3">
      <div className="container">
        <div className="header-top-wrapper-2 style-3">
          <ContactList
            items={[
              {
                icon: "fal fa-map-marker-alt",
                content: "Garamchashma, District Lower Chitral",
              },
              {
                icon: "far fa-envelope",
                content: (
                  <a href="mailto:yaranekhairngo@gmail.com" className="link">
                    yaranekhairngo@gmail.com
                  </a>
                ),
              },
            ]}
          />
          <SocialIcons label="Follow Us On:" />
        </div>
      </div>
    </div>
    <header id="header-sticky" className="header-3">
      <div className="container">
        <div className="mega-menu-wrapper">
          <div className="header-main style-2">
            <div className="header-left">
              <div className="logo">
                <Logo logo="YEK.png" />
              </div>
              <div className="mean__menu-wrapper">
                <Nav />
              </div>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <div className="author-icon">
                <div className="icon">
                  <i className="fas fa-phone" />
                </div>
                <div className="content">
                  <span>Call Us Now</span>
                  <h5>
                    <a href="tel:03359834070">03359834070</a>
                  </h5>
                </div>
              </div>
              <div className="header-button">
                <Link href="/causes" className="theme-btn">
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
  </Fragment>
);

// ✅ Simplified Nav - only 4 links
const Nav = () => (
  <div className="main-menu d-none d-xl-block">
    <nav id="mobile-menu">
      <ul>
      <li>
            <Link href="/bayan-e-yaran" style={{ textTransform: "none" }}>Bayan e Yaran</Link>
          </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/causes">Our Projects</Link>
        </li>
        <li>
          <Link href="/team">Team</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
);

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
                <Link href="/contact" className="theme-btn text-center">
                  <span>
                    get A Quote
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

// ✅ Simplified MobileNav - only 4 links
const MobileNav = () => (
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
        <li>
            <Link href="/bayan-e-yaran" style={{ textTransform: "none" }}>Bayan e Yaran</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/causes">Our Projects</Link>
          </li>
          <li>
            <Link href="/news-grid">Blog</Link>
          </li>
          <li className="mean-last">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);