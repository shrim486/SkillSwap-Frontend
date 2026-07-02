import { useState } from "react";
import { motion } from "framer-motion";
import AIMentor from "../pages/AIMentor";

function AIFloatingButton() {

    const [open, setOpen] = useState(false);

    return (

        <>

            <motion.button

                animate={{
                    y: [0, -10, 0]
                }}

                transition={{
                    duration: 2,
                    repeat: Infinity
                }}

                onClick={() => setOpen(true)}

                className="
fixed
bottom-8
right-8
z-[100]
w-32
h-32
rounded-full
overflow-hidden
bg-transparent
hover:scale-110
transition
shadow-[0_0_50px_rgba(168,85,247,0.8)]
"
>
                <video
    src="/lumi.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="
    w-full
    h-full
    object-cover
    rounded-full
    pointer-events-none
    "
/>

            </motion.button>

            {

                open && (

                    <div
                        className="
                        fixed
                        inset-0
                        bg-black/70
                        backdrop-blur-sm
                        z-[200]
                        "
                    >

                        <button

                            onClick={() => setOpen(false)}

                            className="
                            absolute
                            top-6
                            right-6
                            text-white
                            text-4xl
                            z-[300]
                            "

                        >

                            ×

                        </button>

                        <AIMentor />

                    </div>

                )

            }

        </>

    );

}

export default AIFloatingButton;