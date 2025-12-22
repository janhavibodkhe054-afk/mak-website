
import React, { useRef, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Check from "../../../public/images/check.png";
import ReverseEngineeringApplicationCard from './ReverseEngineeringApplicationCard';
import RE from '../../../public/images/RE.jpg'
import RE2 from '../../../public/images/RE2.png'



const OurServicesCard = ({ children }) => {
    const location = useLocation();

    const overviewRef = useRef(null);
    const processRef = useRef(null);
    const applicationsRef = useRef(null);

    const tabs = [
        { id: "overview", label: "Overview", ref: overviewRef },
        { id: "process", label: "Process Flow", ref: processRef },
        { id: "applications", label: "Applications", ref: applicationsRef },
    ];

    const [activeTab, setActiveTab] = useState("overview");

    const scrollToSection = (ref, id) => {
        if (ref.current) {
            const yOffset = -100;
            const y =
                ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setActiveTab(id); // update on click
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
    const reverseEngineeringSteps = [
        {
            id: "01",
            title: "Sample Collection & Benchmarking",
            points: [
                "Obtain the physical sample and capture engineering data including dimensions, material properties, and functional specifications.",
            ],
        },
        {
            id: "02",
            title: "Value Analysis & Value Engineering (VAVE)",
            points: [
                "Evaluate existing designs and propose improvements to overcome challenges related to cost, quality, performance, and efficiency.",
            ],
        },
        {
            id: "03",
            title: "CAD Data Preparation",
            points: [
                "Develop accurate 2D/3D CAD models using benchmark information and VAVE recommendations.",
                "Validate fitment of child components for dimensional accuracy.",
            ],
        },
        {
            id: "04",
            title: "Structural Analysis",
            points: [
                "Apply FEA simulations to test structural integrity and performance in case of major design modifications.",
            ],
        },
        {
            id: "05",
            title: "Design Comparison & Validation",
            points: [
                "Compare old and new designs to record improvements and ensure targeted results are achieved.",
            ],
        },
        {
            id: "06",
            title: "Engineering Drawings Release",
            points: [
                "Generate precise 2D drawings for manufacturing and prototyping.",
            ],
        },
        {
            id: "07",
            title: "Prototyping",
            points: [
                "Create physical prototypes through 3D printing or machining processes.",
                "Validate designs before investing in mass production and expensive hard tooling (press tools, molds, etc.).",
            ],
        },
    ];

    return (
        <div className="w-full flex pt-10 pb-5 px-6 md:px-12 gap-10 bg-gray-100">
            {/* LEFT SIDEBAR */}
            <div className="w-64 bg-white p-6 rounded-2xl shadow-md border sticky top-24 self-start h-fit max-h-auto  overflow-y-auto">
                <h3 className="text-[22px] text-left font-bold mb-4 text-gray-800">
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
                                    {s.name === "Manufacturing/Prototyping"
                                        ? (
                                            <>
                                                Manufacturing/
                                                <wbr />
                                                Prototyping
                                            </>
                                        )
                                        : s.name}
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                        {/* LEFT CONTENT */}
                        <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900 text-[18px]">
                                <p className='pb-2'>
                                    At <strong>MAK Design Solutions</strong>, we specialize in
                                    <strong> Reverse Engineering services</strong> that help recreate new
                                    products from existing designs with improved efficiency, cost
                                    effectiveness, and performance.


                                </p>
                                <p className="mt-3 pb-5">
                                    Our design methodology converts customer requirements into validated
                                    engineering concepts through modeling, simulation, and prototype
                                    development.
                                </p>
                            </div>
                        </div>
                        {/* RIGHT IMAGE — AUTO MATCH HEIGHT */}
                        <div className=" rounded-xl shadow-md overflow-hidden">
                            <img
                                src={RE}
                                alt="Reverse Engineering"
                                className="w-full h-80   rounded-lg"
                            />
                        </div>
                    </div>

                    <div>
                        {/* Process */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900">
                            <h3 className="font-semibold text-[22px] mb-6 text-black">
                                Our Reverse Engineering Process
                            </h3>

                            <div className="space-y-3">
                                {reverseEngineeringSteps.map((step) => (
                                    <div
                                        key={step.id}
                                        className="flex gap-4 hover:bg-blue-50 p-3 rounded-lg transition"
                                    >
                                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white font-semibold">
                                            {step.id}
                                        </span>

                                        <div>
                                            <h4 className="font-semibold text-black text-[18px]">
                                                {step.title}
                                            </h4>
                                            <ul className="list-disc pl-5  text-[18px] text-gray-700">
                                                {step.points.map((point, index) => (
                                                    <li key={index}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mt-12">
                    {/* Benefits */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900">
                        <h3 className="text-[22px] font-semibold mb-3 text-gray-900">
                            Benefits of Reverse Engineering
                        </h3>
                        <ul className="list-disc text-gray-800 pl-6 space-y-2 text-[18px]">
                            <li>Recreate obsolete or unavailable parts</li>
                            <li>Enhance performance while reducing cost</li>
                            <li>Accelerate time-to-market</li>
                            <li>Efficient spare parts management</li>
                            <li>Improved reliability</li>
                        </ul>
                    </div>
                    {/* RIGHT IMAGE — AUTO MATCH HEIGHT */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <img
                            src={RE2}
                            alt="Reverse Engineering"
                            className="w-full h-80   rounded-lg"
                        />
                    </div>
                </div>

                {/* ========================= PROCESS FLOW ========================= */}
                <div id="process" ref={processRef} className="mt-20 pt-4">
                    <h2 className="text-3xl text-[#1e3a8a] font-bold tracking-wide border-b pb-3 mb-6">
                        Process Flow
                    </h2>

                    <div className="overflow-hidden rounded-xl shadow-lg border border-gray-300">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-[#1e3a8a] text-white text-sm font-semibold">
                                    <th
                                        className="border-r border-gray-400 px-4 py-3 align-middle text-center text-lg"
                                        rowSpan={2}
                                    >
                                        Process Flow
                                    </th>
                                    <th
                                        className="border-r border-gray-400 px-4 py-3 text-center align-middle text-lg"
                                        rowSpan={2}
                                    >
                                        Project Activities
                                    </th>
                                    <th
                                        className="px-4 py-3 text-center text-lg border-b border-gray-400"
                                        colSpan={2}
                                    >
                                        Responsibility
                                    </th>
                                </tr>
                                <tr className="bg-[#1e3a8a] text-white text-sm font-semibold">
                                    <th className="border-r border-gray-400 px-4 py-2 text-center text-lg">
                                        Our Client
                                    </th>
                                    <th className="px-4 py-2 text-center text-lg">MAK Design</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {[
                                    [
                                        "10",
                                        "Get the physical product sample / 2D drawings with client requirements",
                                        "✓",
                                        "✓",
                                    ],
                                    [
                                        "20",
                                        "Data collection by benchmarking the physical sample  (Specifications: Dimensions, Material, Functional parameters, Manufacturing processes)",
                                        "",
                                        "✓",
                                    ],
                                    [
                                        "30",
                                        "Idea generation on VAVE options, evaluation & finalization (if applicable)",
                                        "",
                                        "✓",
                                    ],
                                    [
                                        "40",
                                        "Review and approvals",
                                        "✓",
                                        "",
                                    ],
                                    [
                                        "50",
                                        "Design detailing  (BOM, Material, Dimensions & functional specifications)",
                                        "",
                                        "✓"
                                    ],
                                    [
                                        "60",
                                        "CAD data creation (3D model of parts & assembly)",
                                        "",
                                        "✓",
                                    ],
                                    [
                                        "70",
                                        "Structural analysis (FEA), if needed",
                                        "",
                                        "✓",
                                    ],
                                    ["80", "Compaire old and new design specification", "", "✓"],
                                    ["90", "Review and approvals", "✓", ""],
                                    [
                                        "100",
                                        "Engineering drawing release for prototyping",
                                        "",
                                        "✓",
                                    ],
                                    ["110", "Prototype building", "", "✓"],
                                    ["120", "Testing and Validation", "", "✓"],
                                ].map((row, i) => (
                                    <tr
                                        key={i}
                                        className="odd:bg-white even:bg-blue-50  transition text-lg"
                                    >
                                        {row.map((cell, j) => (
                                            <td
                                                key={j}
                                                className={`p-4 ${j === 0 ? 'text-center' : j === 1 ? 'text-left' : 'text-center'} ${j < 3 ? 'border-r border-gray-300' : ''}`}
                                            >
                                                {cell === "✓" ? (
                                                    <img src={Check} alt="check" className="w-5 h-5 mx-auto" />
                                                ) : (
                                                    cell
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

                <div id="applications" ref={applicationsRef} className="mt-20 pt-4">
                    <h2 className="text-3xl text-[#1e3a8a] font-bold tracking-wide border-b pb-3 mb-6">
                        Applications
                    </h2>
                    <ReverseEngineeringApplicationCard />
                </div>
            </div>
        </div >
    );
}

export default OurServicesCard