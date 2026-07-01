import HeroBackground from "../components/HeroBackground";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Explore() {

    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");
    const [branchFilter, setBranchFilter] = useState("");
    const [yearFilter, setYearFilter] = useState("");

    useEffect(() => {

        fetchUsers();

    }, []);

    const fetchUsers = async () => {

        try {

            const res = await API.get("/users");

            setStudents(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };


    const getBadge = (skills = []) => {

        const lowerSkills = skills.map(
            skill => skill.toLowerCase()
        );

        if (
            lowerSkills.some(skill =>
                skill.includes("react")
            )
        ) {
            return "⚛️ React Builder";
        }

        if (
            lowerSkills.some(skill =>
                skill.includes("ai")
            )
        ) {
            return "🤖 AI Builder";
        }

        if (
            lowerSkills.some(skill =>
                skill.includes("python")
            )
        ) {
            return "🐍 Python Builder";
        }

        if (
            lowerSkills.some(skill =>
                skill.includes("node")
            )
        ) {
            return "🌐 Full Stack Builder";
        }

        return "🚀 Builder";

    };


    const filteredStudents = students.filter(student => {

        const matchSearch =
            student.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                );

        const matchBranch =
            branchFilter === "" ||

            student.branch ===
            branchFilter;

        const matchYear =
            yearFilter === "" ||

            student.year ===
            yearFilter;

        return (

            matchSearch &&
            matchBranch &&
            matchYear

        );

    });


    const branches = [

        ...new Set(

            students
                .map(
                    student =>
                        student.branch
                )
                .filter(Boolean)

        )

    ];


    const years = [

        ...new Set(

            students
                .map(
                    student =>
                        student.year
                )
                .filter(Boolean)

        )

    ];


    return (

        <div className="relative min-h-screen bg-slate-950 overflow-hidden">

            <HeroBackground />

            <div className="relative z-10 pt-28 px-4 md:px-6">

                <div className="max-w-7xl mx-auto">

                    <motion.h1

                        initial={{
                            opacity: 0,
                            y: 20
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-white
                        mb-10
                        text-center
                        "

                    >

                        🚀 Explore Builders

                    </motion.h1>


                    {/* SEARCH + FILTERS */}

                    <div className="grid md:grid-cols-3 gap-4 mb-10">

                        <input

                            placeholder="Search builders..."

                            value={search}

                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }

                            className="
                            p-4
                            rounded-2xl
                            bg-slate-900
                            text-white
                            border
                            border-slate-800
                            "

                        />


                        <select

                            value={branchFilter}

                            onChange={(e) =>
                                setBranchFilter(
                                    e.target.value
                                )
                            }

                            className="
                            p-4
                            rounded-2xl
                            bg-slate-900
                            text-white
                            border
                            border-slate-800
                            "

                        >

                            <option value="">
                                All Branches
                            </option>

                            {

                                branches.map(branch => (

                                    <option
                                        key={branch}
                                        value={branch}
                                    >

                                        {branch}

                                    </option>

                                ))

                            }

                        </select>


                        <select

                            value={yearFilter}

                            onChange={(e) =>
                                setYearFilter(
                                    e.target.value
                                )
                            }

                            className="
                            p-4
                            rounded-2xl
                            bg-slate-900
                            text-white
                            border
                            border-slate-800
                            "

                        >

                            <option value="">
                                All Years
                            </option>

                            {

                                years.map(year => (

                                    <option
                                        key={year}
                                        value={year}
                                    >

                                        {year}

                                    </option>

                                ))

                            }

                        </select>

                    </div>


                    {/* USERS */}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {

                            filteredStudents.map(

                                (student, index) => (

                                    <motion.div

                                        key={
                                            student._id
                                        }

                                        initial={{
                                            opacity: 0,
                                            y: 30
                                        }}

                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}

                                        transition={{
                                            delay:
                                                index *
                                                0.1
                                        }}

                                        className="
                                        bg-slate-900/70
                                        backdrop-blur-xl
                                        border
                                        border-slate-800
                                        rounded-3xl
                                        p-6
                                        hover:-translate-y-2
                                        hover:border-indigo-500
                                        transition-all
                                        "

                                    >

                                        <div className="flex justify-center">

                                            {

                                                student.profileImage ? (

                                                    <img

                                                        src={
                                                            student.profileImage
                                                        }

                                                        alt={
                                                            student.name
                                                        }

                                                        className="
                                                        w-24
                                                        h-24
                                                        rounded-full
                                                        object-cover
                                                        border-4
                                                        border-indigo-600
                                                        "

                                                    />

                                                ) : (

                                                    <div className="text-6xl">

                                                        👨‍💻

                                                    </div>

                                                )

                                            }

                                        </div>


                                        <h2 className="text-2xl text-white font-bold text-center mt-4">

                                            {student.name}

                                        </h2>


                                        <p className="text-center text-yellow-400 mt-2">

                                            {

                                                getBadge(
                                                    student.skills
                                                )

                                            }

                                        </p>


                                        <p className="text-indigo-400 mt-5">

                                            🏫 {

                                                student.college ||

                                                "Not Added"

                                            }

                                        </p>


                                        <p className="text-slate-400 mt-2">

                                            💻 {

                                                student.branch ||

                                                "Not Added"

                                            }

                                        </p>


                                        <p className="text-slate-400 mt-2">

                                            📅 {

                                                student.year ||

                                                "Not Added"

                                            }

                                        </p>


                                        <div className="flex flex-wrap gap-2 mt-5">

                                            {

                                                student.skills?.map(

                                                    skill => (

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

                                                    )

                                                )

                                            }

                                        </div>


                                        {

                                            student.githubUsername && (

                                                <a

                                                    href={`https://github.com/${student.githubUsername}`}

                                                    target="_blank"

                                                    rel="noreferrer"

                                                    className="
                                                    block
                                                    mt-5
                                                    text-indigo-300
                                                    hover:text-indigo-200
                                                    "

                                                >

                                                    🐙 GitHub

                                                </a>

                                            )

                                        }


                                        <p className="text-violet-300 mt-4">

                                            🤝 {

                                                student.lookingFor ||

                                                "Open To Collaborate"

                                            }

                                        </p>


                                        <Link

                                            to={`/profile/${student._id}`}

                                            className="
                                            mt-6
                                            block
                                            w-full
                                            text-center
                                            bg-gradient-to-r
                                            from-indigo-600
                                            to-violet-600
                                            py-3
                                            rounded-2xl
                                            text-white
                                            font-semibold
                                            hover:scale-105
                                            transition
                                            "

                                        >

                                            View Profile

                                        </Link>

                                    </motion.div>

                                )

                            )

                        }

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Explore;