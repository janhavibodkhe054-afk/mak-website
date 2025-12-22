import { Link, useLocation } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";

export default function FeaSection({ children }) {
    const location = useLocation();

    const overviewRef = useRef(null);
    const processRef = useRef(null);
    const applicationsRef = useRef(null);

    const tabs = [
        { id: "overview", label: "Overview", ref: overviewRef },
        // { id: "process", label: "Process Flow", ref: processRef },
        { id: "applications", label: "Applications", ref: applicationsRef },
    ];

    const [activeTab, setActiveTab] = useState("overview");

    const scrollToSection = (ref, id) => {
        if (ref.current) {
            const yOffset = -100;
            const y =
                ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setActiveTab(id);
        }
    };

    // Scroll spy
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 150; // offset for sticky header

            const currentTab = tabs
                .map((tab) => {
                    const elem = tab.ref.current;
                    if (!elem) return { id: tab.id, top: 0 };
                    return { id: tab.id, top: elem.offsetTop };
                })
                .filter((sec) => sec.top <= scrollPos)
                .sort((a, b) => b.top - a.top)[0];

            if (currentTab && currentTab.id !== activeTab) {
                setActiveTab(currentTab.id);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // initialize
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeTab, tabs]);



    const services = [
        { name: "Mechanical Product design", path: "/services/product-design-dva" },
        { name: "Reverse Engineering", path: "/services/reverse-engineering" },
        {
            name: "3D scanning & Product Benchmarking",
            path: "/services/3d-scanning-benchmarking",
        },
        { name: "CAD data conversion", path: "/services/cad-data-conversion" },
        { name: "Finite Element Analysis (FEA)", path: "/services/fea" },
        {
            name: "3D Printing/Rapid prototyping",
            path: "/services/3d-printing-rapid-prototyping",
        },
        { name: "Manufacturing/Prototyping", path: "/services/manufacturing-prototyping" },
        { name: "Product rendering", path: "/services/product-rendering-technical-animation" },
    ];
    return (
        <div className="w-full flex pt-10 pb-4 px-6 md:px-12 gap-10 bg-gray-100">
            {/* LEFT SIDEBAR */}
            <div className="w-64 bg-white p-6 rounded-2xl shadow-md border sticky top-24 self-start h-fit max-h-auto  overflow-y-auto">
                <h3 className="text-[22px]  text-left font-bold mb-4 text-gray-800">
                    Our Services
                </h3>
                <div className="space-y-4">
                    {services.map((s, i) => {
                        const isActive = location.pathname === s.path;
                        return (
                            <Link
                                key={i}
                                to={s.path}
                                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition border 
                  ${isActive
                                        ? "bg-blue-900 text-white border-blue-900 shadow"
                                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                                    }`}
                            >
                                <span className="text-[16px] font-medium whitespace-normal leading-snug">
                                    {s.name === "Manufacturing/Prototyping" ? (
                                        <>
                                            Manufacturing/
                                            <wbr />
                                            Prototyping
                                        </>
                                    ) : (
                                        s.name
                                    )}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1">
                {/* TOP TABS */}
                <div className="flex gap-4 mb-8  pb-3 text-[18px] sticky font-semibold top-[125px] z-50 pt-4 -mx-6 px-6  w-[50%]">
                    {tabs.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => scrollToSection(t.ref)}
                            className={`px-5 py-2 rounded-md transition-all duration-300 font-medium 
        ${activeTab === t.id
                                    ? "bg-blue-900 text-white"
                                    : "bg-white text-blue-900 hover:bg-blue-100"
                                }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                {/* ========================= OVERVIEW ========================= */}
                <div id="overview" ref={overviewRef} className="space-y-12 pt-4">
                    <h2 className="text-3xl text-[#1e3a8a] font-bold tracking-wide border-b pb-3">
                        Overview
                    </h2>



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                        {/* LEFT CONTENT */}
                        <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900 text-[18px]">
                                <p>
                                    <strong>Finite Element Analysis (FEA)</strong> is a powerful
                                    computer-based simulation technique that predicts how a product
                                    or structure will perform under real-world conditions such as
                                    stress, vibration, heat, and load. By breaking down a complex
                                    design into multiple interconnected finite elements, FEA
                                    provides highly accurate insights into structural
                                    behaviour—without the need of costly physical prototypes.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900 text-[18px] ">
                                <h3 className="font-semibold text-[22px] mb-3 text-black">
                                    At MAK Design Solutions, we leverage FEA to
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 text-[18px]">
                                    <li>Analyse complex systems and assemblies.</li>
                                    <li>
                                        Validate and test structural designs for performance and
                                        durability.
                                    </li>
                                    <li>
                                        Detect potential design flaws early in the development cycle.
                                    </li>
                                    <li>Optimize products for strength, safety, and efficiency.</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900 ">
                                <h3 className="font-semibold text-black mb-3 text-[22px]">
                                    MAK Design Solutions provide the FEA solutions on
                                </h3>
                                <ul className="list-disc pl-6 space-y-1 text-[18px]">
                                    <li>Static structure</li>
                                    <li>Modal analysis</li>
                                    <li>Explicit dynamics</li>
                                    <li>Transient structure</li>
                                    <li>Buckling</li>
                                    <li>Steady state thermal</li>
                                    <li>Transient thermal</li>

                                </ul>
                            </div>

                        </div>

                        {/* RIGHT IMAGE COLUMN */}
                        <div className="space-y-48">
                            <img
                                src="/images/FEA/FEA1.png"
                                alt="Product Design 1"
                                className="rounded-xl shadow-md w-full object-cover "
                            />
                            <img
                                src="/images/FEA/FEA2.png"
                                alt="Product Design 2"
                                className="rounded-xl shadow-md w-full object-cover"
                            />
                        </div>


                    </div>


                 

                    <div className="bg-white p-9 rounded-2xl shadow-md  border-l-4 border-blue-900">
                        <h3 className="text-[22px] font-semibold  mb-7">
                            Benefits of FEA in Product Development
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                ["Reduced Prototyping Costs", "Minimizes physical trial-and-error."],
                                ["Accurate Results", "Detailed stress & load analysis."],
                                ["Time Efficiency", "Faster design cycles."],
                                ["Risk Mitigation", "Early failure detection."],
                                ["Complex Geometry", "Handles intricate shapes."],
                                ["Versatile Analysis", "Linear & non-linear simulations."],
                                ["Safe Testing", "Risk-free simulations."],
                                ["Optimization", "Improved design performance."],
                            ].map(([title, desc], i) => (
                                <div
                                    key={i}
                                    className="flex gap-5 p-5 rounded-xl bg-gray-50 border-l-4 border-blue-900 hover:-translate-y-1 hover:shadow-lg transition"
                                >
                                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{title}</h4>
                                        <p className="text-gray-600 text-sm mt-1">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>




                    {/* ========================= APPLICATIONS ========================= */}
                    <div id="applications" ref={applicationsRef} className="mt-20 pt-4">
                        <h2 className="text-3xl text-[#1e3a8a] font-bold tracking-wide border-b pb-3 mb-6">
                            Applications
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Solve Engg. problems",
                                    description:
                                        "Applying simulation tools to solve complex engineering challenges.",
                                },
                                {
                                    name: "Structure analysis",
                                    description:
                                        "Evaluating structural behavior under real-world loads and conditions.",
                                },
                                {
                                    name: "Design Optimization",
                                    description:
                                        "Improving designs for maximum performance with minimal material and cost.",
                                },
                                {
                                    name: "Ensure safety & efficiency",
                                    description:
                                        "“Balancing strength, efficiency, and cost for reliable engineering solutions.",
                                },
                                {
                                    name: "Design validation",
                                    description:
                                        "Verifying designs through simulation before physical manufacturing",
                                },
                                {
                                    name: "Durability evaluation",
                                    description:
                                        "Assessing fatigue and lifespan to ensure long-term product reliability",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer"
                                >
                                    <div className="relative h-44 w-full">
                                        <img
                                            src={`/images/FEA/${index + 1}.jpg`}
                                            alt={item.name}
                                            className="h-full w-full object-fill transition duration-300 group-hover:blur group-hover:brightness-75"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center px-4 text-black bg-[#68aad3]  text-[16px] text-center opacity-0 transition duration-300 group-hover:opacity-100">
                                            {item.description}
                                        </div>
                                    </div>

                                    <div className="bg-blue-900 text-white text-center py-2 text-md font-medium">
                                        {item.name}
                                    </div>
                                </div>
                            ))}

                            {children && <div className="col-span-full">{children}</div>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}