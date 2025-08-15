import ContactsMaps from "../components/home/contact-maps";
import HeroSection from "../components/home/hero-section";
import ServisSection from "../components/home/services";
import AboutKosice from "../components/home/about-kosice";

export default function Home() {

    return (
        <main>
            <HeroSection/>
            <ServisSection/>
            <AboutKosice/>
            <ContactsMaps/>
        </main>
    );
}