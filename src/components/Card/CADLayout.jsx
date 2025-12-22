import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import CAD from "../../../public/images/CAD.png";

const CADLayout = ({ children }) => {
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
    return (
        <div className="w-full flex pt-10 pb-4 px-6 md:px-12 gap-10 bg-gray-100">
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

                    {/* FULL WIDTH INTRO */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900 text-[18px] text-gray-700 leading-relaxed">
                        <p>
                            At <strong>MAK Design Solutions</strong>, we provide expert
                            <strong> CAD Data Conversion services</strong> that ensure seamless
                            transitions between different engineering design formats. Whether
                            converting 2D drawings into 3D models or simplifying 3D models into
                            2D drawings, our solutions enhance design flexibility, improve
                            communication, and support efficient manufacturing processes.
                        </p>
                        <p className="mt-3">
                            Our CAD conversion services also help in data preservation, quality
                            inspection, and future audits, making them an essential part of
                            modern product development and engineering workflows.
                        </p>
                    </div>

                    {/* IMAGE + CONVERSION CARDS */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">



                        {/* Left CARDS */}
                        <div className="space-y-8">

                            {/* 3D TO 2D */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900">
                                <h3 className="font-semibold text-[22px] mb-3 text-black">
                                    3D to 2D Conversion
                                </h3>
                                <p className="text-[18px] mb-2">
                                    Converting 3D models into detailed 2D drawings supports:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[18px]">
                                    <li>Manufacturing workflows with accurate blueprints</li>
                                    <li>Quality inspection and verification processes</li>
                                    <li>Design detailing & specifications</li>
                                    <li>Bill of Materials (BOM)</li>
                                    <li>Record-keeping for audits</li>
                                </ul>
                            </div>

                            {/* 2D TO 3D */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900">
                                <h3 className="font-semibold text-black mb-3 text-[22px]">
                                    2D to 3D Conversion
                                </h3>
                                <p className="mb-2 text-[18px]">
                                    Converting 2D drawings into interactive 3D models enables:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[18px]">
                                    <li>Reverse engineering of legacy designs</li>
                                    <li>Design optimization with accurate visualization</li>
                                    <li>Creation of realistic renders & animations</li>
                                    <li>Advanced testing and simulations</li>
                                    <li>3D printing and rapid prototyping</li>
                                </ul>
                            </div>

                        </div>

                        {/* Right IMAGE */}
                        <div>
                            <img
                                src={CAD}
                                alt="CAD Conversion"
                                className="rounded-xl shadow-md w-full object-cover"
                            />
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900">
                            <h3 className="text-[22px] font-semibold mb-3 text-gray-900">
                                Key Benefits
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 text-[18px]">
                                <li>Improved design versatility and collaboration</li>
                                <li>Faster manufacturing readiness with accurate data</li>
                                <li>Reduced errors and rework during production</li>
                                <li>Enhanced visualization for stakeholders</li>
                                <li>Long-term engineering data preservation</li>
                            </ul>
                        </div>
                    </div>

                    {/* KEY BENEFITS – FULL WIDTH */}

                </div>
                <div id="applications" ref={applicationsRef} className="mt-20 pt-4">
                    <h2 className="text-3xl text-[#1e3a8a] font-bold tracking-wide border-b pb-3 mb-6">
                        Applications
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            {
                                name: "CAD conversion 2D to 3D",
                                description: "Transforming flat sketches into precise 3D models."
                            },
                            {
                                name: "CAD conversion 3D to 2D",
                                description: "Creating detailed 2D drawings from 3D designs."
                            },
                            {
                                name: "Drafting & Detailing",
                                description: "Turning concepts into accurate, manufacturable plans."
                            },
                            {
                                name: "Manufacturing",
                                description: "Bringing designs to life with precision engineering."
                            },
                            {
                                name: "Rapid prototyping",
                                description: "Quickly creating tangible models from digital designs."
                            },
                            {
                                name: "Digitalization",
                                description: "Modernizing mechanical design tools for smarter workflows."
                            },
                            {
                                name: "Design validation",
                                description: "Ensuring every design works flawlessly before production"
                            },
                            {
                                name: "Product design",
                                description: "Innovating functional and aesthetic products from concept to reality."
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer"
                            >
                                <div className="relative h-44 w-full">
                                    <img
                                        src={`/images/CAD/${index + 1}.jpg`}
                                        alt={item.name}
                                        className="h-full w-full object-fill transition duration-300 group-hover:blur group-hover:brightness-75"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center px-4 text-black bg-[#68aad3]  text-[16px]   text-center opacity-0 transition duration-300 group-hover:opacity-100 pointer-events-none ">
                                        {item.description}
                                    </div>
                                </div>
                                <div className="bg-blue-900 text-white text-center py-2 text-md font-medium">
                                    {item.name}
                                </div>
                            </div>
                        ))}

                        {/* CHILDREN */}
                        <div className="">{children}</div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default CADLayout