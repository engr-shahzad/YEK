import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
};

const TermsPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Terms of Use" />
      <section className="blog-wrapper section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="blog-post-details border-wrap">
                <div className="post-content">
                  <h3>Acceptance of Terms</h3>
                  <p>
                    By accessing or using the Yaran e Khair website, you agree
                    to be bound by these Terms of Use. If you do not agree
                    with any part of these terms, please do not use this
                    website.
                  </p>
                  <h3>About Yaran e Khair</h3>
                  <p>
                    Yaran e Khair (&quot;Friends of Goodness&quot;) is a
                    non-profit student initiative based in Garamchashma,
                    District Lower Chitral, Pakistan, working in Education,
                    Healthcare, Rural Development, and Climate Change.
                  </p>
                  <h3>Use of Content</h3>
                  <p>
                    All text, images, and media on this website are the
                    property of Yaran e Khair unless otherwise stated. You may
                    share or reference our content for non-commercial,
                    educational, or charitable purposes, provided that proper
                    credit is given to Yaran e Khair.
                  </p>
                  <h3>Donations</h3>
                  <p>
                    Donations made through this website or its linked channels
                    are voluntary contributions intended to support our
                    programs in Education, Healthcare, Rural Development, and
                    Climate Change. All donations are used in accordance with
                    our organisational mission.
                  </p>
                  <h3>External Links</h3>
                  <p>
                    Our website may contain links to third-party websites and
                    social media platforms. Yaran e Khair is not responsible
                    for the content or practices of these external sites.
                  </p>
                  <h3>Changes to These Terms</h3>
                  <p>
                    We may update these Terms of Use from time to time. Any
                    changes will be posted on this page.
                  </p>
                  <h3>Contact Us</h3>
                  <p>
                    If you have any questions about these Terms of Use, please
                    contact us at{" "}
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

export default TermsPage;
