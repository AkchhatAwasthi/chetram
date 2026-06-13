import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Chole Kulcha Combo in Lucknow | Chetram Pindi Chole Bhature",
  description:
    "Craving the best chole kulcha combo in Lucknow? Try Chetram's authentic Pindi-style chole with soft kulcha, laccha paratha & pishori naan. Visit us in Aashiana, Lucknow.",
  keywords: [
    "best chole kulcha combo in Lucknow",
    "best kulcha in Lucknow",
    "best chole kulcha in Lucknow",
    "chole kulcha combo Lucknow",
    "Pindi chole kulcha Lucknow",
    "Amritsari kulcha Lucknow",
    "laccha paratha with chole Lucknow",
    "pishori naan with chole Lucknow",
    "Chetram Pindi Chole Bhature",
    "chole kulcha Aashiana Lucknow",
  ],
  alternates: {
    canonical: "https://chetrampindichole.com/best-chole-kulcha-combo-lucknow",
  },
  openGraph: {
    title: "Best Chole Kulcha Combo in Lucknow | Chetram Pindi Chole Bhature",
    description:
      "Try Chetram's authentic Pindi-style chole with soft tandoori kulcha, layered laccha paratha & rich pishori naan. Lucknow's favorite combos, served fresh daily.",
    url: "https://chetrampindichole.com/best-chole-kulcha-combo-lucknow",
    siteName: "Chetram Pindi Chole Bhature",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dmj0smemf/image/upload/v1781343460/Laccha_paratha_With_Chole_ANM05116_1_jv83ep.jpg",
        width: 1200,
        height: 800,
        alt: "Laccha paratha with chole at Chetram Pindi Chole Bhature Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Chole Kulcha Combo in Lucknow | Chetram Pindi Chole Bhature",
    description:
      "Authentic Delhi-style Pindi chole paired with tandoori kulcha, flaky paratha, and pishori naan in Aashiana, Lucknow.",
    images: [
      "https://res.cloudinary.com/dmj0smemf/image/upload/v1781343460/Laccha_paratha_With_Chole_ANM05116_1_jv83ep.jpg",
    ],
  },
};

// ── Schema Markup ──────────────────────────────────────────────────────────────

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://chetrampindichole.com/#restaurant",
  name: "Chetram Pindi Chole Bhature",
  description:
    "Lucknow's beloved restaurant serving the best chole kulcha combo in Lucknow along with authentic Pindi Chole Bhature, Chur Chur Naan, and North Indian street food.",
  url: "https://chetrampindichole.com/best-chole-kulcha-combo-lucknow",
  telephone: "+917054352288",
  email: "chetrambhature@gmail.com",
  image: "https://res.cloudinary.com/dmj0smemf/image/upload/v1781343460/Laccha_paratha_With_Chole_ANM05116_1_jv83ep.jpg",
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
    ratingValue: "4.8",
    reviewCount: "410",
  },
  hasMenuItem: [
    {
      "@type": "MenuItem",
      name: "Chole with Laccha Paratha Combo",
      description: "Layered, flaky laccha paratha paired with our signature Delhi-style Pindi chole.",
      offers: {
        "@type": "Offer",
        price: "160",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "MenuItem",
      name: "Chole with Pishori Naan Combo",
      description: "Soft, dry-fruit stuffed pishori naan paired with our signature Delhi-style Pindi chole.",
      offers: {
        "@type": "Offer",
        price: "180",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "MenuItem",
      name: "Chole with Mix Veg Combo",
      description: "Signature Pindi chole served with tandoori bread, rice, and fresh seasonal mix veg.",
      offers: {
        "@type": "Offer",
        price: "160",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "MenuItem",
      name: "Chole with Gobhi Pyaaz Combo",
      description: "Spiced gobhi pyaaz sabzi served with our signature Pindi chole and bread of choice.",
      offers: {
        "@type": "Offer",
        price: "160",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
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
      name: "Best Chole Kulcha Combo Lucknow",
      item: "https://chetrampindichole.com/best-chole-kulcha-combo-lucknow",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best chole kulcha combo in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you are looking for the absolute best chole kulcha combo in Lucknow, look no further than Chetram Pindi Chole Bhature. Our combo pairs slow-cooked Delhi-style Pindi chole with soft, buttered kulchas, flaky laccha paratha, or rich pishori naan, bringing authentic Capital flavors to Lucknow food lovers.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get authentic chole kulcha in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get authentic, Delhi-style best chole kulcha in Lucknow at Chetram Pindi Chole Bhature, located in Sector K, Aashiana, Lucknow. We prepare our signature chole daily using dry-roasted whole spices, serving them piping hot alongside tandoor-baked breads for an unmatched dining experience.",
      },
    },
    {
      "@type": "Question",
      name: "What breads are available with chole at Chetram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Chetram, we offer a wide variety of freshly baked breads to pair with our signature Pindi chole. You can choose from soft tandoori kulcha, fluffy bhature, rich pishori naan with chole Lucknow style, and crispy, layered laccha paratha with chole Lucknow foodies love.",
      },
    },
    {
      "@type": "Question",
      name: "Is the chole kulcha combo available for takeaway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our entire menu, including our famous chole kulcha combo Lucknow favorites, is available for dine-in and takeaway. We use premium, eco-friendly Chuk packaging to ensure your meal remains hot, fresh, and spill-safe during transit. Takeaway is available daily from 9:00 AM to 10:00 PM.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a chole kulcha combo cost in Lucknow at Chetram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A satisfying, wholesome Pindi chole kulcha Lucknow combo at Chetram is highly affordable, ranging between ₹140 and ₹180 depending on your choice of bread (kulcha, paratha, or naan). Each combo plate is served with fresh salad, homemade pickle, and a side of green mint chutney.",
      },
    },
  ],
};

