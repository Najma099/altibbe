import Navbar from '@/components/navbar'
import CarouselComponent from '@/components/carousel'
import TransparencySection from '@/components/transparency_section'
import HealthForHumanitySection from '@/components/healthForHumanity';
import HedamoSection from '@/components/hedamo';
import TimelineSection from '@/components/timeLine';
import BlogSection from '@/components/blogSection';
import { InfiniteMovingCardsDemo } from '@/components/testimonial';
import ContactSection from '@/components/contact';
import Footer from '@/components/footer';
export default function Home() {
  return (
   <div className='bg-black text-white font-serif'>
    <Navbar/>
    <CarouselComponent/>
    <TransparencySection/>
    <HealthForHumanitySection/>
    <HedamoSection/>
    <TimelineSection/>
    <BlogSection/>
    <InfiniteMovingCardsDemo/>
    <ContactSection/>
    <Footer/>
   </div>
  );
}
