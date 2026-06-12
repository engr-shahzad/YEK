import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const PrivacyPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Privacy Policy" />
      <section className="blog-wrapper section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="blog-post-details border-wrap">
                <div className="post-content">
                  <h3>Introduction</h3>
                  <p>
                    Yaran e Khair (&quot;Friends of Goodness&quot;) respects
                    your privacy. This Privacy Policy explains what
                    information we collect through this website and how we
                    use it.
                  </p>
                  <h3>Information We Collect</h3>
                  <p>
                    When you use our contact form or get in touch with us, we
                    may collect your name, email address, phone number, and
                    any message you send us. We do not collect this
                    information automatically — only when you choose to
                    provide it.
                  </p>
                  <h3>How We Use Your Information</h3>
                  <p>
                    Information submitted through our contact form is used
                    only to respond to your enquiry, share updates about our
                    programs, or process your donation-related requests. We do
                    not sell or rent your personal information to third
                    parties.
                  </p>
                  <h3>Cookies and Analytics</h3>
                  <p>
                    Our website may use basic cookies or analytics tools to
                    understand how visitors use the site, so that we can
                    improve our content and services.
                  </p>
                  <h3>Third-Party Links</h3>
                  <p>
                    Our website includes links to third-party platforms such
                    as Facebook, Instagram, YouTube, LinkedIn, and WhatsApp.
                    We are not responsible for the privacy practices of these
                    external platforms.
                  </p>
                  <h3>Data Security</h3>
                  <p>
                    We take reasonable steps to protect any information you
                    share with us, but no method of transmission over the
                    internet is completely secure.
                  </p>
                  <h3>Changes to This Policy</h3>
                  <p>
                    We may update this Privacy Policy from time to time. Any
                    changes will be posted on this page.
                  </p>
                  <h3>Contact Us</h3>
                  <p>
                    If you have any questions about this Privacy Policy,
                    please contact us at{" "}
                    <a href="mailto:yaranekhairngo@gmail.com">
                      yaranekhairngo@gmail.com
                    </a>{" "}
                    or call us at{" "}
                    <a href="tel:03359834070">03359834070</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default PrivacyPage;
