import { Link, useLocation } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";

export default function ManufactureSection({ children }) {
    const location = useLocation();

    const overviewRef = useRef(null);
    const applicationsRef = useRef(null);

    const tabs = [
        { id: "overview", label: "Overview", ref: overviewRef },
        { id: "applications", label: "Applications", ref: applicationsRef },
    ];

    const [activeTab, setActiveTab] = useState("overview");

    const scrollToSection = (ref, id) => {
        if (ref.current) {
            const yOffset = -110;
            const y =
                ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setActiveTab(id);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 160;

            const currentTab = tabs
                .map((tab) => ({
                    id: tab.id,
                    top: tab.ref.current?.offsetTop || 0,
                }))
                .filter((sec) => sec.top <= scrollPos)
                .sort((a, b) => b.top - a.top)[0];

            if (currentTab && currentTab.id !== activeTab) {
                setActiveTab(currentTab.id);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeTab]);

    const services = [
        { name: "Mechanical Product design", path: "/services/product-design-dva" },
        { name: "Reverse Engineering", path: "/services/reverse-engineering" },
        { name: "3D scanning & Product Benchmarking", path: "/services/3d-scanning-benchmarking" },
        { name: "CAD data conversion", path: "/services/cad-data-conversion" },
        { name: "Finite Element Analysis (FEA)", path: "/services/fea" },
        { name: "3D Printing/Rapid prototyping", path: "/services/3d-printing-rapid-prototyping" },
        { name: "Manufacturing/Prototyping", path: "/services/manufacturing-prototyping" },
        { name: "Product rendering", path: "/services/product-rendering-technical-animation" },
    ];

    return (
        <>
            {/* HERO */}
            <section>
                <img src="/3.jpg" alt="Hero" className="w-full h-[360px] object-cover" />
            </section>

            <div className="w-full flex pt-10 pb-6 px-6 md:px-12 gap-10 bg-gray-100">

                {/* LEFT SIDEBAR */}
                <div className="w-64 bg-white p-6 rounded-2xl shadow-md border sticky top-24 self-start">
                    <h3 className="text-[22px] font-bold mb-5 text-gray-800">
                        Our Services
                    </h3>

                    <div className="space-y-3">
                        {services.map((s, i) => {
                            const isActive = location.pathname === s.path;
                            return (
                                <Link
                                    key={i}
                                    to={s.path}
                                    className={`block px-4 py-3 rounded-lg transition border text-[15px] font-medium
                                    ${isActive
                                            ? "bg-blue-900 text-white border-blue-900 shadow"
                                            : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                                        }`}
                                >
                                    {s.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT CONTENT */}
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

                    {/* ================= OVERVIEW ================= */}
                    <div ref={overviewRef} className="space-y-12">

                        <h2 className="text-3xl text-[#1e3a8a] font-bold tracking-wide border-b pb-3">
                        Overview
                    </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                            {/* LEFT CONTENT */}
                            <div className="space-y-10">

                                {/* Overview Card */}
                                <div className="bg-white p-8 border-l-4 border-blue-900 rounded-2xl shadow-md  text-[17px] leading-relaxed text-gray-700">
                                    <p>
                                        At <strong>MAK Design Solutions</strong>, we bridge the gap
                                        between digital design and physical reality through
                                        <strong> manufacturing and prototyping</strong>.
                                        Early validation reduces risk, saves cost, and ensures
                                        reliable, production-ready solutions.
                                    </p>
                                </div>

                                {/* KEY BENEFITS */}
                                <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-900">
  <h3 className="text-[22px] font-semibold mb-6 text-blue-900">
    Key Benefits
  </h3>

  <ul
    className="
      grid grid-cols-1 sm:grid-cols-2
      gap-x-10 gap-y-5
      list-disc list-outside
      pl-6
      marker:text-blue-900
      text-[18px] leading-relaxed text-gray-700
    "
  >
    <li>
      <strong>Early Flaw Detection –</strong> Identify and fix design issues at
      the initial stage, preventing costly mistakes later.
    </li>

    <li>
      <strong>Improved Efficiency –</strong> Rapid design iterations accelerate
      the development process and reduce time-to-market.
    </li>

    <li>
      <strong>Validation –</strong> Safely test design feasibility and explore
      multiple concepts without heavy investment.
    </li>

    <li>
      <strong>Tangible Experience –</strong> Provide stakeholders with a
      real-world feel of the product for better decision-making.
    </li>

    <li>
      <strong>Feedback-Driven Refinement –</strong> Direct and immediate feedback
      helps align the product with customer expectations.
    </li>

    <li>
      <strong>Stakeholder Buy-In –</strong> Tangible prototypes create stronger
      confidence and support for project success.
    </li>

    <li>
      <strong>Iterative Development –</strong> Quickly test and refine multiple
      versions for the most user-centric outcome.
    </li>

    <li>
      <strong>Functionality Testing –</strong> Prototypes validate ergonomics,
      usability, and performance in real-world conditions.
    </li>
  </ul>
</div>


                            </div>

                            {/* RIGHT IMAGES */}
                            <div className="space-y-10 sticky top-36">
                                <img
                                    src="/images/MANF1.jpg"
                                    className="rounded-xl shadow-md w-full object-cover"
                                    alt=""
                                />
                                <img
                                    src="/images/MANF2.jpg"
                                    className="rounded-xl shadow-md w-full object-cover"
                                    alt=""
                                />
                            </div>
                        </div>

                        {/* ================= APPLICATIONS ================= */}
                        <div ref={applicationsRef} className="mt-24">

                            <h2 className="text-3xl text-[#1e3a8a] font-bold tracking-wide border-b pb-3 mb-6">
                        Applications
                    </h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                                {[
                                    {
                                        name: "Jigs & Fixtures",
                                        description: "Designing jigs, fixtures, tools, dies, molds, gauges, SPMs, material-handling systems, and installation structures."
                                    },
                                    {
                                        name: "Special purpose machine",
                                        description: "Custom-built machines designed for fast, precise, and high-efficiency operations."
                                    },
                                    {
                                        name: "Dies & Molds",
                                        description: "Precision tools used to shape materials into accurate, consistent, and repeatable products."
                                    },
                                    {
                                        name: "M/c installation structure",
                                        description: "Structures designed for safe, stable, and efficient machine installation."
                                    },
                                    {
                                        name: "Fine blanking tool",
                                        description: "High-precision tooling used to produce clean, accurate, and burr-free metal parts."
                                    },
                                    {
                                        name: "Inspection gauges",
                                        description: "Tools designed to measure and verify component accuracy with high precision."
                                    },
                                    {
                                        name: "Material handling equipment",
                                        description: "Equipment engineered to move, lift, and handle materials safely and efficiently"
                                    },
                                    {
                                        name: "Press tool",
                                        description: "Tooling used to cut or form sheet metal into precise shapes with high repeatability."
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer"
                                    >
                                        <div className="relative h-44 w-full">
                                            <img
                                                src={`/images/Manifacturing/${index + 1}.jpg`}
                                                alt={item.name}
                                                className="h-full w-full object-fill transition duration-300 group-hover:blur group-hover:brightness-75"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center px-4 text-black bg-[#68aad3] text-[16px]   text-center opacity-0 transition duration-300 group-hover:opacity-100 pointer-events-none ">
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
                    </div>
                </div>
            </div>
        </>
    );
}
