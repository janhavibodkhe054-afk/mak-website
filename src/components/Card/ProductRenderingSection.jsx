// import { Link, useLocation } from "react-router-dom";
// import React, { useRef, useState, useEffect } from "react";
// import ProductRenderingCard from "./ProductRenderingCard";
// import Prod_Rendering2 from '../../../public/images/Prod_Rendering2.jpg'
// import Prod_Rendering3 from '../../../public/images/Prod_Rendering3.jpg'

// export default function ProductRenderingSection() {
//     const location = useLocation();

//     const overviewRef = useRef(null);
//     const processRef = useRef(null);
//     const applicationsRef = useRef(null);

//     const tabs = [
//         { id: "overview", label: "Overview", ref: overviewRef },
//         { id: "process", label: "Process Flow", ref: processRef },
//         { id: "applications", label: "Applications", ref: applicationsRef },
//     ];

//     const [activeTab, setActiveTab] = useState("overview");

//     const scrollToSection = (ref, id) => {
//         if (!ref.current) return;
//         const yOffset = -110;
//         const y =
//             ref.current.getBoundingClientRect().top +
//             window.pageYOffset +
//             yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//         setActiveTab(id);
//     };

//     // Scroll Spy
//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPos = window.scrollY + 160;

//             const current = tabs
//                 .map((tab) => ({
//                     id: tab.id,
//                     top: tab.ref.current?.offsetTop || 0,
//                 }))
//                 .filter((sec) => sec.top <= scrollPos)
//                 .sort((a, b) => b.top - a.top)[0];

//             if (current && current.id !== activeTab) {
//                 setActiveTab(current.id);
//             }
//         };

//         window.addEventListener("scroll", handleScroll, { passive: true });
//         handleScroll();
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [activeTab, tabs]);

//     const services = [
//         { name: "Mechanical Product design", path: "/services/product-design-dva" },
//         { name: "Reverse Engineering", path: "/services/reverse-engineering" },
//         { name: "3D scanning & Product Benchmarking", path: "/services/3d-scanning-benchmarking" },
//         { name: "CAD data conversion", path: "/services/cad-data-conversion" },
//         { name: "Finite Element Analysis (FEA)", path: "/services/fea" },
//         { name: "3D Printing/Rapid prototyping", path: "/services/3d-printing-rapid-prototyping" },
//         { name: "Manufacturing/Prototyping", path: "/services/manufacturing-prototyping" },
//         { name: "Product rendering", path: "/services/product-rendering-technical-animation" },
//     ];

//     return (
//         <div className="pt-6">
//             <div className="w-full flex gap-10 px-6 md:px-12 bg-gray-100">

//                 {/* LEFT SIDEBAR */}
//                 <aside className="w-64 bg-white p-6 rounded-2xl shadow-md border sticky top-24 h-fit">
//                     <h3 className="text-[22px] font-bold mb-4 text-gray-800">
//                         Our Services
//                     </h3>

//                     <div className="space-y-3">
//                         {services.map((s, i) => {
//                             const isActive = location.pathname === s.path;
//                             return (
//                                 <Link
//                                     key={i}
//                                     to={s.path}
//                                     className={`block px-4 py-3 rounded-lg transition border 
//                                     ${isActive
//                                             ? "bg-blue-900 text-white border-blue-900 shadow"
//                                             : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
//                                         }`}
//                                 >
//                                     <span className="text-[16px] font-medium leading-snug">
//                                         {s.name === "Manufacturing/Prototyping" ? (
//                                             <>
//                                                 Manufacturing/<wbr />Prototyping
//                                             </>
//                                         ) : (
//                                             s.name
//                                         )}
//                                     </span>
//                                 </Link>
//                             );
//                         })}
//                     </div>
//                 </aside>

//                 {/* RIGHT CONTENT */}
//                 <main className="flex-1">

//                     {/* TABS */}
//                     <div className="flex gap-4 mb-10 sticky top-[125px] z-40 bg-gray-100 py-4">
//                         {tabs.map((t) => (
//                             <button
//                                 key={t.id}
//                                 onClick={() => scrollToSection(t.ref, t.id)}
//                                 className={`px-5 py-2 rounded-md font-semibold transition
//                                 ${activeTab === t.id
//                                         ? "bg-blue-900 text-white"
//                                         : "bg-white text-blue-900 hover:bg-blue-100"
//                                     }`}
//                             >
//                                 {t.label}
//                             </button>
//                         ))}
//                     </div>

