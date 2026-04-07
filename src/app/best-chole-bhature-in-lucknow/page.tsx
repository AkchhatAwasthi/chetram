import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Chole Bhature in Lucknow | Chetram Restaurant",
  description:
    "Looking for the best Chole Bhature in Lucknow? Visit Chetram in Ashiana for authentic, spicy Pindi Chole and soft, fluffy Bhature. Experience true North Indian flavors!",
  keywords: [
    "best chole bhature in lucknow",
    "famous chole bhature in lucknow",
    "pindi chole bhature lucknow",
    "lucknow street food",
    "chetram chole bhature",
    "ashiana lucknow chole bhature",
  ],
  alternates: {
    canonical: "https://www.chetram.in/best-chole-bhature-in-lucknow",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where can I find the best Chole Bhature in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chetram Restaurant in Ashiana, Lucknow is widely famous for serving the best authentic Pindi Chole Bhature, loved by locals for its traditional North Indian taste.",
      },
    },
    {
      "@type": "Question",
      name: "Does Chetram serve Pindi Chole?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Chetram specializes in dark, slow-cooked, spicy Pindi Chole served with hot, fluffy Bhature and traditional accompaniments like pickles and onions.",
      },
    },
  ],
};

export default function BestCholeBhaturePage() {
  return (
    <>
      <Script
        id="faq-schema-chole"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pt-32 pb-20 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Lucknow's Favorite
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-6 leading-tight">
              Best Chole Bhature in Lucknow
            </h1>
            <div className="h-1 w-24 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-text-muted leading-relaxed">
              If you are wandering the streets of the City of Nawabs craving the ultimate North Indian comfort food, your search ends here. Welcome to <strong>Chetram</strong>, the home of the most authentic, lip-smacking <strong>Pindi Chole Bhature in Lucknow</strong>.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-accent/20 mb-12">
            <div className="mb-8 overflow-hidden rounded-xl h-64 md:h-96 relative">
              {/* Using a standard img tag with an external URL from their existing asset base */}
              <img 
                src="https://github.com/AkchhatAwasthi/upscalers-images/blob/main/bhature_with_raita_ANM05297-Edit%20(1).jpg?raw=true" 
                alt="Delicious Best Chole Bhature in Lucknow" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-text-dark mb-4">
              Why Chetram Serves the Famous Chole Bhature in Lucknow?
            </h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              There is a reason foodies flock to Ashiana for a plate of our signature dish. At Chetram, we don't just cook food; we preserve tradition. Our <strong>Pindi Chole</strong> is slow-cooked overnight with a secret blend of whole spices, giving it that iconic dark color and robust, tangy flavor that pairs perfectly with our crispy outside, soft inside, balloon-like <strong>Bhature</strong>.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary text-xl mr-3">✓</span>
                <span className="text-text-dark"><strong>Secret Spice Blend:</strong> Roasted spices sourced from the finest markets.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-xl mr-3">✓</span>
                <span className="text-text-dark"><strong>Slow-Cooked Perfection:</strong> Overnight cooking ensures the chana melts in your mouth.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-xl mr-3">✓</span>
                <span className="text-text-dark"><strong>Fluffy Bhature:</strong> Fermented perfectly to puff up large without absorbing excess oil.</span>
              </li>
            </ul>
            
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all shadow-md hover:shadow-lg"
              >
                View Our Full Menu
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-dark mb-4">Visit Us Today</h2>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto">
              Don't just take our word for it. Visit Chetram at Quila Road, Sector K, Ashiana to taste the top-rated Chole Bhature magic yourself.
            </p>
            <Link
              href="/contact"
              className="text-primary font-semibold hover:underline"
            >
              Get Directions to Chetram &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
