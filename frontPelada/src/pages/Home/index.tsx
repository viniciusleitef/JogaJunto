import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header/index';
import { CallToActionSection } from './components/CallToActionSection/index';
import { FacSection } from './components/FaqSection';
import { FeatureSection } from './components/FeaturesSection';
import { HeroSection } from './components/HeroSection/HeroSection';
import { JoinUsSection } from './components/JoinUsSection';
import { OurTeamSection } from './components/OurTeamSection';

export function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection/>
      <JoinUsSection/>
      <CallToActionSection/>
      <FacSection/>
      <OurTeamSection/>
      <Footer/>
    </>
  );
}
