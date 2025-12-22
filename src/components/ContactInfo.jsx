import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <section className="w-full relative pb-24 ">

            {/* HIGHLIGHT WRAPPER */}
            <div className="relative max-w-7xl mx-auto p-6 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.08)] bg-white/70 backdrop-blur-xl border border-blue-200/50">

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* LEFT: MAP */}
                    <div className="flex-1 h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-blue-100 relative">
                        <iframe
                            title="Mumbai Office"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0000000000!2d72.8310625!3d19.170000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6b7b7b7b7b7%3A0x0000000000000000!2sMumbai!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                        ></iframe>

                        {/* Map Label */}
                        <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg shadow-md flex items-center gap-2">
                            <FaMapMarkerAlt className="text-blue-600" />
                            <span className="text-sm font-semibold">Mumbai Office</span>
                        </div>

                        {/* Social Icons */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 bg-white/90 p-3 rounded-full shadow-lg">
                            <a href="#" className="text-blue-600 hover:text-blue-800 transition"><FaFacebookF /></a>
                            <a href="#" className="text-blue-600 hover:text-blue-800 transition"><FaTwitter /></a>
                            <a href="#" className="text-blue-600 hover:text-blue-800 transition"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* RIGHT: FORM */}
                    <div className="flex-1 h-[700px] flex flex-col justify-start gap-6">
                        <h2 className="text-4xl font-bold text-blue-700">Contact Us</h2>
                        <p className="text-gray-600 text-lg">
                            Fill out the form below and we'll get back to you shortly.
                        </p>

                        <form className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-blue-100 space-y-4 h-full">

                            {/* FORM INPUTS FIXED */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-blue-200 rounded-lg px-4 py-3 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border border-blue-200 rounded-lg px-4 py-3 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                />

                                <input
                                    type="text"
                                    placeholder="Company"
                                    className="w-full border border-blue-200 rounded-lg px-4 py-3 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                />

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full border border-blue-200 rounded-lg px-4 py-3 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full border border-blue-200 rounded-lg px-4 py-3 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                />

                                <input
                                    type="text"
                                    placeholder="Website (Optional)"
                                    className="w-full border border-blue-200 rounded-lg px-4 py-3 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                                />
                            </div>

                            <select className="w-full border border-blue-200 rounded-lg px-4 py-3 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm">
                                <option>Inquiry Type</option>
                                <option>General Question</option>
                                <option>Project Proposal</option>
                                <option>Support</option>
                            </select>

                            <select className="w-full border border-blue-200 rounded-lg px-4 py-3 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm">
                                <option>Preferred Contact Method</option>
                                <option>Email</option>
                                <option>Phone</option>
                            </select>

                            <textarea
                                rows="2"
                                placeholder="Your Message"
                                className="w-full border border-blue-200 rounded-lg px-4 py-3 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm resize-none"
                            ></textarea>

                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-300 shadow-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
            {/* BOTTOM UNIQUE CONTACT STRIP */}


        </section>
    );
};

export default ContactInfo;