import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Rajma Chawal in Lucknow | Chetram Pindi Chole",
  description:
    "Craving the best rajma chawal in Lucknow? Visit Chetram Pindi Chole in Ashiana for rich, slow-cooked rajma with steamed rice. A hearty North Indian comfort meal you'll love.",
  keywords: [
    "best rajma chawal in Lucknow",
    "rajma chawal in Lucknow",
    "rajma chawal combo in Lucknow",
    "dhaba style rajma chawal Lucknow",
    "creamy rajma chawal",
    "Chetram Pindi Chole rajma",
    "rajma rice Lucknow",
    "rajma chawal Ashiana Lucknow",
  ],
  alternates: {
    canonical: "https://chetrampindichole.com/best-rajma-chawal-in-lucknow",
  },
  openGraph: {
    title: "Best Rajma Chawal in Lucknow | Chetram Pindi Chole",
    description:
      "Rich, slow-cooked rajma paired with steamed rice — the most beloved rajma chawal combo in Lucknow, served fresh at Chetram Pindi Chole.",
    url: "https://chetrampindichole.com/best-rajma-chawal-in-lucknow",
    siteName: "Chetram Pindi Chole",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dmj0smemf/image/upload/v1780513363/wvfbl9wwfnlo3alm0jkj_h5leee.webp",
        width: 1200,
        height: 800,
        alt: "best rajma chawal in Lucknow at Chetram Pindi Chole",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Rajma Chawal in Lucknow | Chetram Pindi Chole",
    description:
      "Slow-cooked, creamy rajma paired with steamed rice — Lucknow's favourite rajma chawal combo, served at Chetram Pindi Chole.",
    images: [
      "https://res.cloudinary.com/dmj0smemf/image/upload/v1780513363/wvfbl9wwfnlo3alm0jkj_h5leee.webp",
    ],
  },
};

// ── Schema Markup ──────────────────────────────────────────────────────────────

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://chetrampindichole.com/#rajma-chawal",
  name: "Chetram Pindi Chole",
  description:
    "Lucknow's beloved neighbourhood eatery serving the best rajma chawal in Lucknow along with authentic Pindi Chole Bhature, Chur Chur Naan, and North Indian comfort food.",
  url: "https://chetrampindichole.com/best-rajma-chawal-in-lucknow",
  telephone: "+917054352288",
  email: "chetrambhature@gmail.com",
  image:
    "https://res.cloudinary.com/dmj0smemf/image/upload/v1780513363/wvfbl9wwfnlo3alm0jkj_h5leee.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Quila Road, Near Power House Chauraha, Opposite Ashiana Kotwali, Sector K",
    addressLocality: "Ashiana, Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226012",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.7893,
    longitude: 80.9481,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:30",
      closes: "23:00",
    },
  ],
  servesCuisine: ["North Indian", "Indian", "Street Food"],
  priceRange: "₹₹",
  hasMap: "https://maps.app.goo.gl/Lw63W3ANbmRk73rY6",
  areaServed: "Lucknow, Uttar Pradesh, India",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "320",
  },
};

