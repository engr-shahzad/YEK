"use client";

import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Could not connect to server. Please try again.");
    }
  };

  return (
    <DanboxLayout>
      <PageBanner pageName="Contact" />
      <section className="contact-section-2 fix section-padding">
        <div className="container">
          <div className="row g-5 mb-5 justify-content-center">
            <div className="col-lg-4">
              <div className="d-flex flex-column gap-4 h-100 justify-content-center">
                <div className="contact-info-card">
                  <div className="icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <h6>Garamchashma, District Lower Chitral</h6>
                </div>
                <div className="contact-info-card">
                  <div className="icon color-2">
                    <i className="fal fa-envelope" />
                  </div>
                  <h6>
                    <a href="mailto:yaranekhairngo@gmail.com" className="link">
                      yaranekhairngo@gmail.com
                    </a>
                  </h6>
                </div>
                <div className="contact-info-card">
                  <div className="icon color-3">
                    <i className="fal fa-phone" />
                  </div>
                  <h6>
                    <a href="tel:03359834070">03359834070</a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="main-contact-form-items">
                <div className="section-title text-center">
                  <span className="sub-title color-2 wow fadeInUp">
                    <i className="fal fa-pen" />
                  </span>
                  <h2 className="mt-char-animation">Get In Touch</h2>
                </div>
                <form onSubmit={handleSubmit} className="mt-4 mt-md-0">
                  <div className="row g-4">
                    <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-clt">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject*"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-clt">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Write Message*"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {status === "success" && (
                  <div className="col-lg-12">
                    <p style={{ color: "green", fontWeight: "bold" }}>
                      Your message has been successfully sent. Thank you!
                    </p>
                  </div>
                )}
                {status === "error" && (
                  <div className="col-lg-12">
                    <p style={{ color: "red", fontWeight: "bold" }}>{errorMsg}</p>
                  </div>
                )}

                <div className="col-lg-12">
                  <button
                    type="submit"
                    className="theme-btn center d-block"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending..." : "Send Your Message"}
                  </button>
                </div>
              </div>
            </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default ContactPage;
