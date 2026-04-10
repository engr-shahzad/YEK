import Image from "next/image";
import Link from "next/link";

export const Service1 = () => {
  const serviceData: {
    img: string;
    title: string;
    description: string;
    delay: string;
  }[] = [
    {
      img: "/assets/img/service/BZY.JPG",
      title: "Bazm-e-Yaran: Comprehensive Sessions",
      description:
        "Interactive sessions in Garam Chashma combining mental health support, career counseling, self-improvement activities, and democratic leadership programs to empower students.",
      delay: ".3s",
    },
    {
      img: "/assets/img/service/SCH.png",
      title: "Education for Everyone: Scholarships",
      description:
        "Providing full and partial scholarships covering fees, textbooks, transportation, and housing to students from remote valleys, ensuring quality education for all.",
      delay: ".5s",
    },
    {
      img: "/assets/img/service/CC.jpeg",
      title: "Career Counseling & Student Facilitation",
      description:
        "Guiding students through diverse career paths and scholarship opportunities with peer-led mentorship, helping them make informed decisions about their futures.",
      delay: ".7s",
    },
    {
      img: "/assets/img/service/FL.jpg",
      title: "First Aid & Emergency Relief",
      description:
        "Rapid response support for flood-affected communities, providing immediate first aid, food supplies, clothing, and essential household items to vulnerable families.",
      delay: ".3s",
    },
  ];
  return (
    <section className="service-section fix section-bg section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title color-2 wow fadeInUp">
            <i className="far fa-heart" />
            Our Programs
          </span>
          <h2 className="mt-char-animation">
            Empowering Communities <br />
            Through Action
          </h2>
        </div>
        <div className="row">
          {serviceData.map((item, i) => (
            <div
              key={i}
              className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="service-card-items">
                <div className="service-image">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "25rem" }}
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <div className="service-content">
                  <h3>
                    <Link href="/about">{item.title}</Link>
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};