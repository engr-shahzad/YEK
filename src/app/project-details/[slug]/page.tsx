import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/public";
import type { ProjectRow } from "@/types/project";

// ─── Static Params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const supabase = createClient();
  const { data } = await supabase.from("projects").select("slug");
  return (data ?? []).map((cause) => ({ slug: cause.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = createClient();
  const { data: cause } = await supabase
    .from("projects")
    .select("title")
    .eq("slug", slug)
    .single();

  return {
    title: cause ? cause.title : "Project Not Found",
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const CausesDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const supabase = createClient();
  const { data: cause } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!cause) notFound();

  const details = cause as ProjectRow;

  const { data: otherCauses } = await supabase
    .from("projects")
    .select("id, slug, title")
    .neq("slug", slug)
    .order("display_order", { ascending: true })
    .limit(5);

  return (
    <DanboxLayout>
      <section className="causes-details-section fix section-padding">
        <div className="container">
          <div className="causes-details-wrapper">
            <div className="row g-5">

              {/* ── Main Content ── */}
              <div className="col-lg-8">
                <div className="causes-details-items">

                  {/* Banner Image */}
                  <div className="details-image">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src={details.banner_image}
                      alt={details.title}
                    />
                  </div>

                  {/* Details Content */}
                  <div className="details-content">
                    <span className="sub-text">
                      <i className="far fa-heart" /> {details.category}
                    </span>
                    <h2>{details.title}</h2>
                  </div>

                  {/* Full Content */}
                  <div className="causes-contents">
                    {details.full_content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}

                    {/* Content Images */}
                    {details.content_images.length > 0 && (
                      <div className="row g-4">
                        {details.content_images.map((img, i) => (
                          <div className="col-md-6" key={i}>
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              src={img}
                              alt={`${details.title} image ${i + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Goals */}
                    <h3>Our Goals</h3>
                    <p>
                      {details.goals_intro} If you can only give{" "}
                      <Link href="/donation-details">Rs. 500</Link> just this one time, it
                      will still make a difference.
                    </p>
                    <ul>
                      {details.goals.map((goal, i) => (
                        <li key={i}>{goal}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* ── Sidebar ── */}
              <div className="col-lg-4">
                <div className="casues-sidebar-wrapper">


                  {/* Gallery */}
                  <div className="single-sidebar-widgets">
                    <div className="widget-title">
                      <h4>Gallery</h4>
                    </div>
                    <div className="causue-gallery-wid">
                      {details.sidebar_gallery.map((img, i) => (
                        <a
                          key={i}
                          href={img}
                          className={`single-cause-img img-popup bg-cover${
                            i === details.sidebar_gallery.length - 1 ? " mb-0" : ""
                          }`}
                          style={{ backgroundImage: `url("${img}")` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Related Projects */}
                  {otherCauses && otherCauses.length > 0 && (
                    <div className="single-sidebar-widgets">
                      <div className="widget-title">
                        <h4>Related Projects</h4>
                      </div>
                      <ul>
                        {otherCauses.map((c) => (
                          <li key={c.id}>
                            <Link href={`/project-details/${c.slug}`}>
                              {c.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Widget */}
                  <div
                    className="sidebar-promo-widgets bg-cover text-white text-center"
                    style={{ backgroundImage: 'url("/assets/img/causes/cause1.jpg")' }}
                  >
                    <span>Join Our Mission</span>
                    <h3>Together We Can Make a Difference</h3>
                    <Link href="/contact" className="theme-btn">
                      Get In Touch
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </DanboxLayout>
  );
};

export default CausesDetailsPage;
