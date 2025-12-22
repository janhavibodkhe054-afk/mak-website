import { Link, useLocation } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";


export default function PrintingLayout({ children }) {
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
                    <h2 className="text-3xl text-blue-900 font-bold tracking-wide border-b pb-3">
                        Overview
                    </h2>
                    <div className="">
                        {/* LEFT CONTENT */}
                        <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                                {/* LEFT CONTENT */}
                                <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900 text-[18px]">
                                        <p>
                                            3D Printing, also known as Additive Manufacturing, is a cutting-edge process of creating three-dimensional objects by adding successive layers of material based on a digital file.

                                        </p>
                                        <p className="mt-3">
                                            At MAK Design Solutions, we support our design with rapid prototyping with high-precision 3D printing services that help design validation and refining before moving into mass production.

                                        </p>
                                    </div>
                                </div>

                                {/* RIGHT IMAGE COLUMN */}
                                <div className="space-y-48">
                                    <img
                                        src="/images/3DesignProto.jpg"
                                        alt="Product Design 1"
                                        className="rounded-xl shadow-md w-full object-cover "
                                    />
                                </div>


                            </div>



                            {/* ===================== 3D PRINTING PROCESS ===================== */}
                            <div className="space-y-10">

                                {/* HEADING */}
                                <h2 className="text-[22px] font-semibold tracking-wide border-b text-black pb-3">
                                    3D Printing Process
                                </h2>

                                {/* INTRO */}
                                <p className="text-[18px] text-gray-900 leading-relaxed max-w-4xl">
                                    Our 3D printing process ensures high precision, repeatability, and
                                    quality from concept to final part. Each stage is carefully optimized
                                    to deliver reliable and accurate printed components.
                                </p>

                                {/* PROCESS STEPS */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                                    {/* STEP 1 */}
                                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900">
                                        <div className="text-blue-900 text-3xl font-bold mb-3">01</div>
                                        <h3 className="text-[20px] font-semibold mb-2">
                                            CAD Model Creation
                                        </h3>
                                        <p className="text-gray-700 text-[18px] leading-relaxed">
                                            Develop a precise 3D model using CAD software or generate it through
                                            advanced 3D scanning techniques.
                                        </p>
                                    </div>

                                    {/* STEP 2 */}
                                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900">
                                        <div className="text-blue-900 text-3xl font-bold mb-3">02</div>
                                        <h3 className="text-[20px] font-semibold mb-2">
                                            Slicing
                                        </h3>
                                        <p className="text-gray-700 text-[18px] leading-relaxed">
                                            Convert the 3D design into G-code using slicer software, defining
                                            layer height, speed, and print parameters.
                                        </p>
                                    </div>

                                    {/* STEP 3 */}
                                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900">
                                        <div className="text-blue-900 text-3xl font-bold mb-3">03</div>
                                        <h3 className="text-[20px] font-semibold mb-2">
                                            Printing
                                        </h3>
                                        <p className="text-gray-700 text-[18px] leading-relaxed">
                                            Advanced printers follow the G-code to deposit, fuse, or solidify
                                            material layer by layer until the object is complete.
                                        </p>
                                    </div>

                                    {/* STEP 4 */}
                                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900">
                                        <div className="text-blue-900 text-3xl font-bold mb-3">04</div>
                                        <h3 className="text-[20px] font-semibold mb-2">
                                            Post-Processing
                                        </h3>
                                        <p className="text-gray-700 text-[18px] leading-relaxed">
                                            Cleaning, finishing, and coloring the printed object to meet desired
                                            surface quality and functional standards.
                                        </p>
                                    </div>

                                </div>

                                {/* CAPABILITIES BOX */}
                                <div className="bg-white p-6 rounded-xl border-l-4 border-blue-900">
                                    <h3 className="text-[22px] font-semibold mb-3 text-gray-900">
                                        Printing Capabilities
                                    </h3>
                                    <p className="text-[18px] text-black leading-relaxed">
                                        We can print objects up to
                                        1000 × 1000 × 1000 mm
                                        with dimensional accuracy of
                                        &lt; 0.2 mm
                                        We support a wide range of plastic materials including
                                        ABS, PLA, PET, PP, and more—customized to meet
                                        specific customer requirements.
                                    </p>
                                </div>

                            </div>

                            {/* ===================== BENEFITS – ALTERNATE DESIGN ===================== */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start bg-white p-6">

                                {/* LEFT HIGHLIGHT PANEL */}
                                <div className="lg:col-span-1 bg-blue-900 mt-32 text-white p-8 rounded-2xl shadow-md">
                                    <h2 className="text-2xl font-bold mb-4">
                                        Benefits of 3D Printing/Rapid prototyping

                                    </h2>

                                </div>

                                {/* RIGHT BENEFITS LIST */}
                                <div className="lg:col-span-2 space-y-6">

                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold">
                                            1
                                        </div>
                                        <div>
                                            <h3 className="text-[20px] font-semibold">
                                                Design Flexibility
                                            </h3>
                                            <p className="text-gray-700 text-[18px] leading-relaxed">
                                                Create intricate and complex geometries that are not possible
                                                with traditional manufacturing techniques.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 flex items-center  bg-blue-900 text-white  justify-center rounded-full  font-bold">
                                            2
                                        </div>
                                        <div>
                                            <h3 className="text-[20px] font-semibold">
                                                Cost-Effective for Low Volume
                                            </h3>
                                            <p className="text-gray-700 text-[18px] leading-relaxed">
                                                Avoid expensive tooling and molds, making it ideal for
                                                prototyping and small batch production.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white  font-bold">
                                            3
                                        </div>
                                        <div>
                                            <h3 className="text-[20px] font-semibold">
                                                Faster Prototyping
                                            </h3>
                                            <p className="text-gray-700 text-[18px] leading-relaxed">
                                                Significantly reduces product development time by enabling
                                                rapid iterations and quick design validation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white  font-bold">
                                            4
                                        </div>
                                        <div>
                                            <h3 className="text-[20px] font-semibold">
                                                Reduced Waste
                                            </h3>
                                            <p className="text-gray-700 text-[18px] leading-relaxed">
                                                Additive manufacturing uses only the material required,
                                                making it a more sustainable production method.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white  font-bold">
                                            5
                                        </div>
                                        <div>
                                            <h3 className="text-[20px] font-semibold">
                                                Mass Customization
                                            </h3>
                                            <p className="text-gray-700 text-[18px] leading-relaxed">
                                                Enables creation of personalized and custom-fit products
                                                tailored to unique customer requirements.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Application */}
                    <div
                        id="applications"
                        ref={applicationsRef}
                    >
                        <h1 className="text-3xl text-blue-900 font-bold tracking-wide border-b pb-3">Application</h1>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

                        {/* ---------- FIRST ROW : 4 CARDS ---------- */}
                        {[
                            {
                                name: "Rapid prototyping",
                                description: " Transforming ideas into tangible models quickly and efficiently.",
                            },
                            {
                                name: "Research",
                                description: " Advancing knowledge with precise 3D printing experiments and studies.",
                            },
                            {
                                name: "Product exhibits",
                                description: " Bringing product designs to life for display and evaluation.",
                            },
                            {
                                name: "Education & Research",
                                description: " Enhancing learning with hands-on 3D printed models.",
                            },
                            {
                                name: "Medical applications",
                                description: " Creating accurate anatomical models and custom medical devices.",
                            },

                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer"
                            >
                                <div className="relative h-44 w-full">
                                    <img
                                        src={`/images/3DPrinting/${index + 1}.jpg`}
                                        alt={item.name}
                                        className="h-full w-full object-fill transition duration-300 group-hover:blur group-hover:brightness-75"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center px-4 text-black  bg-[#68aad3] text-[16px] text-center opacity-0 transition duration-300 group-hover:opacity-100">
                                        {item.description}
                                    </div>
                                </div>
                                <div className="bg-blue-900 text-white text-center py-2 text-md font-medium">
                                    {item.name}
                                </div>
                            </div>
                        ))}

                        {/* ---------- SECOND ROW : CENTERED 4 CARDS ---------- */}
                        <div className="col-span-full flex justify-center gap-6">
                            {[
                                {
                                    name: "Cultural heritage",
                                    description: "Preserving history through detailed 3D replicas of monuments.",
                                },
                                {
                                    name: "Art & Jewellery",
                                    description: "Crafting intricate designs and personalized accessories with precision.",
                                },
                                {
                                    name: "Toys & Gifts",
                                    description: "Producing unique, creative, and customized items for fun and gifting.",
                                },
                                {
                                    name: "Apparel",
                                    description: "Innovating fashion with 3D printed clothing and accessories.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    style={{ width: 'calc((100% - 96px) / 5)' }}
                                    className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer w-full max-w-[260px]"
                                >
                                    <div className="relative h-44 w-full">
                                        <img
                                            src={`/images/3DPrinting/${index + 6}.jpg`}
                                            alt={item.name}
                                            className="h-full w-full object-fill transition duration-300 group-hover:blur group-hover:brightness-75"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center px-4 text-black  bg-[#68aad3] text-[16px] text-center opacity-0 transition duration-300 group-hover:opacity-100">
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
            </div >
        </div>
    );
}




