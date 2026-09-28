import { useParams } from "react-router-dom";
import { seoPages } from "../data/seoPages";
import { Helmet } from 'react-helmet-async';

function SEOPage() {
  const { slug } = useParams();
  const page = seoPages[slug];

  // ApexWeb Solutions theme colors
  const colors = {
    primary: "#0A2540",      // Deep navy blue (main brand color)
    secondary: "#0066FF",    // Bright blue (accent / CTA)
    accent: "#00D4AA",       // Teal/mint (highlight)
    light: "#F8FAFC",        // Very light gray (backgrounds)
    white: "#FFFFFF",
    textPrimary: "#0A2540",
    textSecondary: "#475569",
    border: "#E2E8F0",
  };

  if (!page) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: colors.light }}>
        <div className="text-center">
          <span className="text-6xl font-bold" style={{ color: colors.primary }}>404</span>
          <h1 className="mt-4 text-3xl font-bold" style={{ color: colors.textPrimary }}>
            Page Not Found
          </h1>
          <p className="mt-3" style={{ color: colors.textSecondary }}>
            The page you're looking for doesn't exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{page.metaTitle}</title>

        {/* Meta Description */}
        <meta
          name="description"
          content={page.description}
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href={page.canonical}
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={page.metaTitle}
        />

        <meta
          property="og:description"
          content={page.description}
        />

        <meta
          property="og:url"
          content={page.canonical}
        />

        <meta
          property="og:type"
          content="website"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={page.metaTitle}
        />

        <meta
          name="twitter:description"
          content={page.description}
        />
      </Helmet>

      <main className="overflow-hidden" style={{ backgroundColor: colors.white, color: colors.textPrimary }}>

        {/* ================= HERO ================= */}
        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">

          {/* Decorative background */}
          <div className="absolute top-10 right-0 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ backgroundColor: colors.secondary }} />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-10" style={{ backgroundColor: colors.accent }} />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* LEFT */}
              <div>

                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{
                    backgroundColor: `${colors.secondary}0D`,
                    border: `1px solid ${colors.secondary}33`
                  }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.accent }} />
                  <span className="text-sm font-semibold" style={{ color: colors.primary }}>
                    {page.service} • {page.location}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight" style={{ color: colors.textPrimary }}>
                  {page.h1}
                </h1>

                <p className="mt-6 text-lg lg:text-xl leading-8 max-w-xl" style={{ color: colors.textSecondary }}>
                  Professional{" "}
                  <span className="font-semibold" style={{ color: colors.secondary }}>
                    {page.service}
                  </span>{" "}
                  services in{" "}
                  <span className="font-semibold" style={{ color: colors.secondary }}>
                    {page.location}
                  </span>{" "}
                  designed to help your business grow online.
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">

                  <a
                    href="/contact"
                    className="inline-flex justify-center items-center px-7 py-4 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: colors.secondary,
                      boxShadow: `0 10px 25px -5px ${colors.secondary}40`
                    }}
                  >
                    Get Free Consultation
                    <span className="ml-2 text-lg">→</span>
                  </a>

                  <a
                    href="/services"
                    className="inline-flex justify-center items-center px-7 py-4 rounded-xl font-semibold transition-all duration-300"
                    style={{
                      border: `1px solid ${colors.border}`,
                      backgroundColor: colors.white,
                      color: colors.secondary
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = colors.secondary;
                      e.currentTarget.style.backgroundColor = `${colors.secondary}0D`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = colors.border;
                      e.currentTarget.style.backgroundColor = colors.white;
                    }}
                  >
                    Explore Services
                  </a>

                </div>

                {/* Trust points */}
                <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-sm" style={{ color: colors.textSecondary }}>
                  <span>✓ SEO-Friendly</span>
                  <span>✓ Mobile Responsive</span>
                  <span>✓ Business Focused</span>
                </div>
              </div>

              {/* RIGHT VISUAL */}
              <div className="relative">

                <div
                  className="relative rounded-[2rem] p-2 shadow-2xl"
                  style={{
                    backgroundColor: colors.primary,
                    boxShadow: `0 25px 50px -12px ${colors.primary}40`
                  }}
                >

                  <div className="rounded-[1.7rem] bg-white p-8 lg:p-10">

                    <div className="flex items-center justify-between mb-10">
                      <div>
                        <p className="text-sm" style={{ color: colors.textSecondary }}>
                          ApexWeb Solutions
                        </p>
                        <h3 className="text-xl font-bold mt-1" style={{ color: colors.textPrimary }}>
                          Digital Growth
                        </h3>
                      </div>

                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${colors.secondary}1A` }}
                      >
                        <span className="text-xl" style={{ color: colors.secondary }}>↗</span>
                      </div>
                    </div>

                    {/* Fake analytics */}
                    <div className="space-y-5">

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span style={{ color: colors.textSecondary }}>
                            Online Visibility
                          </span>
                          <span className="font-semibold" style={{ color: colors.secondary }}>
                            92%
                          </span>
                        </div>

                        <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: colors.border }}>
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: '92%',
                              backgroundColor: colors.accent
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span style={{ color: colors.textSecondary }}>
                            Website Performance
                          </span>
                          <span className="font-semibold" style={{ color: colors.secondary }}>
                            88%
                          </span>
                        </div>

                        <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: colors.border }}>
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: '88%',
                              backgroundColor: colors.secondary
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span style={{ color: colors.textSecondary }}>
                            Growth Potential
                          </span>
                          <span className="font-semibold" style={{ color: colors.secondary }}>
                            95%
                          </span>
                        </div>

                        <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: colors.border }}>
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: '95%',
                              backgroundColor: colors.accent
                            }}
                          />
                        </div>
                      </div>

                    </div>

                    {/* Bottom card */}
                    <div
                      className="mt-10 p-5 rounded-2xl"
                      style={{
                        backgroundColor: colors.light,
                        border: `1px solid ${colors.border}`
                      }}
                    >
                      <p className="text-sm" style={{ color: colors.textSecondary }}>
                        Helping businesses
                      </p>
                      <div className="flex items-end justify-between mt-1">
                        <h4 className="text-2xl font-bold" style={{ color: colors.primary }}>
                          Grow Digitally
                        </h4>

                        <span className="text-xl" style={{ color: colors.accent }}>
                          ✦
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Floating card */}
                <div
                  className="absolute -bottom-6 -left-4 sm:-left-8 rounded-2xl shadow-xl px-5 py-4"
                  style={{
                    backgroundColor: colors.white,
                    border: `1px solid ${colors.border}`,
                    boxShadow: `0 20px 25px -5px ${colors.primary}1A`
                  }}
                >
                  <p className="text-xs" style={{ color: colors.textSecondary }}>
                    Local Expertise
                  </p>
                  <p className="font-bold mt-1" style={{ color: colors.primary }}>
                    {page.location}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ================= INTRO ================= */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: colors.light }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl">
              <span
                className="text-sm font-bold uppercase tracking-[0.2em]"
                style={{ color: colors.accent }}
              >
                Why ApexWeb
              </span>

              <h2
                className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: colors.textPrimary }}
              >
                Build a stronger digital presence for your business
              </h2>

              <p className="mt-6 text-lg leading-8" style={{ color: colors.textSecondary }}>
                At ApexWeb Solutions, we combine strategy, design, technology
                and digital marketing to create solutions that are focused on
                real business growth.
              </p>
            </div>


            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-14">

              {[
                {
                  number: "01",
                  title: "Business Focused",
                  text: "Every solution is planned around your business goals, audience and market."
                },
                {
                  number: "02",
                  title: "SEO Ready",
                  text: "Our websites and digital solutions are structured with search visibility in mind."
                },
                {
                  number: "03",
                  title: "Local Expertise",
                  text: `Get professional ${page.service} support tailored for businesses in ${page.location}.`
                }
              ].map((item) => (
                <div
                  key={item.number}
                  className="group rounded-2xl p-7 transition-all duration-300"
                  style={{
                    backgroundColor: colors.white,
                    border: `1px solid ${colors.border}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.secondary;
                    e.currentTarget.style.boxShadow = `0 20px 25px -5px ${colors.primary}1A`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span className="text-sm font-bold" style={{ color: colors.accent }}>
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold" style={{ color: colors.textPrimary }}>
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7" style={{ color: colors.textSecondary }}>
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= PROCESS ================= */}
        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto">
              <span
                className="text-sm font-bold uppercase tracking-[0.2em]"
                style={{ color: colors.accent }}
              >
                Our Process
              </span>

              <h2
                className="mt-4 text-3xl sm:text-4xl font-bold"
                style={{ color: colors.textPrimary }}
              >
                A simple process. Better results.
              </h2>

              <p className="mt-4" style={{ color: colors.textSecondary }}>
                From understanding your requirements to delivering the final
                solution, we keep the process transparent and focused.
              </p>
            </div>


            <div className="grid md:grid-cols-4 gap-6 mt-14">

              {[
                ["01", "Understand", "We understand your business, goals and target audience."],
                ["02", "Plan", "We create a strategy tailored to your requirements."],
                ["03", "Build", "Our team develops and optimizes your digital solution."],
                ["04", "Grow", "We help you improve visibility and generate better opportunities."]
              ].map(([number, title, text]) => (
                <div key={number} className="relative">

                  <div
                    className="text-5xl font-bold"
                    style={{ color: `${colors.primary}1A` }}
                  >
                    {number}
                  </div>

                  <h3 className="mt-2 text-xl font-bold" style={{ color: colors.textPrimary }}>
                    {title}
                  </h3>

                  <p className="mt-3 leading-7" style={{ color: colors.textSecondary }}>
                    {text}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= FAQ ================= */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: colors.light }}>
          <div className="max-w-4xl mx-auto px-6">

            <div className="text-center">
              <span
                className="text-sm font-bold uppercase tracking-[0.2em]"
                style={{ color: colors.accent }}
              >
                FAQ
              </span>

              <h2
                className="mt-4 text-3xl sm:text-4xl font-bold"
                style={{ color: colors.textPrimary }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-12 space-y-4">

              {[
                {
                  q: `Why choose ApexWeb Solutions for ${page.service}?`,
                  a: `ApexWeb Solutions provides professional ${page.service} services with a focus on quality, performance, SEO and business growth.`
                },
                {
                  q: `Do you provide ${page.service} services in ${page.location}?`,
                  a: `Yes. We provide ${page.service} solutions for businesses and professionals looking to grow their online presence in ${page.location}.`
                },
                {
                  q: "Can I discuss my project before starting?",
                  a: "Yes. You can contact us to discuss your requirements, goals and project scope before getting started."
                }
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl p-6 cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: colors.white,
                    border: `1px solid ${colors.border}`
                  }}
                >
                  <summary className="flex items-center justify-between font-semibold list-none" style={{ color: colors.textPrimary }}>
                    {faq.q}

                    <span
                      className="ml-4 text-xl group-open:rotate-45 transition-transform"
                      style={{ color: colors.secondary }}
                    >
                      +
                    </span>
                  </summary>

                  <p className="mt-4 leading-7 pr-8" style={{ color: colors.textSecondary }}>
                    {faq.a}
                  </p>
                </details>
              ))}

            </div>
          </div>
        </section>


        {/* ================= CTA ================= */}
        <section className="py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-6">

            <div
              className="relative overflow-hidden rounded-[2rem] px-7 py-14 sm:px-12 lg:px-16"
              style={{ backgroundColor: colors.primary }}
            >

              {/* Decorative circles */}
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-white/10" />
              <div className="absolute -right-10 -bottom-32 w-72 h-72 rounded-full border border-white/10" />

              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

                <div className="max-w-2xl">
                  <span className="text-sm font-semibold" style={{ color: colors.accent }}>
                    LET'S WORK TOGETHER
                  </span>

                  <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Ready to grow your business online?
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-white/70">
                    Let's discuss your requirements and create the right
                    digital solution for your business.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="shrink-0 inline-flex items-center justify-center px-7 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: colors.white,
                    color: colors.primary
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.light;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.white;
                  }}
                >
                  Start Your Project
                  <span className="ml-2">→</span>
                </a>

              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}

export default SEOPage;