import type { Metadata } from "next";
import Link from "next/link";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Pindi Chole Bhature in Lucknow | Chetram",
  description:
    "Craving authentic Pindi Chole Bhature in Lucknow? Chetram in Ashiana serves Delhi-style chole bhature made from an original recipe — fresh, flavorful & pocket-friendly. Open 7:30 AM–11 PM daily.",
  keywords: [
    "pindi chole bhature lucknow",
    "delhi style chole bhature lucknow",
    "chole bhature ashiana lucknow",
    "best chole bhature in lucknow",
    "chole bhature near me lucknow",
    "best chole bhature in ashiana",
    "authentic pindi chole lucknow",
    "chetram chole bhature",
  ],
  alternates: {
    canonical: "https://chetrampindichole.com/pindi-chole-bhature-lucknow",
  },
  openGraph: {
    title: "Pindi Chole Bhature in Lucknow | Chetram – Delhi Style, Ashiana",
    description:
      "Authentic Delhi-style Pindi Chole Bhature at Chetram, Ashiana, Lucknow. Fresh ingredients, CHUK eco-plates, open 7:30 AM–11 PM every day.",
    url: "https://chetrampindichole.com/pindi-chole-bhature-lucknow",
    type: "website",
  },
};

// ─── Schema: FAQPage ──────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where can I find the best Pindi Chole Bhature in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chetram in Ashiana, Lucknow is the go-to spot for authentic Pindi Chole Bhature in Lucknow. Located on Quila Road, Sector K, near Power House Chauraha, Chetram follows the original Delhi recipe — slow-cooked chole, fluffy bhature, served fresh every day from 7:30 AM to 11 PM.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Chetram's Chole Bhature 'Delhi style'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chetram's Delhi style chole bhature in Lucknow is made using the authentic Pindi method — whole spices dry-roasted without a heavy tomato-onion base, slow-cooked to a deep, dark, robust gravy. The bhature are fermented overnight and fried at the right temperature to keep them light and non-greasy, exactly the way you'd find them in Old Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "Is there good Chole Bhature near me in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're looking for chole bhature near me in Lucknow — especially in the Ashiana, Sector K, or Kanpur Road area — Chetram is your closest bet for a truly authentic plate. We're open 7 days a week, 7:30 AM to 11:00 PM. No reservations needed, just walk in!",
      },
    },
    {
      "@type": "Question",
      name: "What is the best Chole Bhature in Ashiana, Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Locals consistently vote Chetram as the best Chole Bhature in Ashiana. Since 2022, Chetram has been serving the Ashiana neighbourhood with original Delhi-recipe Pindi Chole Bhature — pocket-friendly, freshly made, and served on eco-friendly CHUK compostable plates for a guilt-free, delicious experience.",
      },
    },
  ],
};

// ─── Schema: WebPage ──────────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Pindi Chole Bhature in Lucknow | Chetram",
  description:
    "Authentic Delhi-style Pindi Chole Bhature served at Chetram, Ashiana, Lucknow. Original recipe, fresh ingredients, eco-friendly serving.",
  url: "https://chetrampindichole.com/pindi-chole-bhature-lucknow",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://chetrampindichole.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pindi Chole Bhature Lucknow",
        item: "https://chetrampindichole.com/pindi-chole-bhature-lucknow",
      },
    ],
  },
};

