import HeroSection from '../components/HeroSection';
import ImproveSkills from '../components/ImproveSkills';
import QuoteSection from '../components/QuoteSection';
import ChefsSection from '../components/ChefsSection';
import TestimonialsSection from '../components/TestimonialsSection';
export default function Home(){
    return (
        <div>
        <HeroSection />
        <ImproveSkills/>
        <QuoteSection/>
        <ChefsSection/>
            <TestimonialsSection />
        </div>
    )
}