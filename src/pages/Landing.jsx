import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HeroBackground from "../components/HeroBackground";
import Projects from "../components/Projects";
import Community from "../components/Community";
import Footer from "../components/Footer";
import FeaturedBuilders from "../components/FeaturedBuilders";
import AIFloatingButton from "../components/AIFloatingButton";
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
<div className="relative z-10 max-w-6xl mx-auto px-4 py-12">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-slate-900/70 p-6 rounded-3xl border border-slate-800 text-center">

            <h2 className="text-4xl font-bold text-indigo-400">

                500+

            </h2>

            <p className="text-slate-400 mt-2">

                Builders

            </p>

        </div>


        <div className="bg-slate-900/70 p-6 rounded-3xl border border-slate-800 text-center">

            <h2 className="text-4xl font-bold text-violet-400">

                120+

            </h2>

            <p className="text-slate-400 mt-2">

                Projects

            </p>

        </div>


        <div className="bg-slate-900/70 p-6 rounded-3xl border border-slate-800 text-center">

            <h2 className="text-4xl font-bold text-blue-400">

                80+

            </h2>

            <p className="text-slate-400 mt-2">

                Collaborations

            </p>

        </div>


        <div className="bg-slate-900/70 p-6 rounded-3xl border border-slate-800 text-center">

            <h2 className="text-4xl font-bold text-green-400">

                24/7

            </h2>

            <p className="text-slate-400 mt-2">

                Real-Time Chat

            </p>

        </div>

    </div>

</div>
                <Features />

                <Projects />
                
                <FeaturedBuilders />

                <Community />

                <Footer />

            </div>
<AIFloatingButton />
        </div>

    );

}

export default Landing;