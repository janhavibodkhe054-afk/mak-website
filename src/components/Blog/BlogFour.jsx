import React from "react";

const BlogCardFour = () => {
    return (
        <div className="w-full min-h-screen bg-gray-900 text-gray-200 py-16 px-4">

            {/* ===== TITLE ===== */}
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
                Manufacturing Trends That Are Changing the Industry
            </h1>

            {/* ===== IMAGE ===== */}
            <div className="flex justify-center mb-10">
                <img
                    src="https://knowhow.distrelec.com/wp-content/uploads/2022/01/industrial-manufacturing.jpg"
                    alt="Smart Manufacturing Trends"
                    className="rounded-xl shadow-lg object-cover w-full max-w-3xl h-[280px]"
                />
            </div>

            {/* ===== CONTENT ===== */}
            <div className="max-w-4xl mx-auto leading-8 text-gray-300 space-y-6">

                <p className="text-lg italic text-gray-400">
                    From Production Lines to Intelligent Ecosystems
                </p>

                <p>
                    Manufacturing is no longer defined by machines alone—it is defined by intelligence,
                    adaptability, and integration. Once driven primarily by scale and repetition, the
                    industry is now being reshaped by digital technologies, data-driven decisions, and
                    a renewed focus on efficiency and sustainability.
                </p>

                {/* ---- Section 1 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Digital Manufacturing and Smart Factories
                </h2>
                <p>
                    The rise of smart factories marks a shift from reactive operations to predictive and
                    autonomous manufacturing systems. Digital manufacturing integrates sensors, software,
                    and connectivity to create real-time visibility across production lines—enabling
                    predictive maintenance and performance optimization.
                </p>

                {/* ---- Section 2 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Additive Manufacturing Beyond Prototyping
                </h2>
                <p>
                    Additive manufacturing has evolved beyond prototyping into low-volume production,
                    tooling, and end-use parts. It enables complex geometries, reduces material waste,
                    and supports faster customization.
                </p>

                {/* ---- Section 3 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Simulation-Led Design and Virtual Validation
                </h2>
                <p>
                    Simulation tools such as Finite Element Analysis and digital twins allow manufacturers
                    to validate designs virtually. This reduces physical prototyping, detects failures
                    early, and accelerates product development.
                </p>

                {/* ---- Section 4 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Automation with Human-Centric Integration
                </h2>
                <p>
                    Modern automation focuses on collaboration between humans and machines. Collaborative
                    robots enhance productivity, safety, and accuracy while supporting skilled human
                    involvement.
                </p>

                {/* ---- Section 5 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Mass Customization as a Competitive Advantage
                </h2>
                <p>
                    Manufacturers are adopting flexible systems to deliver customized products at scale.
                    Modular designs and digital configuration tools make personalization efficient and
                    cost-effective.
                </p>

                {/* ---- Section 6 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Sustainable and Responsible Manufacturing
                </h2>
                <p>
                    Sustainability has become a strategic priority. Manufacturers are optimizing
                    materials, reducing waste, improving energy efficiency, and lowering environmental
                    impact through smarter engineering practices.
                </p>

                {/* ---- Section 7 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Data-Driven Decision Making
                </h2>
                <p>
                    Manufacturing data is now a critical asset. Advanced analytics and AI-driven insights
                    improve quality control, predict demand, reduce downtime, and support informed
                    decision-making.
                </p>

                {/* ---- Section 8 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Integrated Design-to-Manufacturing Workflows
                </h2>
                <p>
                    Seamless integration from design to production ensures fewer errors, faster launches,
                    and improved product quality. Manufacturing is evolving into a connected digital
                    ecosystem.
                </p>

                {/* ---- Conclusion ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Final Perspective
                </h2>
                <p>
                    Manufacturing success today depends on intelligence, agility, and innovation.
                    Organizations that embrace digital transformation, sustainability, and integrated
                    workflows will lead the next era of industrial progress.
                </p>

            </div>
        </div>
    );
};

export default BlogCardFour;