// ─── Page Component ───────────────────────────────────────────────────────────
export default function PindiCholeBhatureLucknowPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="pt-32 pb-20 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">

          {/* ── Hero Block ────────────────────────────────────────────────── */}
          <div className="mb-10 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Straight from the Streets of Delhi to Ashiana
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-6 leading-tight">
              Authentic Pindi Chole Bhature in Lucknow
            </h1>
            <div className="h-1 w-24 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
              There's a kind of joy that only a steaming plate of{" "}
              <strong>Pindi Chole Bhature</strong> can bring — and if you've
              been hunting for that real, honest, capital-city flavour right
              here in Lucknow, your search ends at{" "}
              <strong>Chetram</strong>, nestled in the heart of{" "}
              <strong>Ashiana, Lucknow</strong>. Since 2022, we've been serving
              the kind of{" "}
              <strong>Delhi-style Chole Bhature in Lucknow</strong> that makes
              you close your eyes and forget you're not in Chandni Chowk.
            </p>
          </div>

          {/* ── Main Content Card ─────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-accent/20 mb-12">

            {/* Hero Image */}
            <div className="mb-10 overflow-hidden rounded-xl h-64 md:h-[500px] relative">
              <img
                src="/images/seo/chole-bhature-main.jpg"
                alt="Authentic Pindi Chole Bhature served at Chetram, Ashiana Lucknow — dark, spicy chole with golden, puffed bhature"
                loading="eager"
                decoding="sync"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ── Section 1: Introduction ──────────────────────────────────── */}
            <div className="mb-10">
              <p className="text-text-muted leading-relaxed text-lg mb-4">
                Lucknow is a city of incredible food — but when it comes to the
                bold, punchy, unapologetically robust world of{" "}
                <strong>Pindi Chole Bhature</strong>, it's a flavour most
                restaurants in the city have never quite cracked. Chetram was
                born precisely to fill that gap. We brought an original Delhi
                recipe to <strong>Ashiana, Lucknow</strong>, and we cook it
                exactly the way it's meant to be — no shortcuts, no compromises.
              </p>
              <p className="text-text-muted leading-relaxed text-lg">
                Whether you're a Lucknowi local who's always wanted to taste the
                real deal, a North Indian transplant missing home, or simply
                someone who takes their breakfast seriously — Chetram's{" "}
                <strong>chole bhature in Ashiana, Lucknow</strong> will feel like
                a warm hug on a plate.
              </p>
            </div>

            {/* ── Section 2: What Makes Pindi Chole Different ─────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-5">
              What Makes Pindi Chole Bhature Different?
            </h2>
            <div className="text-text-muted leading-relaxed space-y-4 mb-10">
              <p>
                The word <em>Pindi</em> is shorthand for Rawalpindi — a city in
                pre-partition Punjab that gave birth to one of the most
                distinctive chickpea preparations in all of South Asian cuisine.
                Most chole curries you'll encounter across India lean on a
                red-orange tomato-onion base. Pindi Chole does something
                completely different.
              </p>
              <p>
                It begins with <strong>whole, dry-roasted spices</strong> —
                black cardamom, anardana (dried pomegranate seeds), cloves,
                black pepper, and roasted cumin — ground fresh and added to
                slow-simmering chickpeas along with dried amla or tea leaves.
                This is what gives authentic Pindi Chole its signature
                <strong> deep mahogany color</strong>, its tangy undertone, and
                its thick, clinging, almost smoky consistency. There is no
                bright red or turmeric yellow here — just the natural,
                beautiful darkness of time and spice.
              </p>
              <p>
                The bhature are their own art form. The dough — made from maida,
                a touch of semolina, and natural leavening — is fermented
                overnight. When it meets hot oil, it balloons into a golden,
                crisp-on-the-outside, cloud-soft-on-the-inside puff that feels
                almost weightless. Get the temperature wrong, and you get a
                greasy, dense disc. Get it right — the way we do — and it's
                practically floating.
              </p>
              <p>
                Together, they form one of India's most iconic pairings: the
                sharp, intense, spiced heat of the chole against the mild,
                pillowy canvas of the bhatura. Add a ring of sharp raw onion, a
                sliver of fiery green chilli, and a dab of tangy pickle — and
                you have a plate that's been winning hearts since before
                Partition.
              </p>
            </div>

            {/* ── Section 3: Why Chetram Stands Out ───────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-5">
              Why Chetram's Pindi Chole Bhature Stands Out in Lucknow
            </h2>
            <div className="text-text-muted leading-relaxed space-y-4 mb-8">
              <p>
                There are plenty of places serving chole bhature across Lucknow,
                but very few are cooking the{" "}
                <strong>authentic Delhi-style Pindi Chole Bhature in Lucknow</strong>{" "}
                that we specialise in. Here's what makes Chetram genuinely
                different:
              </p>
            </div>

            {/* USP Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  icon: "🍋",
                  title: "The Original Delhi Recipe",
                  body: "Our recipe hasn't been adapted for a milder palate or a shorter cooking time. It's the same recipe — slow-cooked overnight, whole-spice masala, no shortcuts — that you'd find in the iconic lanes of Old Delhi.",
                },
                {
                  icon: "🌿",
                  title: "Fresh Ingredients, Every Single Day",
                  body: "We prep fresh every morning. The chickpeas are soaked overnight and slow-cooked from scratch. The bhature dough is made fresh. Nothing sits in a pot from yesterday.",
                },
                {
                  icon: "🌱",
                  title: "Eco-Friendly & Zero Plastic",
                  body: "We serve on CHUK compostable plates — 100% natural, no plastic, no guilt. You enjoy great food; the planet takes a little less damage. It's a small decision that means a lot to us.",
                },
                {
                  icon: "💰",
                  title: "Genuinely Pocket-Friendly",
                  body: "Quality food shouldn't be a luxury. At Chetram, you get a full, satisfying plate of authentic Pindi Chole Bhature without it burning a hole in your pocket. Because good food should be for everyone.",
                },
                {
                  icon: "🕖",
                  title: "Open Early, Open Late",
                  body: "Craving chole bhature for breakfast? Or a late-night meal after work? We're open from 7:30 AM to 11:00 PM, seven days a week. Your craving has no excuse.",
                },
                {
                  icon: "📍",
                  title: "A Real Neighbourhood Restaurant",
                  body: "Established in 2022, Chetram was built for Ashiana. We know our regulars by name. We're not a chain — we're your neighbour who happens to make incredible food.",
                },
              ].map((usp) => (
                <div
                  key={usp.title}
                  className="bg-neutral-cream border border-accent/20 rounded-xl p-6 flex gap-4 items-start"
                >
                  <span className="text-3xl mt-0.5">{usp.icon}</span>
                  <div>
                    <h3 className="font-bold text-text-dark text-lg mb-1">
                      {usp.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {usp.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary Image */}
            <div className="my-10 overflow-hidden rounded-xl h-48 md:h-96 relative">
              <img
                src="/images/seo/mix-chur-chur.jpg"
                alt="Chetram's authentic North Indian spread — Pindi Chole Bhature, Chur Chur Naan and more in Ashiana, Lucknow"
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ── Section 4: Visit Us ──────────────────────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-5">
              Visit Us
            </h2>
            <div className="bg-neutral-cream border-l-4 border-primary rounded-xl p-6 mb-10">
              <ul className="space-y-4 text-text-dark text-base">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">📍</span>
                  <span>
                    <strong>Address:</strong> Quila Road, Near Power House
                    Chauraha, Opposite Ashiana Kotwali, Sector K, Ashiana,
                    Lucknow — 226012
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">🕖</span>
                  <span>
                    <strong>Timings:</strong> 7:30 AM – 11:00 PM, All Days
                    (Monday to Sunday)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">📞</span>
                  <span>
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:+917054352288"
                      className="text-primary font-semibold hover:underline"
                    >
                      +91 70543 52288
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">🌐</span>
                  <span>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://chetrampindichole.com"
                      className="text-primary font-semibold hover:underline"
                    >
                      chetrampindichole.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            {/* ── Section 5: FAQ ───────────────────────────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 mb-12">
              {[
                {
                  q: "Where can I find the best Pindi Chole Bhature in Lucknow?",
                  a: "Chetram in Ashiana is widely regarded as the best spot for Pindi Chole Bhature in Lucknow. On Quila Road, Sector K, near Power House Chauraha — we follow the original Delhi recipe, cook fresh daily, and are open 7:30 AM to 11 PM every single day.",
                },
                {
                  q: "What makes Chetram's Chole Bhature 'Delhi style'?",
                  a: "Our Delhi style chole bhature in Lucknow uses the authentic Pindi method — whole dry-roasted spices, slow overnight cooking, no heavy tomato base, no shortcuts. The bhature dough is fermented overnight and fried to golden perfection. It's the same plate you'd get in the lanes of Chandni Chowk, just in Ashiana.",
                },
                {
                  q: "I'm searching for Chole Bhature near me in Lucknow — are you close?",
                  a: "If you're in or around Ashiana, Sector K, Kanpur Road, or nearby Lucknow neighbourhoods, Chetram is your closest authentic option. We're open all week, no reservations needed — just drop in and we'll take care of the rest.",
                },
                {
                  q: "Is Chetram really the best Chole Bhature in Ashiana, Lucknow?",
                  a: "We'll let the plate speak for itself — but our regulars, food bloggers, and thousands of happy customers since 2022 seem to think so. Come in any morning, watch us cook from scratch, and taste the difference that a real recipe and fresh ingredients make.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="border border-accent/20 rounded-xl p-6 bg-white"
                >
                  <h3 className="font-bold text-text-dark text-lg mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Closing CTA ──────────────────────────────────────────────── */}
            <div className="text-center border-y border-gray-200 py-10">
              <h3 className="text-2xl font-bold text-text-dark mb-3">
                Ready for the Best Plate of Chole Bhature in Lucknow?
              </h3>
              <p className="text-text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                Life's too short for mediocre chole bhature. The real thing —
                dark, spiced, slow-cooked, fresh — is waiting for you at
                Chetram in Ashiana. Swing by any day between 7:30 AM and 11:00
                PM. No reservation needed, no dress code, just an appetite.
                We'll handle the rest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/menu"
                  className="inline-block px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all shadow-md hover:shadow-xl text-lg hover:-translate-y-1"
                >
                  Explore Our Menu
                </Link>
                <a
                  href="tel:+917054352288"
                  className="inline-block px-10 py-4 border-2 border-primary text-primary rounded-full font-bold transition-all hover:bg-primary hover:text-white text-lg hover:-translate-y-1"
                >
                  Call Us: +91 70543 52288
                </a>
              </div>
            </div>
          </div>

          {/* ── Direction CTA ──────────────────────────────────────────────── */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-md border border-accent/10">
            <h2 className="text-2xl font-bold text-text-dark mb-3">
              Find Us in Ashiana, Lucknow
            </h2>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto text-lg">
              Sector K, Quila Road — right opposite Ashiana Kotwali, near Power
              House Chauraha. Easy to find, impossible to forget.
            </p>
            <Link
              href="/contact"
              className="text-primary font-bold hover:underline text-xl inline-flex items-center gap-2"
            >
              Get Directions to Chetram &rarr;
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
