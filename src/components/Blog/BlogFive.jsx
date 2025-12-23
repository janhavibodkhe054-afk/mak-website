import React from "react";

const BlogFive = () => {
    return (
        <div className="w-full min-h-screen bg-gray-900 text-gray-200 py-16 px-4">

            {/* ===== TITLE ===== */}
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
                Tear-Down Analysis: A Powerful Tool for Product Optimization
            </h1>

            {/* ===== IMAGE ===== */}
            <div className="flex justify-center mb-10">
                <img
                    src="https://mlgg63gqdcko.i.optimole.com/cb:F7HO.14b36/w:auto/h:auto/q:mauto/ig:avif/https://www.pemnet.com/wp-content/uploads/sites/2/2022/06/teardown-sq.jpg"
                    alt="Tear-Down Analysis"
                    className="rounded-xl shadow-lg object-cover w-full max-w-3xl h-[280px]"
                />
            </div>

            {/* ===== CONTENT ===== */}
            <div className="max-w-4xl mx-auto leading-8 text-gray-300 space-y-6">

                <p className="text-lg italic text-gray-400">
                    Learning from What Already Works
                </p>

                <p>
                    Innovation does not always begin with invention. Often, it begins with observation, analysis, and understanding. Tear-down analysis is a powerful engineering approach that enables organizations to study existing products and extract valuable insights to optimize future designs.
                </p>

                {/* ---- Section 1 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    What Is Tear-Down Analysis?
                </h2>
                <p>
                    Tear-down analysis is a structured process of systematically disassembling a product to study its components, materials, manufacturing methods, assembly logic, and functional intent. The goal is not to copy, but to understand why design decisions were made.
                </p>

                {/* ---- Section 2 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Design Intelligence Through Deconstruction
                </h2>
                <p>
                    Every product carries embedded engineering intelligence. Tear-down analysis reveals component architecture, material selection strategies, fastening methods, tolerances, and functional priorities, helping engineers identify strengths and weaknesses.
                </p>

                {/* ---- Section 3 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Driving Cost Optimization Without Compromising Quality
                </h2>
                <p>
                    Through Value Analysis and Value Engineering, tear-down analysis helps identify overdesigned parts, reduce component count, simplify assemblies, and optimize materials—achieving cost reduction through smarter design.
                </p>

                {/* ---- Section 4 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Benchmarking for Competitive Advantage
                </h2>
                <p>
                    Tear-down analysis supports objective product benchmarking. By comparing products on performance, cost, weight, and manufacturability, organizations can identify market gaps and improvement opportunities.
                </p>

                {/* ---- Section 5 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Enhancing Manufacturability and Assembly Efficiency
                </h2>
                <p>
                    The analysis highlights design-for-manufacturing and design-for-assembly improvements, enabling faster production, reduced labor time, improved quality, and scalable manufacturing processes.
                </p>

                {/* ---- Section 6 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Reducing Design Risks Early
                </h2>
                <p>
                    Learning from proven products minimizes uncertainty. Engineers can avoid known failure modes, adopt validated solutions, and reduce trial-and-error during development.
                </p>

                {/* ---- Section 7 ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    A Strategic Tool for Innovation
                </h2>
                <p>
                    Rather than limiting creativity, tear-down analysis strengthens innovation by providing a strong foundation of proven engineering principles that inspire smarter and more reliable designs.
                </p>

                {/* ---- Conclusion ---- */}
                <h2 className="text-2xl font-semibold text-white mt-10">
                    Final Perspective
                </h2>
                <p>
                    Tear-down analysis transforms existing products into learning platforms. It enables cost optimization, performance improvement, manufacturability enhancement, and faster development—making it an essential tool for intelligent product optimization.
                </p>

            </div>
        </div>
    );
};

export default BlogFive;
