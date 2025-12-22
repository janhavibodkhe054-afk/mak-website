


// import React from "react";
// import { motion } from "framer-motion";

// export default function WhatMakesUsDifferent() {
//   const data = [
//     {
//       // img: "https://cdn-icons-png.flaticon.com/512/3063/3063826.png",
//       title: "One-Stop Engineering Partner",
//       desc: "End-to-end engineering services from concept to delivery.",
//       points: [
//         "Design, CAD & simulation",
//         "Prototyping & validation",
//         "Marketing-ready assets",
//       ],
//     },
//     {
//       // img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//       title: "Customer-First Approach",
//       desc: "We collaborate closely as part of your internal team.",
//       points: [
//         "Clear communication",
//         "Flexible engagement",
//         "On-time delivery",
//       ],
//     },
//     {
//       // img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
//       title: "Industry Expertise",
//       desc: "Deep experience across engineering domains.",
//       points: [
//         "Manufacturing & automation",
//         "Industrial machinery",
//         "Product development",
//       ],
//     },
//     {
//       // img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
//       title: "Quality & Trust",
//       desc: "Built on precision, reliability, and confidentiality.",
//       points: [
//         "Quality-controlled processes",
//         "Standards compliance",
//         "Secure data handling",
//       ],
//     },
//     {
//       // img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
//       title: "Innovation & Affordability",
//       desc: "High-value solutions without unnecessary cost.",
//       points: [
//         "Optimized workflows",
//         "Cost-efficient execution",
//         "Scalable services",
//       ],
//     },
//   ];

//   return (
//     <section className="relative w-full py-12 px-6 md:px-16 lg:px-28 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 overflow-hidden">

//       {/* Enhanced decorative elements */}
//       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl"></div>
//       <div className="absolute top-1/4 -right-40 w-[450px] h-[450px] bg-cyan-200/30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-sky-200/25 rounded-full blur-3xl"></div>

//       <div className="relative z-10 max-w-6xl mx-auto">

//         {/* Enhanced Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-10"
//         >
//           <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
//             What Makes Us Different ?
//           </h2>
//           {/* <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div> */}
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">

//           {/* Enhanced Vertical Line */}
//           <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 transform -translate-x-1/2 shadow-sm"></div>

//           <div className="-space-y-20 md:-space-y-23">
//             {data.map((item, i) => {
//               const isLeft = i % 2 === 0;
//               return (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                   viewport={{ once: true }}
//                   className={`relative flex ${isLeft ? "justify-start" : "justify-end"
//                     }`}
//                 >
//                   {/* Enhanced Timeline Dot with pulse */}
//                   <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
//                     <div className="relative">
//                       <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full shadow-lg"></div>
//                       <div className="absolute inset-0 w-5 h-5 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
//                     </div>
//                   </div>

//                   {/* Enhanced Card */}
//                   <motion.div
//                     whileHover={{ scale: 1.03, y: -5 }}
//                     transition={{ duration: 0.3 }}
//                     className={`w-full sm:w-[45%] bg-[#27314b] backdrop-blur-lg border-2 border-blue-100 rounded-2xl p-5 shadow-[0_8px_30px_rgba(14,165,233,0.15)] hover:shadow-[0_12px_40px_rgba(14,165,233,0.25)] transition-all duration-300 ${isLeft ? "mr-auto" : "ml-auto"
//                       }`}
//                   >
//                     {/* Header */}
//                     <div className="flex items-start gap-3 mb-3">
//                       <div className="flex-1">
//                         <h3 className=" text-[22px] font-bold text-white mb-1">
//                           {item.title}
//                         </h3>
//                         <p className="text-[18px] text-[#679dd8] font-medium">
//                           {item.desc}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Points */}
//                     <ul className="space-y-2 text-[18px] text-white">
//                       {item.points.map((point, idx) => (
//                         <motion.li
//                           key={idx}
//                           initial={{ opacity: 0, x: -10 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           transition={{ delay: 0.1 * idx }}
//                           viewport={{ once: true }}
//                           className="flex items-start gap-3 group"
//                         >
//                           <span className="mt-3 w-2 h-2 bg-gradient-to-br from-whitw to-white rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></span>
//                           <span className="leading-relaxed">{point}</span>
//                         </motion.li>
//                       ))}
//                     </ul>

//                     {/* Subtle corner accent */}
//                     <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-tr-2xl"></div>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Bottom decorative wave */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sky-100/50 to-transparent"></div>
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";

export default function WhatMakesUsDifferent() {
  const data = [
    {
      title: "One-Stop Engineering Partner",
      desc: "End-to-end engineering services from concept to delivery.",
      points: [
        "Design, CAD & simulation",
        "Prototyping & validation",
        "Marketing-ready assets",
      ],
    },
    {
      title: "Customer-First Approach",
      desc: "We collaborate closely as part of your internal team.",
      points: [
        "Clear communication",
        "Flexible engagement",
        "On-time delivery",
      ],
    },
    {
      title: "Industry Expertise",
      desc: "Deep experience across engineering domains.",
      points: [
        "Manufacturing & automation",
        "Industrial machinery",
        "Product development",
      ],
    },
    {
      title: "Quality & Trust",
      desc: "Built on precision, reliability, and confidentiality.",
      points: [
        "Quality-controlled processes",
        "Standards compliance",
        "Secure data handling",
      ],
    },
    {
      title: "Innovation & Affordability",
      desc: "High-value solutions without unnecessary cost.",
      points: [
        "Optimized workflows",
        "Cost-efficient execution",
        "Scalable services",
      ],
    },
  ];

  return (
    <section className="relative w-full py-12 px-6 md:px-16 lg:px-28 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 overflow-hidden">

      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 -right-40 w-[450px] h-[450px] bg-cyan-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-sky-200/25 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
            What Makes Us Different ?
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 transform -translate-x-1/2 shadow-sm"></div>

          <div className="-space-y-20 md:-space-y-23">
            {data.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full shadow-lg"></div>
                      <div className="absolute inset-0 w-5 h-5 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`relative w-full sm:w-[45%] bg-[#27314b] backdrop-blur-lg 
                    border-2 border-blue-100 rounded-2xl p-5
                    shadow-[0_8px_30px_rgba(14,165,233,0.15)]
                    hover:shadow-[0_12px_40px_rgba(14,165,233,0.25)]
                    transition-all duration-300
                    ${isLeft ? "mr-auto" : "ml-auto"}`}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-1">
                        <h3 className="text-[22px] font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[18px] text-[#679dd8] font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Points */}
                    <ul className="space-y-2 text-[18px] text-white">
                      {item.points.map((point, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 group"
                        >
                          <span className="mt-3 w-2 h-2 bg-white rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                          <span className="leading-relaxed">{point}</span>
                        </motion.li>
                      ))}
                    </ul>

                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sky-100/50 to-transparent"></div>
    </section>
  );
}
