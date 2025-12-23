export default function AboutUs() {
  return (
    <section className="w-full py-14 md:py-20 bg-gradient-to-b from-white to-gray-100">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12
  flex flex-col md:flex-row items-center gap-12
+ translate-x-4 md:translate-x-8"
      >
        {/* LEFT IMAGE */}
        <div
          className="w-full md:w-[45%] relative group
  h-[200px] md:h-[260px] lg:h-[280px]
  rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Soft Glow */}
          <div
            className="absolute inset-0 bg-blue-200 blur-3xl opacity-20
    group-hover:opacity-30 transition duration-500"
          />

          <img
            src="/about.png"
            alt="About MAK Design Solutions"
            className="relative w-full h-full object-cover
    transform group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-[45%] flex flex-col">
          {/* TITLE — SINGLE LINE */}
          <h2
            className="text-xl sm:text-2xl lg:text-3xl
  font-extrabold text-black leading-tight
  whitespace-nowrap"
          >
            About MAK Design Solutions
          </h2>

          {/* Decorative Line */}
          <div
            className="w-24 h-1.5 bg-gradient-to-r
            from-[#0a84ff] to-[#062a66]
            mt-3 mb-5 rounded-full"
          />

          <p
            className="text-gray-700 text-[15px] sm:text-base lg:text-[17px]
            leading-relaxed"
          >
            At{" "}
            <span className="font-semibold text-[#062a66]">
              MAK Design Solutions
            </span>
            , we convert concepts into real-world engineering outcomes. With
            expert skills in{" "}
            <span className="font-semibold">
              Mechanical Product Design, Reverse Engineering, and Prototyping
            </span>
            , our team delivers accurate, innovative, and industry-ready
            solutions.
          </p>

          <p
            className="text-gray-700 text-[15px] sm:text-base lg:text-[17px]
            leading-relaxed mt-4"
          >
            We combine{" "}
            <span className="font-semibold">
              innovation, precision, and affordability
            </span>{" "}
            to bring high-quality engineering design that fits your business
            goals. Our focus is reliability, customer satisfaction, and
            future-ready engineering.
          </p>

          {/* CTA */}
          <a href="/about" className="mt-7 inline-block">
            <button
              className="px-8 py-3 bg-[#062a66] text-white
              rounded-xl shadow-lg
              hover:bg-[#0a84ff] hover:shadow-xl
              transition-all duration-300"
            >
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
