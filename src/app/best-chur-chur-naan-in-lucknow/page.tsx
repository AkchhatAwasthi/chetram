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
    canonical: "https://chetrampindichole.com/best-chur-chur-naan-in-lucknow",
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
        text: "Our Chur Chur Naan is prepared in a traditional clay tandoor, crushed tightly by hand to separate the flaky layers, and generously stuffed with spiced fillings and topped with pure butter.",
      },
    },
    {
      "@type": "Question",
      name: "What is served alongside Chur Chur Naan at Chetram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To provide the ultimate Punjabi dining experience, we serve our signature Chur Chur Naan as a complete thali. It comes accompanied by slow-cooked Dal Makhani, rich Shahi Paneer, Boondi Raita, green mint chutney, and a fresh salad.",
      },
    },
    {
      "@type": "Question",
      name: "Is Chur Chur Naan different from regular Stuffed Naan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, significantly! While standard stuffed naan is a single-layered flatbread baked in the tandoor, Chur Chur Naan is made using a specialized lamination technique (folding dough with ghee multiple times to create layers), and it is physically crushed ('chur chur') immediately out of the oven to expose those intense, crispy layers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer Jain or No-Onion/No-Garlic options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We prepare our traditional Punjabi gravies and fillings using robust flavors, which typically include onion and garlic as foundational bases. However, our paneer and aloo fillings in the naan are deeply spiced to classic street-food perfection.",
      },
    }
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
              Crispy. Flaky. Overloaded with Butter.
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-6 leading-tight">
              Best Chur Chur Naan in Lucknow
            </h1>
            <div className="h-1 w-24 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-text-muted leading-relaxed">
              Experience the satisfying crunch of Lucknow's most extravagantly loved <strong>Chur Chur Naan</strong>. At Chetram, we bypass ordinary street food to deliver an authentic, elevated Punjabi dhaba experience wrapped in perfectly layered, tandoor-baked breads. Prepare yourself for the ultimate North Indian feast!
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-accent/20 mb-12">
            <div className="mb-8 overflow-hidden rounded-xl h-64 md:h-[500px] relative">
              <img 
                src="https://github.com/AkchhatAwasthi/chetramimages/blob/main/Mix%20Chur%20Chur%20Naan.jpg?raw=true" 
                alt="Famous Chur Chur Naan in Lucknow, crushed and served with creamy Dal Makhani" 
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              What Defines True "Chur Chur" Naan?
            </h2>
            <div className="text-text-muted mb-8 leading-relaxed space-y-4">
              <p>
                To genuinely claim the title of <strong>best Chur Chur Naan in Lucknow</strong>, one must completely understand the art of lamination. "Chur Chur" literally translates to "crushed into pieces." Unlike a standard paratha or naan, our dough rests for several hours. Our skilled bread masters then layer the dough infinitely with premium desi ghee, folding it over and over similar to puff pastry construction before stuffing it heavily with robust, zesty fillings.
              </p>
              <p>
                The dramatically high heat of our traditional clay tandoors instantly locks the crispness into those layers while retaining the moistness of the seasoned potato, paneer, or mixed fillings inside. But the true magic happens seconds after it is pulled from the oven. Our chefs forcefully crush the roaring hot naan by hand. This violent but necessary action releases aromatic steam, absorbs the dollop of white butter we instantly place on top, and permanently separates the flaky golden layers to maximize the crunch factor in every bite.
              </p>
            </div>
            
            <div className="bg-neutral-cream p-6 rounded-xl my-10 border-l-4 border-accent">
              <h3 className="text-2xl font-bold text-text-dark mb-4">The Complete Thali Experience</h3>
              <p className="mb-4 text-text-muted">You do not just order a flatbread—you partake in a royal feast. Every plate of our Chur Chur Naan is accompanied by an orchestra of classic side dishes designed to perfectly counterbalance the crispy richness of the bread:</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3 font-bold">1.</span>
                  <span className="text-text-dark"><strong>Dal Makhani:</strong> Simmered for 12 hours overnight to achieve a silky, creamy texture that perfectly coats the dry, crispy naan.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3 font-bold">2.</span>
                  <span className="text-text-dark"><strong>Shahi Paneer:</strong> A luscious, slightly sweet, and mildly spiced tomato-cashew gravy that cuts through the heat of the stuffed naan.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3 font-bold">3.</span>
                  <span className="text-text-dark"><strong>Boondi Raita:</strong> A refreshing, cumin-dusted yogurt to cool your palate between fiery, spicy bites.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent text-xl mr-3 font-bold">4.</span>
                  <span className="text-text-dark"><strong>Mint Chutney & Salad:</strong> Providing an essential crunch and acidic tang for an incredible flavor contrast.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Our Bestselling Chur Chur Varieties
            </h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              At Chetram, we believe in providing massive, overpowering flavors across all our varieties. The secret lies in generously stuffing the lachha (layered) dough until it can barely hold itself together. 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mt-8">
              <div className="bg-background/80 p-8 rounded-xl border border-accent/20 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-text-dark mb-3">Aalu Chur Chur Naan</h3>
                <p className="text-text-muted">The unmatched purist classic. We stuff our flaky layers with roughly mashed potatoes infused with amchoor (mango powder), ajwain (carom seeds), roasted coriander, and sharp green chili. Intensely comforting and heavy.</p>
              </div>
              <div className="bg-background/80 p-8 rounded-xl border border-accent/20 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-text-dark mb-3">Paneer Chur Chur Naan</h3>
                <p className="text-text-muted">A luxurious upgrade. Generously stuffed with freshly grated, seasoned paneer (cottage cheese). The rich fat content of the paneer creates a melt-in-the-mouth texture alongside the extremely crunchy, buttered exterior.</p>
              </div>
              <div className="bg-background/80 p-8 rounded-xl border border-accent/20 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-text-dark mb-3">Gobhi Chur Chur Naan</h3>
                <p className="text-text-muted">A highly requested seasonal favorite. Finely grated cauliflower tossed with toasted spices and ginger, creating a uniquely earthy, hearty profile reminiscent of village winter mornings.</p>
              </div>
              <div className="bg-background/80 p-8 rounded-xl border border-accent/20 hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute -right-10 -top-10 bg-primary/10 w-32 h-32 rounded-full blur-2xl z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-text-dark mb-3">The Mix Chur Chur Naan</h3>
                  <p className="text-text-muted">Our undisputed ultimate creation. When you can't decide, we combine paneer, aloo, and gobhi into one massive, explosive filling. Highly recommended for the hungriest foodies.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10 border-y border-gray-200 py-10">
              <h3 className="text-2xl font-bold text-text-dark mb-4">Craving the Ultimate Crunch?</h3>
              <p className="text-text-muted mb-8 max-w-2xl mx-auto">
                No knife and fork required. The only acceptable way to eat our Chur Chur Naan is with your bare hands, ripping off buttery, layered flakes and dunking them directly into our silky Dal Makhani. We guarantee you'll be back for more.
              </p>
              <Link
                href="/menu"
                className="inline-block px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all shadow-md hover:shadow-xl text-lg hover:-translate-y-1"
              >
                View Complete Menu & Pricing
              </Link>
            </div>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-8 shadow-md border border-accent/10">
            <h2 className="text-2xl font-bold text-text-dark mb-4">Join Us For A Phenomenal Feast</h2>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto text-lg">
              Ready to dive into the best Chur Chur Naan in Lucknow? Stop by Chetram and experience North Indian street food elevated to an art form. Make sure you come hungry!
            </p>
            <Link
              href="/contact"
              className="text-primary font-bold hover:underline text-xl inline-flex items-center gap-2"
            >
              Get Location & Directions &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
