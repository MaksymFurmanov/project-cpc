import ContactsMaps from "../components/home/contact-maps";
import HeroSection from "../components/home/hero-section";
import ServisSection from "../components/home/services";
import AboutUsBrief from "../components/home/about-us-brief";

export default function Home() {

    return (
        <main>
            <HeroSection/>
            <AboutUsBrief/>
            <ServisSection/>
            <ContactsMaps/>
        </main>
    );
}