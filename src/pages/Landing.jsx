import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HeroBackground from "../components/HeroBackground";
import Projects from "../components/Projects";
import Community from "../components/Community";
import Footer from "../components/Footer";

function Landing() {
const token =
    localStorage.getItem("token");

const userId =
    localStorage.getItem("userId");
    return (

        <div
            className="
            relative
            min-h-screen
            bg-slate-950
            overflow-hidden
            "
        >

            {/* GLOBAL BACKGROUND */}

            <HeroBackground />

            {/* WEBSITE CONTENT */}

            <div className="relative z-10">

                <Navbar />

                <Hero />

                <Features />

                <Projects />

                <Community />

                <Footer />

            </div>

        </div>

    );

}

export default Landing;