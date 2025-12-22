export default function AboutUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute inset-0 bg-blue-200 blur-3xl opacity-30 group-hover:opacity-50 transition duration-500 rounded-3xl"></div>
  
          <img
            src="/about.png"
            alt="About MAK Design Solutions"
            className="relative w-full  md:h-[300px] object-contain rounded-2xl shadow-xl transform group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2">
          
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-black">
            About MAK Design Solutions
          </h2>

          {/* Decorative Line */}
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#0a84ff] to-[#062a66] mt-4 mb-6 rounded-full"></div>

          {/* Content */}
          <p className="text-gray-700 leading-relaxed text-lg">
            At{" "}
            <span className="font-semibold text-[#062a66]">MAK Design Solutions</span>, 
            we convert concepts into real-world engineering outcomes. With expert skills in{" "}
            <span className="font-semibold">Mechanical Product Design, Reverse Engineering, and Prototyping</span>, 
            our team delivers accurate, innovative, and industry-ready solutions.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mt-5">
            We combine{" "}
            <span className="font-semibold">innovation, precision, and affordability</span> 
            to bring high-quality engineering design that fits your business goals. 
            Our focus is reliability, customer satisfaction, and future-ready engineering.
          </p>

          {/* CTA Button */}
          <a href="about"><button className="mt-8 px-8 py-3 bg-[#062a66] text-white rounded-xl shadow-lg hover:bg-[#0a84ff] hover:shadow-xl transition-all duration-300">
            Learn More
          </button></a>
          
          
        </div>
      </div>
    </section>
  );
}