//                     {/* OVERVIEW */}
//                     <section id="overview" ref={overviewRef} className="space-y-12">
//                         <h2 className="text-3xl text-blue-900 font-bold border-b pb-3">
//                             Overview
//                         </h2>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                             {/* LEFT */}
//                             <div className="space-y-8 text-[18px] text-gray-700">
//                                 <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-900">
//                                     <p>
//                                         At <strong>MAK Design Solutions</strong>, we specialize in Product Rendering services that transform ideas into highly realistic digital visuals. Our solutions are widely used in industrial design, advertising, marketing, cataloguing, and          e-commerce to showcase how a product will look and function — even before it is physically manufactured.

//                                     </p>
//                                 </div>

//                                 <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-900">
//                                     <h3 className="text-[22px] font-semibold mb-3">
//                                         Product Rendering
//                                     </h3>
//                                     <p className="text-[16px]">Our product rendering services create photo-realistic images in a virtual environment, helping businesses visualize and market their products effectively.</p>
//                                     <ul className="list-disc pl-6 pt-4 text-[18px] space-y-2">
//                                         <li>Conceptualization & Planning </li>
//                                         <li>3D Modeling </li>
//                                         <li>Texturing & Lighting </li>
//                                         <li>High-Quality Rendering </li>
//                                         <li>Post-Production & Quality Check </li>
//                                         <li>Integration with Marketing Materials</li>
//                                     </ul>
//                                 </div>

//                                 {/* key benefits */}
//                                 <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-900">
//                                     <h3 className="text-[22px] font-semibold mb-3">
//                                         Key Benefits of Product Rendering
//                                     </h3>
//                                     <p className="text-[16px]">Our product rendering services create photo-realistic images in a virtual environment, helping businesses visualize and market their products effectively.</p>
//                                     <ul className="list-disc pl-6 pt-4 text-[18px] space-y-2">
//                                         <li>
//                                             Cost & Time Saving – Eliminates the need for physical prototypes and expensive photoshoots
//                                         </li>
//                                         <li>
//                                             Enhanced Marketing & Visualization – Realistic product images for brochures, catalogues, and online sales.
//                                         </li>
//                                         <li>
//                                             Fast Iterations – Quick design changes for better flexibility.
//                                         </li>
//                                         <li>
//                                             Improved User Experience – Clear visualization of products boosts customer confidence and sales.

//                                         </li>
//                                         <li>
//                                             Sustainability – Reduces material waste and minimizes travel for photoshoots.
//                                         </li>

//                                     </ul>
//                                 </div>
//                             </div>

//                             {/* RIGHT IMAGES */}
//                             <div className="space-y-8">
//                                 <img src="/Prod_Rendering1.jpg" className="rounded-xl shadow-md w-full" />
//                                 <img src={Prod_Rendering2} className="rounded-xl shadow-md w-full" />
//                                 <img src={Prod_Rendering3} className="rounded-xl shadow-md w-full" />
//                             </div>
//                         </div>
//                     </section>

//                     {/* APPLICATIONS */}
//                     <section
//                         id="applications"
//                         ref={applicationsRef}
//                         className="mt-24 space-y-8"
//                     >
//                         <h2 className="text-3xl font-bold text-blue-900 border-b pb-3">
//                             Applications
//                         </h2>

//                         <ProductRenderingCard />
//                     </section>
//                 </main>
//             </div>
//         </div>
//     );
// }



import { Link, useLocation } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import ProductRenderingCard from "./ProductRenderingCard";

