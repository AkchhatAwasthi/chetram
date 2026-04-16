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
    canonical: "https://chetrampindichole.com/best-chole-bhature-in-lucknow",
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
      name: "Does Chetram serve authentic Pindi Chole?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Chetram specializes in dark, slow-cooked, spicy Pindi Chole served with hot, fluffy Bhature and traditional accompaniments like pickles and onions.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Chetram's Bhature less oily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our culinary experts use a precise fermentation process and fry the Bhature at optimal, high temperatures, which restricts oil absorption. This results in incredibly light, fluffy, and non-greasy bhaturas.",
      },
    },
    {
      "@type": "Question",
      name: "Are there vegan or vegetarian options at Chetram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Our signature Pindi Chole Bhature is a 100% vegetarian dish. While some accompaniments like Lassi contain dairy, the core Chole dish relies entirely on wholesome plant-based ingredients and rich spices.",
      },
    },
    {
      "@type": "Question",
      name: "Can I order Chetram's Chole Bhature online for delivery in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer fast and reliable delivery across Lucknow through our delivery partners like Zomato and Swiggy. However, for the ultimate piping-hot experience, we highly recommend enjoying it fresh at our Ashiana outlet.",
      },
    }
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
              Lucknow's Unrivaled Favorite
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-6 leading-tight">
              Best Chole Bhature in Lucknow
            </h1>
            <div className="h-1 w-24 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-text-muted leading-relaxed">
              If you are wandering the vibrant streets of the City of Nawabs craving the ultimate North Indian comfort food, your search definitively ends here. Welcome to <strong>Chetram</strong>, the undisputed home of the most authentic, deeply flavorful, and lip-smacking <strong>Pindi Chole Bhature in Lucknow</strong>. 
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-accent/20 mb-12">
            <div className="mb-8 overflow-hidden rounded-xl h-64 md:h-[500px] relative">
              <img 
                src="https://github.com/AkchhatAwasthi/upscalers-images/blob/main/bhature_with_raita_ANM05297-Edit%20(1).jpg?raw=true" 
                alt="Delicious Best Chole Bhature in Lucknow served with raw onions and spicy pickle" 
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Why Chetram Serves the Most Famous Chole Bhature in Lucknow?
            </h2>
            <div className="text-text-muted mb-8 leading-relaxed space-y-4">
              <p>
                There is a profound reason why foodies, bloggers, and families flock to our Ashiana outlet day after day for a plate of our signature dish. At Chetram, we don't just cook food; we preserve an incredible culinary tradition. The journey of crafting the perfect <strong>best Chole Bhature in Lucknow</strong> begins long before the sun rises. Our legendary <strong>Pindi Chole</strong> is meticulously slow-cooked overnight.
              </p>
              <p>
                Unlike standard chickpea curries, authentic Pindi Chole derives its iconic dark rustic color and robust, tangy flavor from a secret, closely-guarded blend of ground whole spices (khada masala), simmered alongside dried amla or tea leaves. It’s an incredibly rich, thick, and deeply aromatic preparation that clings beautifully to the bread. This intense, fiery stew pairs harmoniously with our crispy outside, soft inside, balloon-like <strong>Bhature</strong>.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-text-dark mb-4">The Anatomy of the Perfect Bhatura</h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              Have you ever had a bhatura that feels heavy and greasy? You will never experience that at Chetram. A truly spectacular Bhatura requires scientific precision in its dough fermentation. We utilize a traditional resting strategy that incorporates premium maida (refined flour), a touch of semolina (sooji) for that irresistible crunch, and natural leavening agents. Fired at flash points in fresh, high-quality oil, our bhaturas rapidly puff up like golden balloons, trapping steam inside to cook the inner crumb while instantly sealing the exterior to prevent excessive oil absorption. The result? A remarkably light, airy vessel destined to carry our delectable chole.
            </p>

            <div className="bg-neutral-cream p-6 rounded-xl my-10 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-text-dark mb-4">Our Tri-Pillar Philosophy</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3 font-bold">1.</span>
                  <span className="text-text-dark"><strong>Secret Artisan Spice Blend:</strong> Freshly roasted whole spices—including anardana (pomegranate seeds), black cardamom, and roasted cumin—sourced directly from the finest local harvest markets.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3 font-bold">2.</span>
                  <span className="text-text-dark"><strong>Unapologetic Slow-Cooking:</strong> We refuse to rush. The overnight simmering process breaks down the chickpeas until they literally melt in your mouth, absorbing every drop of flavor.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary text-xl mr-3 font-bold">3.</span>
                  <span className="text-text-dark"><strong>The Essential Accompliments:</strong> What is Chole Bhature without the perfect sides? We serve our masterpiece with crisp raw onion rings, fiery green chilies, and our house-special tangy mixed pickle.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-text-dark mb-6">
              A Culinary Journey: The History of Pindi Chole
            </h2>
            <div className="text-text-muted mb-8 leading-relaxed space-y-4">
              <p>
                To understand why finding the <strong>best Chole Bhature in Lucknow</strong> is such a passionate quest for locals, one must trace the dish back to its Northern roots in the Rawalpindi region of pre-partition India. While standard North Indian curries rely heavily on onion-tomato gravies, authentic 'Pindi' style completely revolutionizes the approach. It utilizes a dry-roasted masala base without typical turmeric or heavy tomato purees, ensuring the natural nuttiness of the chickpeas is the star of the show. 
              </p>
              <p>
                Over the decades, as this exquisite breakfast-slash-lunch heavyweight migrated across the subcontinent, various cities added their cultural spin. At Chetram, we have respected the rugged, deeply spiced 'Pindi' authenticity while calibrating the spice levels to perfection for the legendary Lucknawi palate. We have bridged the gap between raw Punjabi Dhaba culture and the refined culinary appreciation of Lucknow.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-text-dark mb-6">
              How to Eat Chole Bhature like a Local
            </h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              If it is your first time indulging, prepare for a messy, joyous experience. First, puncture the puffed golden Bhatura to release the aromatic steam. Tear off a sizable, flaky morsel. Next, aggressively scoop up a generous mound of the thick, dark Pindi Chole. Cap it off with a sliver of vinegared onion and a dab of our fiery pickle. Close your eyes and take the bite. The contrasting textures—the crispy shell, the soft bread, the hearty chickpeas, and the sharp bite of the onion—create a symphony of flavor. Wash it down with a massive, chilled class of Sweet Lassi, and you’ll understand why the entire city frequents our doors.
            </p>
            
            <div className="text-center mt-12 mb-8 border-y border-gray-200 py-10">
              <h3 className="text-2xl font-bold text-text-dark mb-4">Don't Settle For Less!</h3>
              <p className="text-text-muted mb-6 max-w-2xl mx-auto">
                While many stalls pop up claiming greatness, authentic preparation requires years of dedication. Next time you search for "Chole Bhature near me," bypass the fakes and head straight to Chetram.
              </p>
              <Link
                href="/menu"
                className="inline-block px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all shadow-md hover:shadow-xl text-lg hover:-translate-y-1"
              >
                Explore Full Menu & Pricing
              </Link>
            </div>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-8 shadow-md border border-accent/10">
            <h2 className="text-2xl font-bold text-text-dark mb-4">Visit Our Landmark Location Today</h2>
            <p className="text-text-muted mb-6 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Food vloggers, critics, and generations of loyal families consider us a must-visit destination. Visit Chetram at Quila Road, Sector K, Ashiana to taste the top-rated magic yourself.
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
