import React from "react";
import { Link } from "react-router-dom";

const BlogHero = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900">
      {/* ===================== HERO BLOG ===================== */}
      <section className="relative w-full h-[450px] overflow-hidden">
        <img
          src="https://png.pngtree.com/png-vector/20251108/ourlarge/pngtree-black-background-white-mechanical-patterns-industrial-aesthetic-design-png-image_17875107.webp"
          alt="Mechanical Engineering Header"
          className="w-full h-full object-cover"
        />

        {/* NAVY BLUE OVERLAY */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center px-6 md:px-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Mechanical Engineering Insights
            </h1>
            <p className="text-lg md:text-xl mt-4 text-gray-200 max-w-2xl">
              Explore expert-level blogs on engineering innovation, simulation,
              manufacturing technology, and product design.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== BLOG CARDS ===================== */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">
          Latest Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex items-stretch h-28">
            <img
              src="https://t3.ftcdn.net/jpg/07/50/76/16/360_F_750761616_bKxDS2fRcCOyg5Cc8QRYGOTIrppjismd.jpg"
              alt="Automation"
              className="w-28 h-full object-cover flex-shrink-0"
            />

            <div className="p-3 flex flex-col justify-center">
              <Link
                to="/blog/cardone"
                className="text-sm font-medium text-blue-900 hover:underline mb-1 block"
              >
                How FEA Helps Engineers Detect Product Failures Early
              </Link>
              <p className="text-gray-600 text-xs leading-snug">
                FEA allows engineers to detect potential failures early by
                simulating stress, heat, and vibration conditions, preventing
                costly design flaws.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex items-stretch h-28">
            <img
              src="https://static.wixstatic.com/media/e2ca7f_cb493bb1342e4fb58fa1661d8e8f213a~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e2ca7f_cb493bb1342e4fb58fa1661d8e8f213a~mv2.jpg"
              alt="Automation"
              className="w-28 h-full object-cover flex-shrink-0"
            />

            <div className="p-3 flex flex-col justify-center">
              <Link
                to="/blog/cardtwo"
                className="text-sm font-medium text-blue-900 hover:underline mb-1 block"
              >
                Why Product Rendering Is Essential for Marketing & E-Commerce
              </Link>
              <p className="text-gray-600 text-xs leading-snug">
                Product rendering helps marketers present realistic visuals,
                highlight features, and improve customer engagement for
                e-commerce platforms.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex items-stretch h-28">
            <img
              src="https://www.proventia.com/wp-content/uploads/2024/09/Proventia_Brno_Hires-6430-scaled.jpg"
              alt="Automation"
              className="w-28 h-full object-cover flex-shrink-0"
            />

            <div className="p-3 flex flex-col justify-center">
              <Link
                to="/blog/cardthree"
                className="text-sm font-medium text-blue-900 hover:underline mb-1 block"
              >
                Rapid Prototyping: Why It’s a Game Changer for Designers
              </Link>
              <p className="text-gray-600 text-xs leading-snug">
                Rapid prototyping enables designers to quickly create functional
                models, test designs, and speed up product development cycles.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex items-stretch h-28">
            <img
              src="https://knowhow.distrelec.com/wp-content/uploads/2022/01/industrial-manufacturing.jpg"
              alt="Automation"
              className="w-28 h-full object-cover flex-shrink-0"
            />

            <div className="p-3 flex flex-col justify-center">
              <Link
                to="/blog/cardfour"
                className="text-sm font-medium text-blue-900 hover:underline mb-1 block"
              >
                Manufacturing Trends That Are Changing the Industry
              </Link>
              <p className="text-gray-600 text-xs leading-snug">
                Manufacturing trends like automation, smart factories, and
                additive manufacturing are reshaping production processes and
                improving operational efficiency.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex items-stretch h-28">
            <img
              src="https://mlgg63gqdcko.i.optimole.com/cb:F7HO.14b36/w:auto/h:auto/q:mauto/ig:avif/https://www.pemnet.com/wp-content/uploads/sites/2/2022/06/teardown-sq.jpg"
              alt="Automation"
              className="w-28 h-full object-cover flex-shrink-0"
            />

            <div className="p-3 flex flex-col justify-center">
              <Link
                to="/blog/cardfive"
                className="text-sm font-medium text-blue-900 hover:underline mb-1 block"
              >
                Tear-Down Analysis: A Powerful Tool for Product Optimization
              </Link>
              <p className="text-gray-600 text-xs leading-snug">
                Tear-down analysis allows engineers to study existing products
                to optimize design, reduce cost, and improve manufacturing
                processes for future products.
              </p>
            </div>
          </div>

          {/* Repeat the same structure for remaining cards */}
        </div>
      </section>
    </div>
  );
};

export default BlogHero;
