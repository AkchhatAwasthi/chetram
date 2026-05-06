import type { Metadata } from "next";
import Link from "next/link";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Restaurant in Ashiana Lucknow | Chetram",
  description:
    "Chetram is Ashiana's favourite restaurant in Lucknow. Authentic North Indian street food — open from 7:30 AM daily. Pocket-friendly, eco-friendly & always fresh.",
  keywords: [
    "restaurant in ashiana lucknow",
    "best restaurant ashiana lucknow",
    "breakfast ashiana lucknow",
    "best breakfast ashiana lucknow",
    "north indian restaurant ashiana",
    "street food ashiana lucknow",
    "best restaurant near ashiana sector k",
    "north indian food ashiana lucknow",
    "breakfast place ashiana lucknow",
    "chetram ashiana",
  ],
  alternates: {
    canonical: "https://chetrampindichole.com/restaurant-in-ashiana-lucknow",
  },
  openGraph: {
    title: "Restaurant in Ashiana Lucknow | Chetram — Breakfast to Dinner",
    description:
      "Chetram is Ashiana's go-to North Indian restaurant — open 7:30 AM to 11 PM daily. Chur Chur Naan, Pindi Chole Bhature, Dal Makhani & more. Walk in anytime!",
    url: "https://chetrampindichole.com/restaurant-in-ashiana-lucknow",
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
      name: "Which is the best restaurant in Ashiana, Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chetram is widely regarded as the best restaurant in Ashiana, Lucknow. Located on Quila Road, Sector K, near Power House Chauraha, Chetram serves authentic Delhi-style North Indian street food — Chur Chur Naan, Pindi Chole Bhature, Dal Makhani, Shahi Paneer and more — seven days a week from 7:30 AM to 11:00 PM.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a good restaurant near Ashiana Sector K, Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Chetram is right in the heart of Sector K, Ashiana — on Quila Road, opposite Ashiana Kotwali, near Power House Chauraha. It's the closest authentic North Indian restaurant for Sector K, Sector J, and the broader Ashiana neighbourhood. No long commutes, no delivery waits — just walk in.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find a good breakfast place in Ashiana, Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chetram opens at 7:30 AM every day, making it one of the very few proper breakfast places in Ashiana, Lucknow. Start your morning with a hot plate of Pindi Chole Bhature, flaky Lachha Paratha, or a piping-hot bowl of Dal Makhani. It's a breakfast worth waking up early for.",
      },
    },
    {
      "@type": "Question",
      name: "Does Chetram serve authentic North Indian food in Ashiana, Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Chetram was founded in 2022 specifically to bring authentic Delhi-style North Indian food to Ashiana, Lucknow. Every dish — from the slow-cooked Pindi Chole to the tandoor-fired Chur Chur Naan — follows original recipes with fresh ingredients, served on eco-friendly CHUK compostable plates.",
      },
    },
  ],
};

// ─── Schema: WebPage ──────────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Restaurant in Ashiana Lucknow | Chetram",
  description:
    "Chetram is the best restaurant in Ashiana, Lucknow — serving authentic North Indian street food from 7:30 AM to 11 PM, every day.",
  url: "https://chetrampindichole.com/restaurant-in-ashiana-lucknow",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://chetrampindichole.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Restaurant in Ashiana Lucknow",
        item: "https://chetrampindichole.com/restaurant-in-ashiana-lucknow",
      },
    ],
  },
};