export default function ProductRenderingSection() {
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
        if (!ref.current) return;
        const yOffset = -110;
        const y =
            ref.current.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setActiveTab(id);
    };

    // Scroll Spy
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 160;

            const current = tabs
                .map((tab) => ({
                    id: tab.id,
                    top: tab.ref.current?.offsetTop || 0,
                }))
                .filter((sec) => sec.top <= scrollPos)
                .sort((a, b) => b.top - a.top)[0];

            if (current && current.id !== activeTab) {
                setActiveTab(current.id);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeTab, tabs]);

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
        <div className="pt-6">
            <div className="w-full flex gap-10 px-6 md:px-12 bg-gray-100">

                {/* LEFT SIDEBAR */}
                <aside className="w-64 bg-white p-6 rounded-2xl shadow-md border sticky top-24 h-fit">
                    <h3 className="text-[22px] font-bold mb-4 text-gray-800">
                        Our Services
                    </h3>

                    <div className="space-y-3">
                        {services.map((s, i) => {
                            const isActive = location.pathname === s.path;
                            return (
                                <Link
                                    key={i}
                                    to={s.path}
                                    className={`block px-4 py-3 rounded-lg transition border 
                                    ${isActive
                                            ? "bg-blue-900 text-white border-blue-900 shadow"
                                            : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                                        }`}
                                >
                                    <span className="text-[16px] font-medium leading-snug">
                                        {s.name === "Manufacturing/Prototyping" ? (
                                            <>
                                                Manufacturing/<wbr />Prototyping
                                            </>
                                        ) : (
                                            s.name
                                        )}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </aside>

                {/* RIGHT CONTENT */}
                <main className="flex-1">

                    {/* TABS */}
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

                    {/* OVERVIEW */}
                    <section id="overview" ref={overviewRef} className="space-y-12">
                        <h2 className="text-5xl md:text-6xl text-[#1e3a8a] font-bold tracking-wide border-b pb-4">

                        Overview
                    </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                            {/* LEFT */}
                            <div className="space-y-8 text-[18px] text-gray-700">
                                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-900">
                                    <p>
                                        At <strong>MAK Design Solutions</strong>, we specialize in Product Rendering services that transform ideas into highly realistic digital visuals. Our solutions are widely used in industrial design, advertising, marketing, cataloguing, and e-commerce to showcase how a product will look and function — even before it is physically manufactured.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-900">
                                    <h3 className="text-[22px] font-semibold mb-3">
                                        Product Rendering
                                    </h3>
                                    <p className="text-[18px]">Our product rendering services create photo-realistic images in a virtual environment, helping businesses visualize and market their products effectively.</p>
                                    <ul className="list-disc pl-6 pt-4 text-[18px] space-y-2">
                                        <li>Conceptualization & Planning</li>
                                        <li>3D Modeling</li>
                                        <li>Texturing & Lighting</li>
                                        <li>High-Quality Rendering</li>
                                        <li>Post-Production & Quality Check</li>
                                        <li>Integration with Marketing Materials</li>
                                    </ul>
                                </div>

                                {/* key benefits */}
                                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-900">
                                    <h3 className="text-[22px] font-semibold mb-3">
                                        Key Benefits of Product Rendering
                                    </h3>
                                    <p className="text-[18px]">Our product rendering services create photo-realistic images in a virtual environment, helping businesses visualize and market their products effectively.</p>
                                    <ul className="list-disc pl-6 pt-4 text-[18px] space-y-2">
                                        <li>
                                            Cost & Time Saving – Eliminates the need for physical prototypes and expensive photoshoots
                                        </li>
                                        <li>
                                            Enhanced Marketing & Visualization – Realistic product images for brochures, catalogues, and online sales.
                                        </li>
                                        <li>
                                            Fast Iterations – Quick design changes for better flexibility.
                                        </li>
                                        <li>
                                            Improved User Experience – Clear visualization of products boosts customer confidence and sales.
                                        </li>
                                        <li>
                                            Sustainability – Reduces material waste and minimizes travel for photoshoots.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* RIGHT IMAGES - Reduced size and aligned */}
                            <div className="space-y-32 flex flex-col items-center">
                                <div className="w-4/5 ">
                                    <img
                                        src="/Prod_Rendering1.jpg"
                                        alt="Product Rendering 1"
                                        className="rounded-xl shadow-md w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="w-4/5 ">
                                    <img
                                        src="/images/Prod_Rendering2.jpg"
                                        alt="Product Rendering 2"
                                        className="rounded-xl shadow-md w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="w-4/5">
                                    <img
                                        src="/images/Prod_Rendering3.jpg"
                                        alt="Product Rendering 3"
                                        className="rounded-xl shadow-md w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* APPLICATIONS */}
                    <section
                        id="applications"
                        ref={applicationsRef}
                        className="mt-24 space-y-8"
                    >
                        <h2 className="text-3xl text-[#1e3a8a] font-bold tracking-wide border-b pb-3 mb-6">
                        Applications
                    </h2>

                        <ProductRenderingCard />
                    </section>
                </main>
            </div>
        </div>
    );
}