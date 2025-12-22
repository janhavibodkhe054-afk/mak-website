// import React from 'react'

// const AboutVision = () => {
//     return (
//         <>
//             {
//                 [
//                     {
//                         title: "Our Vision",
//                         text: (
//                             <>
//                                 <p className="text-gray-700 leading-relaxed  text-[18px]">
//                                     To shape the future of engineering by turning bold ideas into intelligent, high-precision solutions that perform, endure, and inspire.
//                                 </p>

//                             </>
//                         ),
//                         img: "/Vision.jpg",
//                         reverse: true,
//                     },
//                     {
//                         title: "Our Mission",
//                         text: (
//                             <p className="text-gray-700 leading-relaxed  text-[18px]">
//                                 Our mission is to deliver cutting-edge engineering and digital manufacturing solutions that exceed expectations. With innovation and excellence, we turn concepts into powerful realities.
//                             </p>
//                         ),
//                         img: "/Mission.jpg",
//                         reverse: false,
//                     },
//                     {
//                         title: "Our Goal",
//                         text: (
//                             <p className="text-gray-700 leading-relaxed text-[18px]">
//                                 Customer Success, Ethics & Integrity, Transparency, Ownership, and Respect drive everything we do.
//                             </p>
//                         ),
//                         img: "/Goal.jpg",
//                         reverse: true,
//                     },
//                 ].map((section, i) => (
//                     <div
//                         key={i}
//                         className={`grid md:grid-cols-2 gap-12 items-center 
//           bg-gradient-to-br from-white via-gray-50 to-gray-100 
//           p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]
//           border border-gray-200
//           relative overflow-hidden
//           transition-all duration-700 ease-out
//           animate-fadeSlide`}
//                     >
//                         {/* Accent corner gradient */}
//                         {/* <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#062a66]/20 to-transparent rounded-br-full"></div> */}
//                         <div
//                             className={`absolute top-0 w-32 h-32
//             bg-gradient-to-br from-[#062a66]/20 to-transparent
//             ${section.title === "Our Mission"
//                                     ? "right-0 rounded-bl-full"
//                                     : "left-0 rounded-br-full"
//                                 }`}
//                         ></div>

//                         {/* Conditionally reverse image/text */}
//                         {!section.reverse ? (
//                             <>
//                                 {/* Text */}
//                                 <div className="z-10">
//                                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                                         {section.title}
//                                     </h2>
//                                     {section.text}
//                                 </div>

//                                 {/* Image */}
//                                 <img
//                                     src={section.img}
//                                     alt={section.title}
//                                     className="w-full h-80 object-cover rounded-xl shadow-lg 
//                 transition-transform duration-500 hover:scale-[1.02]"
//                                 />
//                             </>
//                         ) : (
//                             <>
//                                 {/* Image */}
//                                 <img
//                                     src={section.img}
//                                     alt={section.title}
//                                     className="w-full h-80 object-cover rounded-xl shadow-lg 
//                 transition-transform duration-500 hover:scale-[1.02]"
//                                 />

//                                 {/* Text */}
//                                 <div className="z-10">
//                                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                                         {section.title}
//                                     </h2>
//                                     {section.text}
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                 ))
//             }
//         </>
//     )

// }

// export default AboutVision

import React from "react";

const AboutVision = () => {
    return (
        <>
            {[
                {
                    title: "Our Vision",
                    text: (
                        <p className="text-gray-700 leading-relaxed text-[18px]">
                            To shape the future of engineering by turning bold ideas
                            into intelligent, high-precision solutions that perform,
                            endure, and inspire.
                        </p>
                    ),
                    img: "/Vision.jpg",
                    reverse: true,
                },
                {
                    title: "Our Mission",
                    text: (
                        <p className="text-gray-700 leading-relaxed text-[18px]">
                            Our mission is to deliver cutting-edge engineering and
                            digital manufacturing solutions that exceed expectations.
                            With innovation and excellence, we turn concepts into
                            powerful realities.
                        </p>
                    ),
                    img: "/Mission.jpg",
                    reverse: false,
                },
                {
                    title: "Our Goal",
                    text: (
                        <p className="text-gray-700 leading-relaxed text-[18px]">
                            Customer Success, Ethics & Integrity, Transparency,
                            Ownership, and Respect drive everything we do.
                        </p>
                    ),
                    img: "/Goal.jpg",
                    reverse: true,
                },
            ].map((section, i) => (
                <div
                    key={i}
                    className="grid md:grid-cols-2 gap-12 items-center
                    bg-gradient-to-br from-white via-gray-50 to-gray-100
                    p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                    border border-gray-200 relative overflow-hidden
                    transition-all duration-700 ease-out"
                >
                    {/* Accent Gradient — aligned to TEXT side */}
                    <div
                        className={`absolute top-0 w-32 h-32 
                        bg-gradient-to-br from-[#062a66]/20 to-transparent
                        ${section.reverse
                                ? "right-0 rounded-bl-full"
                                : "left-0 rounded-br-full"
                            }`}
                    ></div>

                    {!section.reverse ? (
                        <>
                            {/* TEXT */}
                            <div className="z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    {section.title}
                                </h2>
                                {section.text}
                            </div>

                            {/* IMAGE */}
                            <img
                                src={section.img}
                                alt={section.title}
                                className="w-full h-80 object-cover rounded-xl shadow-lg
                                transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </>
                    ) : (
                        <>
                            {/* IMAGE */}
                            <img
                                src={section.img}
                                alt={section.title}
                                className="w-full h-80 object-cover rounded-xl shadow-lg
                                transition-transform duration-500 hover:scale-[1.02]"
                            />

                            {/* TEXT */}
                            <div className="z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    {section.title}
                                </h2>
                                {section.text}
                            </div>
                        </>
                    )}
                </div>
            ))}
        </>
    );
};

export default AboutVision;
