import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Blog" />
      <section className="news-section fix section-padding">
        <div className="container">
          <div className="text-center">
            <h3>No blog posts yet</h3>
            <p>Check back soon for updates and stories from our team.</p>
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default BlogPage;
