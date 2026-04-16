import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Chur Chur Naan in Lucknow | Chetram Restaurant",
  description:
    "Craving the Best Chur Chur Naan in Lucknow? Chetram Restaurant in Ashiana serves authentic, crispy, layered Chur Chur Naan loaded with flavor. Visit us today!",
  keywords: [
    "best chur chur naan in lucknow",
    "chur chur naan near me",
    "chetram chur chur naan",
    "famous chur chur naan lucknow",
    "amritsari chur chur naan",
    "ashiana lucknow restaurant",
  ],
  alternates: {
    canonical: "https://www.chetram.in/best-chur-chur-naan-in-lucknow",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where can I get the best Chur Chur Naan in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chetram Restaurant in Ashiana is the top destination for the most crispy and authentic Chur Chur Naan in Lucknow, offering varieties like Aalu, Paneer, and Mix.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Chetram's Chur Chur Naan special?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Chur Chur Naan is prepared in a traditional tandoor, crushed to perfection to separate the flaky layers, and generously stuffed with spiced fillings and topped with butter.",
      },
    },
  ],
};

export default function BestChurChurNaanPage() {
  return (
    <>
      <Script
        id="faq-schema-naan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pt-32 pb-20 min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="mb-10 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Crispy & Flaky
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-6 leading-tight">
              Best Chur Chur Naan in Lucknow
            </h1>
            <div className="h-1 w-24 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-text-muted leading-relaxed">
              Experience the satisfying crunch of Lucknow's most loved <strong>Chur Chur Naan</strong>. At Chetram, we deliver authentic Punjabi flavors wrapped in perfectly layered, tandoor-baked breads.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-accent/20 mb-12">
            <div className="mb-8 overflow-hidden rounded-xl h-64 md:h-96 relative">
              <img 
                src="https://github.com/AkchhatAwasthi/chetramimages/blob/main/Mix%20Chur%20Chur%20Naan.jpg?raw=true" 
                alt="Famous Chur Chur Naan in Lucknow" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-text-dark mb-4">
              What Makes Our Chur Chur Naan The Best?
            </h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              "Chur Chur" literally translates to crushed. That's exactly how our naan is served—crushed by hand right out of the tandoor to release the aroma of pure butter and to expose the intensely flaky layers inside! Whether you prefer the classic <strong>Aalu Chur Chur Naan</strong> or the rich <strong>Paneer Chur Chur Naan</strong>, we guarantee a feast for your senses.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-8">
              <div className="bg-background/50 p-6 rounded-xl border border-accent/10">
                <h3 className="text-xl font-bold text-text-dark mb-2">Aalu Chur Chur Naan</h3>
                <p className="text-text-muted">Crispy layered naan stuffed with spiced aloo, rich and filling. A classic choice for an authentic meal.</p>
              </div>
              <div className="bg-background/50 p-6 rounded-xl border border-accent/10">
                <h3 className="text-xl font-bold text-text-dark mb-2">Paneer Chur Chur Naan</h3>
                <p className="text-text-muted">Generously stuffed with seasoned paneer. Experience the melt-in-mouth texture alongside the crunchy exterior.</p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all shadow-md hover:shadow-lg"
              >
                View Full Menu Pricing
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-dark mb-4">Join Us For A Feast</h2>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto">
              Ready to dive into the best Chur Chur Naan in Lucknow? Stop by Chetram and experience North Indian street food elevated to an art form.
            </p>
            <Link
              href="/contact"
              className="text-primary font-semibold hover:underline"
            >
              Get Location & Directions &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