const menuItemSchema = {
  "@context": "https://schema.org",
  "@type": "MenuItem",
  name: "Rajma Chawal",
  description:
    "Slow-cooked, creamy red kidney beans in a rich aromatic gravy served with steamed basmati rice, onion, papad, and homemade pickle — the ultimate dhaba style rajma chawal Lucknow comfort meal.",
  offers: {
    "@type": "Offer",
    price: "120",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  nutrition: {
    "@type": "NutritionInformation",
    calories: "450 calories",
  },
  suitableForDiet: "https://schema.org/VegetarianDiet",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where can I get the best rajma chawal in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chetram Pindi Chole in Ashiana, Lucknow is widely regarded as the go-to destination for the best rajma chawal in Lucknow. Located on Quila Road, Sector K, Ashiana, the restaurant serves slow-cooked, creamy rajma with perfectly steamed basmati rice that keeps customers coming back every week.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price of rajma chawal at Chetram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Chetram Pindi Chole, a generous plate of rajma chawal is priced at approximately ₹120, making it one of the most value-for-money meals in Lucknow. The combo plate includes steamed rice, a hearty bowl of rajma, onion salad, papad, and homemade pickle.",
      },
    },
    {
      "@type": "Question",
      name: "What comes in the rajma chawal combo in Lucknow at Chetram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our signature rajma chawal combo in Lucknow includes a generous serving of slow-cooked rajma in a rich masala gravy, fluffy steamed basmati rice, crispy roasted papad, freshly sliced onion rings, and a tangy house-special pickle. It is a complete, wholesome, and deeply satisfying meal.",
      },
    },
    {
      "@type": "Question",
      name: "Is rajma chawal available for takeaway at Chetram Pindi Chole?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely! Chetram Pindi Chole offers both dine-in and takeaway options. You can walk in and carry your rajma chawal home, or enjoy the warm and welcoming ambiance of the restaurant itself. We also encourage you to visit us fresh for the best piping-hot experience.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Chetram the best place for rajma chawal in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chetram Pindi Chole stands out as the best place for rajma chawal in Lucknow because of its unwavering commitment to authentic recipes. The rajma is slow-cooked daily using hand-ground masalas, fresh kidney beans, and no shortcuts — resulting in a creamy, deeply flavourful curry that tastes just like home. Combined with perfectly steamed rice and honest pricing, it is the kind of meal Lucknow has grown to trust and love.",
      },
    },
  ],
};

// ── Page Component ─────────────────────────────────────────────────────────────