// ─── Page Component ───────────────────────────────────────────────────────────
export default function RestaurantInAshianaLucknowPage() {
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
              Your Neighbourhood's Favourite Table
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-6 leading-tight">
              Ashiana's Favourite Restaurant in Lucknow
            </h1>
            <div className="h-1 w-24 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
              If you live in Ashiana, you already know how hard it is to find a
              restaurant that feels truly <em>yours</em> — somewhere with great
              food, honest prices, and a vibe that doesn't need a dress code.
              That's exactly why <strong>Chetram</strong> exists. Since 2022,
              we've been the go-to{" "}
              <strong>restaurant in Ashiana, Lucknow</strong> for anyone craving
              real, authentic Delhi-style North Indian food — from a hearty
              breakfast at 7:30 in the morning to a satisfying dinner at 11 at
              night.
            </p>
          </div>

          {/* ── Main Content Card ─────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-accent/20 mb-12">

            {/* Hero Image */}
            <div className="mb-10 overflow-hidden rounded-xl h-64 md:h-[500px] relative">
              <img
                src="/images/seo/mix-chur-chur.jpg"
                alt="Chetram restaurant in Ashiana Lucknow — serving authentic North Indian Chur Chur Naan, Pindi Chole Bhature and more"
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
                Ashiana is one of Lucknow's most loved residential pockets — and
                it deserves a restaurant that actually matches its warmth. At
                Chetram, we don't think of ourselves as just another eatery on
                Quila Road. We think of ourselves as part of the neighbourhood.
                Our regulars are the aunties who come for breakfast before their
                morning walk, the families that make Sunday lunch a ritual here,
                and the office-goers who swing by on their way home. We know
                many of you by name, and we hope to know more.
              </p>
              <p className="text-text-muted leading-relaxed text-lg">
                As the most trusted <strong>North Indian restaurant in Ashiana</strong>, 
                we've built our reputation on one simple promise: every plate 
                tastes exactly the way it should. No cutting corners, no 
                reheated leftovers, no plastic waste. Just fresh, honest,
                incredibly delicious food — served with a smile.
              </p>
            </div>

            {/* ── Section 2: A Taste of Delhi ──────────────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-5">
              A Taste of Delhi in the Heart of Ashiana
            </h2>
            <div className="text-text-muted leading-relaxed space-y-4 mb-10">
              <p>
                Lucknow has its own magnificent culinary identity — the kebabs,
                the biryanis, the halwas. But there's a whole other world of
                North Indian street food that Lucknow doesn't always get to
                experience at its best: the bold, spiced, unapologetically
                robust flavours of Delhi.
              </p>
              <p>
                That's the gap Chetram was built to fill. Our founder grew up
                eating this food in Delhi — the slow-cooked{" "}
                <strong>Pindi Chole</strong> that stains the pot dark with
                whole-spice masala, the Chur Chur Naan pulled out of a clay
                tandoor and crushed by hand until the layers shatter, the{" "}
                <strong>Dal Makhani</strong> that's been simmering since the
                night before. When he moved to Lucknow, he couldn't find it
                done right. So he started making it himself — and Chetram was
                born.
              </p>
              <p>
                Today, <strong>Chetram is the street food ashiana lucknow</strong>{" "}
                residents reach for when they want that thick, deeply spiced,
                finger-licking-good experience. All the authenticity of a Delhi
                dhaba, right here in your neighbourhood.
              </p>
            </div>

            {/* ── Section 3: Breakfast, Lunch & Dinner ────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-5">
              Perfect for Breakfast, Lunch & Dinner
            </h2>
            <div className="text-text-muted leading-relaxed space-y-4 mb-6">
              <p>
                One thing that genuinely sets Chetram apart from almost every
                other <strong>restaurant in Ashiana, Lucknow</strong> is our
                opening time. We open at <strong>7:30 AM</strong> — every
                single day.
              </p>
              <p>
                Finding a proper, hot, freshly-cooked{" "}
                <strong>breakfast in Ashiana, Lucknow</strong> that isn't just
                tea and biscuits or a roadside vada pao is harder than it
                should be. Chetram fixes that. Start your morning with a
                steaming plate of <strong>Pindi Chole Bhature</strong> — the
                kind that keeps you full and energised through a long morning.
                Or a soft, flaky <strong>Lachha Paratha</strong> with creamy
                Dal Makhani. Or even a Chur Chur Naan so satisfying, you'll
                rethink every breakfast you've ever had.
              </p>
              <p>
                And we don't just disappear after the breakfast rush. Chetram
                stays open until <strong>11:00 PM</strong>, seven days a week —
                so whether it's a quick weekday lunch, a lazy Sunday family
                dinner, or a late-night craving after a long day, we're here.
                No need to wonder "is there a good{" "}
                <strong>best restaurant ashiana lucknow</strong> that's still
                open?" — the answer is always yes.
              </p>
            </div>

            {/* Timings highlight strip */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
              <div>
                <p className="text-xs uppercase font-bold text-primary tracking-widest mb-1">Opens</p>
                <p className="text-3xl font-extrabold text-text-dark">7:30 AM</p>
              </div>
              <div className="text-3xl text-accent font-light hidden sm:block">—</div>
              <div>
                <p className="text-xs uppercase font-bold text-primary tracking-widest mb-1">Closes</p>
                <p className="text-3xl font-extrabold text-text-dark">11:00 PM</p>
              </div>
              <div className="text-3xl text-accent font-light hidden sm:block">—</div>
              <div>
                <p className="text-xs uppercase font-bold text-primary tracking-widest mb-1">Open</p>
                <p className="text-3xl font-extrabold text-text-dark">All 7 Days</p>
              </div>
            </div>

            {/* ── Section 4: Menu Highlights ───────────────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-5">
              Our Menu Highlights
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              Every dish on our menu has been chosen carefully — not to impress
              with length, but to deliver depth. Here's what our regulars come
              back for, again and again:
            </p>

            <div className="space-y-5 mb-10">
              {[
                {
                  name: "Chur Chur Naan",
                  emoji: "🫓",
                  desc: "Our showstopper. Flaky, layered flatbread fired in a clay tandoor and crushed by hand the moment it comes out — releasing aromatic steam and soaking up a generous dollop of white butter. Stuffed with spiced aloo, paneer, gobhi, or all three. It's the kind of bread that makes a meal feel like an event.",
                },
                {
                  name: "Pindi Chole Bhature",
                  emoji: "🍛",
                  desc: "The original Delhi recipe — slow-cooked chickpeas in a whole-spice masala that turns deep and dark and intensely flavourful overnight. Paired with golden, puffed bhature that are light and non-greasy. Perfect for breakfast or lunch, and one of the most requested dishes from our Ashiana regulars.",
                },
                {
                  name: "Dal Makhani",
                  emoji: "🫕",
                  desc: "Simmered for 12 hours overnight on a slow flame until the black lentils break down into a silky, buttery, deeply comforting gravy. No shortcuts. No powder shortcuts. This is the real thing — the kind that makes you mop the bowl clean with bread.",
                },
                {
                  name: "Shahi Paneer",
                  emoji: "🧀",
                  desc: "A mild, royal-style gravy made with tomatoes, cream, and a blend of warming spices — rich without being heavy. The paneer is soft, fresh, and generously portioned. It pairs beautifully with our Lachha Paratha or a plate of steamed rice on the side.",
                },
                {
                  name: "Lachha Paratha",
                  emoji: "🥙",
                  desc: "Layered, whole-wheat flatbread cooked on the tawa with a drizzle of ghee. Crispy at the edges, soft in the middle — the perfect everyday bread that works with everything on our menu. Simple, honest, and absolutely satisfying.",
                },
              ].map((dish) => (
                <div
                  key={dish.name}
                  className="flex gap-4 items-start bg-neutral-cream border border-accent/20 rounded-xl p-6"
                >
                  <span className="text-4xl mt-0.5 shrink-0">{dish.emoji}</span>
                  <div>
                    <h3 className="font-bold text-text-dark text-xl mb-1">
                      {dish.name}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {dish.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── What Makes Us Different Strip ────────────────────────────── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { icon: "🌿", label: "Zero Plastic", sub: "CHUK compostable plates" },
                { icon: "💰", label: "Pocket-Friendly", sub: "Great food, honest prices" },
                { icon: "🕖", label: "Open 7 Days", sub: "7:30 AM – 11:00 PM" },
                { icon: "📍", label: "Sector K, Ashiana", sub: "Easy to find, close to home" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center bg-background border border-accent/15 rounded-xl p-4"
                >
                  <span className="text-3xl block mb-2">{item.icon}</span>
                  <p className="font-bold text-text-dark text-sm">{item.label}</p>
                  <p className="text-text-muted text-xs mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Secondary Image */}
            <div className="my-10 overflow-hidden rounded-xl h-48 md:h-96 relative">
              <img
                src="/images/seo/chole-bhature-main.jpg"
                alt="Authentic North Indian breakfast at Chetram Ashiana Lucknow — Pindi Chole Bhature served fresh every morning from 7:30 AM"
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ── Section 5: Visit Us ──────────────────────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-5">
              Visit Us
            </h2>
            <div className="bg-neutral-cream border-l-4 border-primary rounded-xl p-6 mb-10">
              <ul className="space-y-4 text-text-dark text-base">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5 shrink-0">📍</span>
                  <span>
                    <strong>Address:</strong> Quila Road, Near Power House
                    Chauraha, Opposite Ashiana Kotwali, Sector K, Ashiana,
                    Lucknow — 226012
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5 shrink-0">🕖</span>
                  <span>
                    <strong>Timings:</strong> 7:30 AM – 11:00 PM, All Days
                    (Monday to Sunday, including holidays)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5 shrink-0">📞</span>
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
                  <span className="text-primary text-xl mt-0.5 shrink-0">🌐</span>
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

            {/* ── Section 6: FAQ ───────────────────────────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5 mb-12">
              {[
                {
                  q: "Which is the best restaurant in Ashiana, Lucknow?",
                  a: "Chetram is consistently rated as the best restaurant in Ashiana, Lucknow by locals. On Quila Road, Sector K, near Power House Chauraha, we serve authentic North Indian street food — Chur Chur Naan, Pindi Chole Bhature, Dal Makhani, Shahi Paneer and more — from 7:30 AM to 11:00 PM, every day of the week.",
                },
                {
                  q: "Is there a restaurant near Ashiana Sector K, Lucknow?",
                  a: "Chetram is right in your neighbourhood — Sector K, Ashiana, opposite Ashiana Kotwali on Quila Road. Whether you're in Sector J, Sector K, or anywhere in the broader Ashiana area, we're just a short walk or ride away. No need for a long drive or a delivery wait.",
                },
                {
                  q: "Where can I have a good breakfast in Ashiana, Lucknow?",
                  a: "Chetram opens at 7:30 AM daily, making us one of the very few dedicated breakfast places in Ashiana, Lucknow. Come in for a hot plate of Pindi Chole Bhature, a buttery Lachha Paratha with Dal Makhani, or a full Chur Chur Naan — the kind of breakfast that actually keeps you going all morning.",
                },
                {
                  q: "Does Chetram serve authentic North Indian food in Ashiana, Lucknow?",
                  a: "Yes — that's exactly what we were built for. Every dish at Chetram follows original recipes: slow-cooked chole, tandoor-fired naan, 12-hour Dal Makhani. We use fresh ingredients every day, serve on eco-friendly CHUK compostable plates, and keep prices honest. Real North Indian food ashiana lucknow — nothing less.",
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
                Your Neighbourhood Restaurant is Waiting
              </h3>
              <p className="text-text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you're stopping in for a quick breakfast before work, a
                long lazy Sunday lunch with the family, or a late dinner after a
                tiring day — Chetram is open, ready, and always cooking fresh.
                We're not just a restaurant in Ashiana, Lucknow; we're a little
                piece of Delhi's soul, right in your backyard. Come hungry. Leave
                happy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/menu"
                  className="inline-block px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all shadow-md hover:shadow-xl text-lg hover:-translate-y-1"
                >
                  See Our Full Menu
                </Link>
                <a
                  href="tel:+917054352288"
                  className="inline-block px-10 py-4 border-2 border-primary text-primary rounded-full font-bold transition-all hover:bg-primary hover:text-white text-lg hover:-translate-y-1"
                >
                  Call: +91 70543 52288
                </a>
              </div>
            </div>
          </div>

          {/* ── Direction CTA ──────────────────────────────────────────────── */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-md border border-accent/10">
            <h2 className="text-2xl font-bold text-text-dark mb-3">
              Find Chetram in Ashiana, Lucknow
            </h2>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto text-lg">
              Quila Road, Sector K — opposite Ashiana Kotwali, near Power House
              Chauraha. Open every day, all week. See you soon.
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