// ── Page Component ─────────────────────────────────────────────────────────────

export default function BestCholeKulchaLucknow() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pt-32 pb-20 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">

          {/* ── SECTION 1: HERO ───────────────────────────────────────────── */}
          <div className="mb-10 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Lucknow&apos;s Ultimate Foodie Landmark
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-6 leading-tight">
              Best Chole Kulcha Combo in Lucknow
            </h1>
            <div className="h-1 w-24 bg-accent mx-auto mb-6 rounded-full" />
          </div>

          {/* ── Main Content Card ────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-accent/20 mb-12">

            {/* Hero Featured Image */}
            <div className="mb-8 overflow-hidden rounded-xl h-64 md:h-[500px] relative">
              <img
                src="https://res.cloudinary.com/dmj0smemf/image/upload/v1781343460/Laccha_paratha_With_Chole_ANM05116_1_jv83ep.jpg"
                alt="Laccha paratha with chole at Chetram Pindi Chole Bhature Lucknow"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Hero Intro Paragraph */}
            <p className="text-lg text-text-muted leading-relaxed mb-10">
              When it comes to authentic North Indian comfort food, nothing matches the magic of a perfectly crafted <strong>chole kulcha combo Lucknow</strong> food lovers swear by. At <strong>Chetram Pindi Chole Bhature</strong>, located in the heart of <strong>Aashiana, Lucknow</strong>, we bring the legendary taste of Delhi-style Pindi chole to your plate. Paired with soft, fluffy kulchas, layered parathas, or rich naans, our combos offer a symphony of textures and flavors that redefine street food excellence in the city.
            </p>

            <div className="text-center mb-10">
              <Link
                href="/menu"
                className="inline-block px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all shadow-md hover:shadow-xl text-lg hover:-translate-y-1"
              >
                Order Now / View Menu
              </Link>
            </div>

            {/* ── SECTION 2: WHAT MAKES OUR COMBO SPECIAL ─────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              What Makes Chetram&apos;s Chole Kulcha Combo the Best in Lucknow?
            </h2>
            <div className="text-text-muted mb-8 leading-relaxed space-y-4">
              <p>
                To consistently serve the <strong>best chole kulcha in Lucknow</strong>, we follow age-old culinary traditions originating from Old Delhi. Our signature Pindi-style chole are slow-cooked for hours with a unique blend of dry-roasted whole spices, black cardamom, tea leaves, and dried pomegranate seeds. This slow-simmering process gives our chole their iconic deep mahogany color and a rich, smoky, and tangy flavor profile without relying on heavy tomato-onion purees or artificial colorings.
              </p>
              <p>
                But a world-class curry requires the perfect bread companion. We offer a delightful variety of freshly prepared breads, including tandoori kulcha, layered parathas, and stuffed naans. Each bread is hand-rolled by our master bread makers and baked in a traditional clay tandoor at high heat to achieve the ideal texture — crispy on the outside, and soft and pillowy on the inside.
              </p>
              <p>
                Furthermore, we believe that great food should be good for the environment. That is why we proudly serve all our dine-in meals on eco-friendly Chuk packaging made from sugarcane fiber. It is 100% natural, hygienic, and compostable, ensuring your dining experience is completely guilt-free. When you order our <strong>Pindi chole kulcha Lucknow</strong> favorites, you are tasting a legacy crafted fresh every single day.
              </p>
            </div>

            {/* ── SECTION 3: OUR CHOLE COMBO VARIETIES ──────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Explore Our Chole Combo Varieties
            </h2>
            <p className="text-text-muted mb-8 leading-relaxed">
              We understand that every foodie has different bread preferences. That is why we have customized our signature Pindi chole into four distinct, mouthwatering combos. Explore our varieties below:
            </p>

            <div className="space-y-12">
              {/* Variety 1 */}
              <div className="border border-accent/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-text-dark mb-4">Chole with Laccha Paratha</h3>
                <div className="mb-4 overflow-hidden rounded-lg h-48 md:h-80 relative">
                  <img
                    src="https://res.cloudinary.com/dmj0smemf/image/upload/v1781343460/Laccha_paratha_With_Chole_ANM05116_1_jv83ep.jpg"
                    alt="Best chole laccha paratha combo in Lucknow at Chetram"
                    loading="lazy"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-text-muted leading-relaxed">
                  Experience the ultimate texture contrast with our layered, flaky <strong>laccha paratha with chole Lucknow</strong> special. Cooked on a hot tawa with a brush of butter, the paratha&apos;s crispy rings pair wonderfully with our slow-cooked Pindi chole, creating a hearty, multi-textured, and deeply satisfying combo meal.
                </p>
              </div>

              {/* Variety 2 */}
              <div className="border border-accent/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-text-dark mb-4">Chole with Pishori Naan</h3>
                <div className="mb-4 overflow-hidden rounded-lg h-48 md:h-80 relative">
                  <img
                    src="https://res.cloudinary.com/dmj0smemf/image/upload/v1781343459/Pishori_naan_With_Chole_ANM05125_1_clrzw2.jpg"
                    alt="Pishori naan with chole combo Lucknow Chetram"
                    loading="lazy"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-text-muted leading-relaxed">
                  For a royal twist, try our sweet-and-savory <strong>pishori naan with chole Lucknow</strong> combo. This premium flatbread is stuffed with crushed dry fruits, coconut, and fennel, then tandoor-baked to soft perfection. The mild sweetness of the naan perfectly balances the spicy, robust notes of the chole.
                </p>
              </div>

              {/* Variety 3 */}
              <div className="border border-accent/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-text-dark mb-4">Chole with Mix Veg</h3>
                <div className="mb-4 overflow-hidden rounded-lg h-48 md:h-80 relative">
                  <img
                    src="https://res.cloudinary.com/dmj0smemf/image/upload/v1781343459/MIX_veg_With_Chole_ANM05037-Edit_lybkya.jpg"
                    alt="Mix veg with chole at Chetram Pindi Chole Bhature Lucknow"
                    loading="lazy"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-text-muted leading-relaxed">
                  For those who want extra veggies alongside their chole and bread combo, our mix veg is a flavorful addition. We combine a generous serving of Pindi chole, fresh seasonal mix vegetables, and your choice of warm, tandoori bread, delivering a wholesome dose of nutrition and traditional taste.
                </p>
              </div>

              {/* Variety 4 */}
              <div className="border border-accent/20 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-text-dark mb-4">Chole with Gobhi Pyaaz Combo</h3>
                <div className="mb-4 overflow-hidden rounded-lg h-48 md:h-80 relative">
                  <img
                    src="https://res.cloudinary.com/dmj0smemf/image/upload/v1781343459/Gobhi_Pyaaz_With_Chole_ANM05198-Edit_anoccn.jpg"
                    alt="Gobhi pyaaz with chole combo Lucknow Chetram"
                    loading="lazy"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-text-muted leading-relaxed">
                  A classic North Indian favorite — gobhi pyaaz sabzi served with our signature Pindi chole and bread of choice. This spiced, home-style cauliflower and onion preparation brings a delicious, dry-textured side dish that cuts through the rich gravy of our chole, making it a hearty winter-style lunch.
                </p>
              </div>
            </div>

            {/* ── SECTION 4: WHY CHOOSE CHETRAM FOR CHOLE KULCHA ─────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-6 mt-12">
              Why Chetram is Lucknow&apos;s Go-To for Chole Kulcha Combos
            </h2>
            <div className="bg-neutral-cream p-6 rounded-xl my-8 border-l-4 border-primary">
              <ul className="space-y-4 text-text-muted leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✔</span>
                  <span className="text-text-dark">
                    <strong>Authentic Delhi-style Pindi Chole Recipe:</strong> Cooked overnight using a signature masala blend containing black cardamom, pomegranate seeds, and zero artificial colors.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✔</span>
                  <span className="text-text-dark">
                    <strong>Multiple Bread Options:</strong> Personalize your meal with tandoori kulcha, flaky laccha paratha, crisp <strong>Amritsari kulcha Lucknow</strong> style, or sweet pishori naan.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✔</span>
                  <span className="text-text-dark">
                    <strong>Eco-Friendly & Hygienic:</strong> Served hot on sugarcane-fiber Chuk compostable plates. We follow strict hygiene protocols across all steps of kitchen prep.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✔</span>
                  <span className="text-text-dark">
                    <strong>Affordable Pricing & Generous Portions:</strong> Indulge in premium quality combos priced economically to ensure everyone can enjoy authentic North Indian comfort food.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✔</span>
                  <span className="text-text-dark">
                    <strong>Located in Aashiana, Lucknow:</strong> Drop by our cozy outlet in Sector K for a comfortable dine-in experience, or carry away your meal in high-quality, leakproof packaging.
                  </span>
                </li>
              </ul>
            </div>

            {/* ── SECTION 5: FAQ ───────────────────────────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-6 mt-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 mb-12">
              {faqSchema.mainEntity.map((item, index) => (
                <div
                  key={index}
                  className="border border-accent/20 rounded-xl p-6 hover:border-primary/30 transition-colors bg-white"
                >
                  <h3 className="text-lg font-bold text-text-dark mb-2">{item.name}</h3>
                  <p className="text-text-muted leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>

            {/* ── SECTION 6: LOCATION + MAP ────────────────────────────────── */}
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Visit Us for the Best Chole Kulcha Combo in Lucknow
            </h2>
            <div className="text-text-muted leading-relaxed space-y-4 mb-8">
              <p>
                Visit Chetram Pindi Chole Bhature to taste the difference. We are open every day of the week, serving fresh breakfast, lunch, and dinner.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-background/80 p-6 rounded-xl border border-accent/20">
                  <h4 className="font-bold text-text-dark mb-2">📍 Address</h4>
                  <p className="text-sm">
                    Quila Road, Near Power House Chauraha,<br />
                    Opposite Ashiana Kotwali, Sector K,<br />
                    Ashiana, Lucknow, UP - 226012
                  </p>
                </div>
                <div className="bg-background/80 p-6 rounded-xl border border-accent/20">
                  <h4 className="font-bold text-text-dark mb-2">🕖 Hours & Phone</h4>
                  <p className="text-sm mb-2"><strong>Open Daily:</strong> 7:30 AM – 11:00 PM</p>
                  <p className="text-sm">
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+917054352288" className="text-primary font-semibold hover:underline">
                      +91 70543 52288
                    </a>
                  </p>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="w-full bg-accent/20 rounded-xl overflow-hidden relative h-80 border-2 border-primary/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.9127!2d80.9481!3d26.7893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sGoogle%20Maps!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chetram Outlet Map"
                ></iframe>
              </div>
            </div>

            {/* ── SECTION 7: INTERNAL LINKS / RELATED PAGES ───────────────── */}
            <div className="text-center mt-12 border-t border-gray-200 pt-10">
              <h2 className="text-2xl font-bold text-text-dark mb-6">You May Also Like</h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
                <Link
                  href="/"
                  className="px-6 py-3 bg-accent hover:bg-accent-dark text-text-dark rounded-full transition-all border border-primary/10"
                >
                  Chetram Pindi Chole Bhature - Best Chole Bhature in Lucknow
                </Link>
                <Link
                  href="/best-chur-chur-naan-in-lucknow"
                  className="px-6 py-3 bg-accent hover:bg-accent-dark text-text-dark rounded-full transition-all border border-primary/10"
                >
                  Best Chur Chur Naan in Lucknow
                </Link>
                <Link
                  href="/menu"
                  className="px-6 py-3 bg-primary text-white hover:bg-primary-dark rounded-full transition-all"
                >
                  View Full Menu
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3 bg-accent hover:bg-accent-dark text-text-dark rounded-full transition-all border border-primary/10"
                >
                  Our Story
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
