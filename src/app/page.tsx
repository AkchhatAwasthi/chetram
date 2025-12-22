import Hero from "@/components/sections/Hero";
import WhyChetram from "@/components/sections/WhyChetram";
import SignatureDishes from "@/components/sections/SignatureDishes";
import OurStory from "@/components/sections/OurStory";
import ImageGallery from "@/components/sections/ImageGallery";
import DelhiTaste from "@/components/sections/DelhiTaste";
import OutletsTimings from "@/components/sections/OutletsTimings";
import Sustainability from "@/components/sections/Sustainability";
import CustomerLove from "@/components/sections/CustomerLove";
import OrderVisit from "@/components/sections/OrderVisit";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChetram />
      <SignatureDishes />
      <OurStory />
      <ImageGallery />
      <DelhiTaste />
      <OutletsTimings />
      <Sustainability />
      <CustomerLove />
      <OrderVisit />
    </>
  );
}