export default function BestRajmaChawalLucknow() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pt-32 pb-20 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">

          {/* ── Hero Header ─────────────────────────────────────────────── */}
          <div className="mb-10 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Lucknow's Most Loved Comfort Meal
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-6 leading-tight">
              Best Rajma Chawal in Lucknow
            </h1>
            <div className="h-1 w-24 bg-accent mx-auto mb-6 rounded-full" />
          </div>

          {/* ── Main Content Card ────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-accent/20 mb-12">

            {/* Hero Image */}
            <div className="mb-8 overflow-hidden rounded-xl h-64 md:h-[500px] relative">
              <img
                src="https://res.cloudinary.com/dmj0smemf/image/upload/v1780513363/wvfbl9wwfnlo3alm0jkj_h5leee.webp"
                alt="best rajma chawal in Lucknow at Chetram Pindi Chole"
                loading="eager"
                decoding="sync"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ── Introduction ──────────────────────────────────────────── */}
            <p className="text-lg text-text-muted leading-relaxed mb-10">
              There is something deeply comforting about a bowl of steaming hot rajma chawal — and
              in Lucknow, no one does it quite like <strong>Chetram Pindi Chole</strong>. If you
              have been searching for the most satisfying{" "}
              <strong>rajma chawal in Lucknow</strong>, your search ends right here. Whether you
              crave a quick solo lunch or a wholesome <strong>rajma chawal combo in Lucknow</strong>{" "}
              to share with the family, our kitchen has been crafting this beloved North Indian
              classic with love, patience, and the finest ingredients. Every plate tells the story
              of a tradition kept alive through slow cooking, hand-ground spices, and an honest
              passion for feeding Lucknow&apos;s hungry hearts one delicious bowl at a time.
            </p>

            {/* ── Section 1: What Makes It Special ─────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              What Makes Our Rajma Chawal Special
            </h2>
            <div className="text-text-muted mb-8 leading-relaxed space-y-4">
              <p>
                At <strong>Chetram Pindi Chole</strong>, we believe great rajma is never rushed.
                Our kidney beans are soaked overnight and slow-cooked for hours in a rich, aromatic
                masala gravy that includes hand-pounded whole spices, sun-dried tomatoes, fresh
                ginger, garlic, and a touch of ghee that gives the curry its signature depth. The
                result is an irresistibly <strong>creamy rajma chawal</strong> with every bean
                cooked to melt-in-your-mouth perfection.
              </p>
              <p>
                This is true <strong>dhaba style rajma chawal Lucknow</strong> — bold, hearty, and
                unapologetically flavourful. The rajma is ladled generously over fluffy steamed
                basmati rice that absorbs every drop of the thick, tangy gravy. To complete the
                experience, each plate is served with crispy golden papad, a mound of freshly
                sliced onion rings, and a spoonful of our house-special homemade pickle that adds
                just the right amount of tang to every bite.
              </p>
              <p>
                No artificial shortcuts, no watered-down gravies — just pure, slow-cooked goodness
                made fresh every single morning. It is the kind of rajma chawal your dadi would
                make, and we are proud to bring that warmth to your plate every day.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="bg-neutral-cream p-6 rounded-xl my-10 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-text-dark mb-4">
                Our Rajma Chawal Combo Includes
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    icon: "🫘",
                    label: "Slow-Cooked Rajma",
                    desc: "Red kidney beans simmered for hours in a rich masala gravy.",
                  },
                  {
                    icon: "🍚",
                    label: "Steamed Basmati Rice",
                    desc: "Fluffy, fragrant rice that perfectly soaks up the creamy curry.",
                  },
                  {
                    icon: "🥗",
                    label: "Fresh Onion Salad",
                    desc: "Crisp sliced onions with a squeeze of lemon for freshness.",
                  },
                  {
                    icon: "🫙",
                    label: "House-Special Pickle",
                    desc: "Tangy homemade achar that elevates every single mouthful.",
                  },
                  {
                    icon: "🪬",
                    label: "Roasted Papad",
                    desc: "Golden, crispy papad for that satisfying crunch on the side.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-text-dark">
                      <strong>{item.label}:</strong>{" "}
                      <span className="text-text-muted">{item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Section 2: About Chetram ──────────────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              About Chetram Pindi Chole — Lucknow&apos;s Favourite
            </h2>
            <div className="text-text-muted mb-8 leading-relaxed space-y-4">
              <p>
                <strong>Chetram Pindi Chole</strong> is not just a restaurant — it is a Lucknow
                institution. Born from a deep respect for North Indian culinary traditions,{" "}
                <strong>Chetram</strong> has become the neighbourhood eatery that residents of
                Ashiana and across Lucknow rely on for an honest, heartwarming meal. Our menu
                celebrates the true spirit of Punjabi-influenced street food: bold, unpretentious,
                and made with care.
              </p>
              <p>
                Over the years, <strong>Chetram Pindi Chole</strong> has earned the trust of
                thousands of loyal customers — from early-morning regulars who come in for a
                steaming breakfast to families who visit for their weekly comfort meal. Every dish
                we serve, from our famed Pindi Chole Bhature to our rajma chawal, is crafted with
                the same dedication to quality and authenticity that has defined us since day one.
                When Lucknow craves something real, it turns to Chetram.
              </p>
            </div>

            {/* ── Section 3: Where to Find Us ──────────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-6">Where to Find Us</h2>
            <div className="text-text-muted mb-8 leading-relaxed space-y-3">
              <p>
                <strong>Chetram Pindi Chole</strong> is conveniently located on{" "}
                <strong>
                  Quila Road, Near Power House Chauraha, Opposite Ashiana Kotwali, Sector K,
                  Ashiana, Lucknow — 226012
                </strong>
                . We are open every day of the week from{" "}
                <strong>7:30 AM to 11:00 PM</strong>, making us perfect for a hearty breakfast, a
                satisfying lunch, or a relaxed dinner in the heart of Lucknow.
              </p>
              <p>
                We offer both <strong>dine-in</strong> and <strong>takeaway</strong> options, so
                you can enjoy our rajma chawal fresh at the table or carry it home to share with
                your loved ones. Whether you are visiting Lucknow for the first time or a loyal
                local, our doors are always open and our pots are always full.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="flex items-center gap-2 bg-primary/5 rounded-xl px-4 py-3 flex-1">
                  <span className="text-2xl">📍</span>
                  <span className="text-sm font-medium text-text-dark">
                    Quila Road, Sector K, Ashiana, Lucknow — 226012
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-primary/5 rounded-xl px-4 py-3 flex-1">
                  <span className="text-2xl">🕖</span>
                  <span className="text-sm font-medium text-text-dark">
                    Open Daily: 7:30 AM – 11:00 PM
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-primary/5 rounded-xl px-4 py-3 flex-1">
                  <span className="text-2xl">📞</span>
                  <a
                    href="tel:+917054352288"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    +91 70543 52288
                  </a>
                </div>
              </div>
            </div>

            {/* ── Section 4: FAQs ───────────────────────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 mb-10">
              {[
                {
                  q: "Where can I get the best rajma chawal in Lucknow?",
                  a: "Chetram Pindi Chole in Ashiana, Lucknow is widely regarded as the go-to spot for the best rajma chawal in Lucknow. Located on Quila Road, Sector K, the restaurant serves slow-cooked, creamy rajma with perfectly steamed basmati rice that keeps customers coming back week after week.",
                },
                {
                  q: "What is the price of rajma chawal at Chetram?",
                  a: "At Chetram Pindi Chole, a generous plate of rajma chawal is priced at approximately ₹120 — making it one of the most value-for-money meals in Lucknow. The combo plate includes steamed rice, a hearty bowl of rajma, onion salad, papad, and homemade pickle.",
                },
                {
                  q: "What comes in the rajma chawal combo in Lucknow at Chetram?",
                  a: "Our signature rajma chawal combo in Lucknow includes slow-cooked rajma in a rich masala gravy, fluffy steamed basmati rice, crispy roasted papad, freshly sliced onion rings, and a tangy house-special pickle. It is a complete, wholesome, and deeply satisfying North Indian meal.",
                },
                {
                  q: "Is rajma chawal available for takeaway at Chetram Pindi Chole?",
                  a: "Yes, absolutely! Chetram Pindi Chole offers both dine-in and takeaway options for rajma chawal. You can walk in and carry your meal home, or enjoy our warm and welcoming ambiance at the restaurant itself. We recommend visiting fresh for the best piping-hot experience.",
                },
                {
                  q: "Why is Chetram the best place for rajma chawal in Lucknow?",
                  a: "Chetram Pindi Chole stands out because of its unwavering commitment to authentic recipes. The rajma is slow-cooked daily using hand-ground masalas, fresh kidney beans, and zero shortcuts — resulting in a creamy, deeply flavourful curry that tastes just like home. Combined with perfectly steamed rice and honest pricing, it is the meal Lucknow has grown to trust and love.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="border border-accent/20 rounded-xl p-6 hover:border-primary/30 transition-colors"
                >
                  <h3 className="text-lg font-bold text-text-dark mb-2">{faq.q}</h3>
                  <p className="text-text-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* ── Closing CTA ───────────────────────────────────────────── */}
            <div className="text-center mt-12 border-y border-gray-200 py-10">
              <h3 className="text-2xl font-bold text-text-dark mb-4">
                Come In, Eat Well, Leave Happy
              </h3>
              <p className="text-text-muted mb-6 max-w-2xl mx-auto leading-relaxed">
                Life is too short for a bad meal. Visit <strong>Chetram Pindi Chole</strong> today
                and savour the <strong>best rajma chawal in Lucknow</strong> — piping hot, made with
                love, and worth every rupee. Craving something else? Explore our{" "}
                <Link href="/best-chole-bhature-in-lucknow" className="text-primary font-semibold hover:underline">
                  Chole Kulche
                </Link>{" "}
                or treat yourself to our beloved{" "}
                <Link href="/best-chur-chur-naan-in-lucknow" className="text-primary font-semibold hover:underline">
                  Combo Thali
                </Link>
                . We cannot wait to serve you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/menu"
                  className="inline-block px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all shadow-md hover:shadow-xl text-lg hover:-translate-y-1"
                >
                  Explore Full Menu
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold transition-all text-lg hover:-translate-y-1"
                >
                  Get Directions
                </Link>
              </div>
            </div>
          </div>

          {/* ── Location Card ─────────────────────────────────────────────── */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-md border border-accent/10">
            <h2 className="text-2xl font-bold text-text-dark mb-4">
              Visit Chetram Pindi Chole in Lucknow
            </h2>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto text-lg">
              Join thousands of happy diners who have made{" "}
              <strong>Chetram Pindi Chole</strong> their favourite dining spot in Lucknow. Dine
              in or take away — we are always ready to serve you.
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
