import Image from "next/image";
import Link from "next/link";

export const Team1 = () => {
  const teamMembers: {
    image: string;
    role: string;
    name: string;
    delay: string;
    socials: {
      icon: string;
      link: string;
      active?: boolean;
    }[];
  }[] = [
    {
      name: "Sarir Ahmad",
      role: "Founder and CEO",
      image: "/assets/img/Founder and CEO/Sarir Ahmad.png",
      delay: ".2s",
      socials: [
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-vimeo-v", link: "#" },
        { icon: "fab fa-pinterest-p", link: "#" },
      ],
    },
    {
      name: "Shah Sarbaz",
      role: "Co founder",
      image: "/assets/img/Co Founder/Shah Sarbaz.png",
      delay: ".4s",
      socials: [
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-vimeo-v", link: "#" },
        { icon: "fab fa-pinterest-p", link: "#" },
      ],
    },
    // {
    //   name: "Waseem Iqbal",
    //   role: "Core member",
    //   image: "/assets/img/volunter/4.png",
    //   delay: ".6s",
    //   socials: [
    //     { icon: "fab fa-facebook-f", link: "#" },
    //     { icon: "fab fa-twitter", link: "#" },
    //     { icon: "fab fa-vimeo-v", link: "#" },
    //     { icon: "fab fa-pinterest-p", link: "#" },
    //   ],
    // },
    {
      name: "Fehmeeda Kalsoom",
      role: "Community Manager",
      image: "/assets/img/volunter/Fehmeeda.png",
      delay: ".8s",
      socials: [
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-vimeo-v", link: "#" },
        { icon: "fab fa-pinterest-p", link: "#" },
      ],
    },
    {
      name: "Joao Machado Velado Neto",
      role: "Core Team Member",
      image: "/assets/img/Core Team/Joao Machado Velado Neto/Joao Machado Velado Neto.png",
      delay: "1s",
      socials: [
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-vimeo-v", link: "#" },
        { icon: "fab fa-pinterest-p", link: "#" },
      ],
    },
  ];
  return (
    <section className="team-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="mt-char-animation">Our Team</h2>
        </div>
      </div>
      <div className="row g-0">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay={member.delay}
          >
            <div className="single-team-items">
              <div className="team-image">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src={member.image}
                  alt="team-img"
                />
                <div className="tema-main-area">
                  <div className="team-content">
                    <div className="social-profile">
                      {member.socials.map((social, i) => (
                        <a
                          key={i}
                          href={social.link}
                          className={social.active ? "active" : ""}
                        >
                          <i className={social.icon}></i>
                        </a>
                      ))}
                      <span className="plus-btn">
                        <i className="fal fa-plus"></i>
                      </span>
                    </div>
                    <p>{member.role}</p>
                    <h3>
  <Link href="/team" >
    {member.name}
  </Link>
</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Team2 = () => {
  const teamData: {
    img: string;
    name: string;
    role: string;
    delay: string;
    socials: { icon: string; link: string }[];
  }[] = [
    {
      img: "/assets/img/volunter/01.jpg",
      name: "Jane Cooper",
      role: "Marketing Coordinator",
      delay: ".3s",
      socials: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-instagram", link: "#" },
        { icon: "fab fa-linkedin-in", link: "#" },
      ],
    },
    {
      img: "/assets/img/volunter/02.jpg",
      name: "Kane Saan",
      role: "Marketing Manager",
      delay: ".5s",
      socials: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-instagram", link: "#" },
        { icon: "fab fa-linkedin-in", link: "#" },
      ],
    },
    {
      img: "/assets/img/volunter/03.jpg",
      name: "Jack Win",
      role: "Ceo of Mugli",
      delay: ".7s",
      socials: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-facebook-f", link: "#" },
        { icon: "fab fa-instagram", link: "#" },
        { icon: "fab fa-linkedin-in", link: "#" },
      ],
    },
  ];
  return (
    <section className="team-section fix section-bg section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="far fa-heart" />
            Volunteers
          </span>
          <h2 className="mt-char-animation">
            Our Team Mates With <br />
            <span>Good</span> History
          </h2>
        </div>
        <div className="row">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={member.delay}
            >
              <div className="team-card-items">
                <div className="team-image">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src={member.img}
                    alt={member.name}
                  />
                  <div className="team-content">
                    <h3>
                      <Link href="/team-details">{member.name}</Link>
                    </h3>
                    <p>{member.role}</p>
                    <div className="social-profile">
                      <ul>
                        {member.socials.map((social, i) => (
                          <li key={i}>
                            <a href={social.link}>
                              <i className={social.icon} />
                            </a>
                          </li>
                        ))}
                      </ul>
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
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