import { Link, useLocation } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
// import Check from "../../public/images/check.png";

export default function Overviewscanning({ children }) {
    const location = useLocation();

    const overviewRef = useRef(null);
    const processRef = useRef(null);
    const applicationsRef = useRef(null);

    const tabs = [
        { id: "overview", label: "Overview", ref: overviewRef },
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

    // const services = [
    //     { name: "Mechanical Product design", path: "/services/product-design-dva" },
    //     { name: "Reverse Engineering", path: "/services/reverse-engineering" },
    //     {
    //         name: "3D scanning & Product Benchmarking",
    //         path: "/services/3d-scanning-benchmarking",
    //     },
    //     { name: "CAD data conversion", path: "/services/cad-conversion" },
    //     { name: "Finite Element Analysis (FEA)", path: "/services/fea" },
    //     {
    //         name: "3D Printing/Rapid prototyping",
    //         path: "/services/rapid-prototyping",
    //     },
    //     { name: "Manufacturing/Prototyping", path: "/services/manufacturing-prototyping" },
    //     { name: "Product rendering", path: "/services/product-rendering" },
    // ];


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
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900 text-[18px]">
                        <p className="mb-2 text-gray-600 ">
                            At <strong>MAK Design Solutions</strong>, we provide{" "}
                            <strong>3D Scanning and Product Benchmarking </strong>{" "}
                            services that enable businesses to analyse, replicate, and
                            optimize products with high accuracy. Benchmarking allows
                            companies to study competitor products and identify
                            opportunities for improvement in terms of performance, cost,
                            efficiency, and material usage. Combined with advanced 3D
                            scanning technology, we deliver precise digital models that
                            form the foundation for reverse engineering and product
                            development.

                        </p>
                        <p className="mb-2 text-gray-600">
                            Product benchmarking involves evaluating a
                            competitor’s product data such as structural dimensions,
                            material specifications, functional characteristics,
                            manufacturing, and assembly processes in order to refer the
                            same while reverse engineered the similar product and
                            implement the areas of improvement
                        </p>
                        <p className="mb-2 text-gray-600">
                            We apply the tear-down
                            technique, which involves meticulous planning, data
                            collection, data analysis, and implementation to deliver
                            actionable insights for improved product design.
                            <br />For collecting structural information of the product having
                            intricate shapes, we use 3D scanning process to ensure the
                            data accuracy. Using our 3D scanning facility, we analyze
                            real-world objects to collect precise three-dimensional data
                            used for constructing digital models.</p>
                        <p className="mb-2 text-gray-600">
                            The goal is to learn
                            from existing designs and implement enhancements that result
                            in cost reduction, efficiency gains, and optimized
                            performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                        {/* LEFT CONTENT */}
                        <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900 text-[18px] ">
                                <h3 className="font-semibold text-[22px] mb-3 text-black">
                                    3D Scanning : Benchmarking tool
                                </h3>
                                <p>
                                    Our advanced 3D scanning services capture accurate
                                    three-dimensional data of physical objects, even with complex
                                    geometries. This ensures a reliable digital foundation for
                                    design and engineering applications.
                                </p>
                                <br />
                                <h4 className="font-semibold">The process includes:</h4>
                                <ul className="list-disc pl-6 space-y-2 text-[18px]">
                                    <li>
                                        Physical Sample Study – Inspecting intricate shapes and
                                        details before scanning.{" "}
                                    </li>
                                    <li>
                                        3D Scanning – Capturing the object with high precision to
                                        ensure accuracy and completeness.
                                    </li>
                                    <li>
                                        Data Cleaning – Removing unwanted surfaces and refining the
                                        point cloud data.
                                    </li>
                                    <li>
                                        Data Conversion – Converting scanned data into STL format
                                        for further processing.
                                    </li>
                                    <li>
                                        CAD Model Creation – Developing a precise 3D CAD model from
                                        the STL file to use in reverse engineering, prototyping, and
                                        validation.
                                    </li>
                                </ul>
                            </div>

                            {/*Key Benefits  */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900">
                                <h3 className="text-[22px] font-semibold mb-3 text-gray-900">
                                    Key Benefits
                                </h3>
                                <ul className="list-disc pl-6 space-y-2 text-[18px]">
                                    <li>High accuracy in capturing intricate product details.</li>
                                    <li>Faster design cycles with reliable digital CAD data.</li>
                                    <li>
                                        Improved product development through competitive
                                        benchmarking insights.
                                    </li>
                                    <li>Cost savings by identifying optimization areas early.</li>
                                    <li>
                                        Digital documentation of critical parts for future
                                        reference.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT IMAGE COLUMN */}
                        <div className="space-y-48">
                            <img
                                src="/images/Bench1.jpg"
                                alt="Product Design 1"
                                className="rounded-xl shadow-md w-full object-cover "
                            />
                            <img
                                src="/images/Bench2.jpg"
                                alt="Product Design 2"
                                className="rounded-xl shadow-md w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* ========================= Application ========================= */}

                    <div id="applications" ref={applicationsRef} className="mt-20 pt-4">
                        <h2 className="text-3xl text-[#1e3a8a] font-bold tracking-wide border-b pb-3 mb-6">
                            Applications
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

                            {/* ---------- FIRST ROW : 4 CARDS ---------- */}
                            {[
                                {
                                    name: "Reverse Engineering",
                                    description: "Decoding existing products to optimize design and reduce costs."
                                },
                                {
                                    name: "Failure analysis",
                                    description: "Identifying root causes to prevent future breakdowns."
                                },
                                {
                                    name: "Product improvement",
                                    description: "Enhancing products for better performance and customer satisfaction."
                                },
                                {
                                    name: "Gap identification",
                                    description: "Spotting gaps to bridge the difference between current and desired outcomes."

                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer"
                                >
                                    <div className="relative h-44 w-full">
                                        <img
                                            src={`/images/ProductBenchmarking/${index + 1}.jpg`}
                                            alt={item.name}
                                            className="h-full w-full object-fill transition duration-300 group-hover:blur group-hover:brightness-75"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center px-4 text-black bg-[#68aad3] text-[16px] text-center opacity-0 transition duration-300 group-hover:opacity-100">
                                            {item.description}
                                        </div>
                                    </div>
                                    <div className="bg-blue-900 text-white text-center py-2 text-md font-medium">
                                        {item.name}
                                    </div>
                                </div>
                            ))}

                            {/* ---------- SECOND ROW : CENTERED 3 CARDS ---------- */}
                            <div className="col-span-full flex justify-center gap-6">
                                {[
                                    {
                                        name: "Competitive comparison",
                                        description: "Analyzing competitors to uncover strengths and weaknesses.",
                                    },
                                    {
                                        name: "Digitalization",
                                        description: "Leveraging digital tools to transform processes and efficiency.",
                                    },
                                    {
                                        name: "Product benchmarking",
                                        description: "Measuring performance against standards to stay ahead in the market.",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer w-full max-w-[260px]"
                                    >
                                        <div className="relative h-44 w-full">
                                            <img
                                                src={`/images/ProductBenchmarking/${index + 5}.jpg`}
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
                            </div>

                            {/* ---------- CHILDREN ---------- */}
                            {children && (
                                <div className="col-span-full">
                                    {children}
                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}