import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function FeaturedBuilders() {

    const [builders, setBuilders] = useState([]);

    useEffect(() => {

        fetchBuilders();

    }, []);

    const fetchBuilders = async () => {

        try {

            const res =
                await API.get("/users");

            setBuilders(
                res.data.slice(0, 3)
            );

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <section className="py-24 px-4">

            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-bold text-white text-center mb-16">

                    🌟 Featured Builders

                </h2>


                <div className="grid md:grid-cols-3 gap-8">

                    {

                        builders.map((builder) => (

                            <div

                                key={builder._id}

                                className="
                                bg-slate-900/70
                                border
                                border-slate-800
                                rounded-3xl
                                p-8
                                text-center
                                hover:border-indigo-500
                                transition
                                "

                            >

                                {

                                    builder.profileImage ? (

                                        <img

                                            src={
                                                builder.profileImage
                                            }

                                            alt={
                                                builder.name
                                            }

                                            className="
                                            w-28
                                            h-28
                                            rounded-full
                                            object-cover
                                            mx-auto
                                            mb-6
                                            border-4
                                            border-indigo-600
                                            "

                                        />

                                    ) : (

                                        <div className="text-7xl mb-6">

                                            👨‍💻

                                        </div>

                                    )

                                }


                                <h3 className="text-2xl text-white font-bold">

                                    {builder.name}

                                </h3>


                                <p className="text-indigo-400 mt-2">

                                    {

                                        builder.branch ||

                                        "Builder"

                                    }

                                </p>


                                <div className="flex flex-wrap justify-center gap-2 mt-5">

                                    {

                                        builder.skills

                                            ?.slice(0, 4)

                                            .map((skill) => (

                                                <span

                                                    key={skill}

                                                    className="
                                                    bg-indigo-600
                                                    px-3
                                                    py-1
                                                    rounded-xl
                                                    text-white
                                                    text-sm
                                                    "

                                                >

                                                    {skill}

                                                </span>

                                            ))

                                    }

                                </div>


                                <Link

                                    to={`/profile/${builder._id}`}

                                    className="
                                    block
                                    mt-8
                                    bg-indigo-600
                                    hover:bg-indigo-500
                                    py-3
                                    rounded-2xl
                                    text-white
                                    "

                                >

                                    View Profile

                                </Link>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default FeaturedBuilders;