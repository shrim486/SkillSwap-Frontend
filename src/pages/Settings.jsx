import HeroBackground from "../components/HeroBackground";
import Navbar from "../components/Navbar";

function Settings() {

    const userName =
        localStorage.getItem(
            "userName"
        );

    return (

        <div className="relative min-h-screen bg-slate-950 overflow-hidden">

            <HeroBackground />

            <Navbar />

            <div className="relative z-10 pt-28 px-4">

                <div className="max-w-4xl mx-auto">

                    <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8">

                        <h1 className="text-4xl font-bold text-white mb-8">

                            ⚙️ Settings

                        </h1>


                        <div className="space-y-6">

                            <div className="bg-slate-800/50 p-6 rounded-2xl">

                                <h2 className="text-2xl text-white font-bold">

                                    👤 Account

                                </h2>

                                <p className="text-slate-400 mt-2">

                                    Logged in as {userName}

                                </p>

                            </div>


                            <div className="bg-slate-800/50 p-6 rounded-2xl">

                                <h2 className="text-2xl text-white font-bold">

                                    🔒 Security

                                </h2>

                                <p className="text-slate-400 mt-2">

                                    Password reset coming soon.

                                </p>

                            </div>


                            <div className="bg-slate-800/50 p-6 rounded-2xl">

                                <h2 className="text-2xl text-red-400 font-bold">

                                    ⚠️ Danger Zone

                                </h2>

                                <button

                                    className="
                                    mt-5
                                    bg-red-600
                                    hover:bg-red-500
                                    px-6
                                    py-3
                                    rounded-2xl
                                    text-white
                                    "

                                >

                                    Delete Account
                                    (Coming Soon)

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Settings;