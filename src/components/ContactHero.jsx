import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Contact from '../../public/images/Contacthero.png';

const ContactHero = () => {
    return (
        <>
            <div className="relative w-full">
                {/* HERO IMAGE */}
                <div
                    className="relative w-full h-[420px] md:h-[520px] bg-cover bg-center flex items-center"
                    style={{
                        backgroundImage: Contact ? `url(${Contact})` : 'none',
                    }}
                >
                    {/* TEXT LEFT SIDE */}
                    <div className="relative px-6 md:px-12">
                        <h1 className="text-4xl md:text-6xl font-extralight text-white drop-shadow-lg leading-snug max-w-xl">
                            Get in Touch With Us
                        </h1>

                        <p className="text-white/90 mt-4 text-lg md:text-2xl max-w-xl drop-shadow">
                            We’re here to help you with any queries or support you may need.
                        </p>
                    </div>
                </div>

                {/* WHITE BOX HALF OVER IMAGE */}
                <div className="absolute left-1/2 top-[350px] md:top-[430px] transform -translate-x-1/2 
                        w-[90%] md:w-[80%] bg-white shadow-xl p-8 md:p-10 
                        flex flex-col gap-10">



                    {/* CONTENT ROW */}
                    <div className="flex flex-col md:flex-row gap-10">

                        {/* ADDRESS */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <FaMapMarkerAlt className="text-blue-700 text-2xl" />
                                <h3 className="text-xl font-semibold text-blue-700">Address</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed ml-9">
                                123 Street Name,<br />
                                Business Tower,<br />
                                Mumbai, Maharashtra 400001
                            </p>
                        </div>

                        {/* PHONE */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <FaPhoneAlt className="text-blue-700 text-2xl" />
                                <h3 className="text-xl font-semibold text-blue-700">Phone</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed ml-9">
                                +91 98765 43210<br />
                                +91 91234 56789
                            </p>
                        </div>

                        {/* EMAIL */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <FaEnvelope className="text-blue-700 text-2xl" />
                                <h3 className="text-xl font-semibold text-blue-700">Email</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed ml-9">
                                support@example.com<br />
                                info@example.com
                            </p>
                        </div>

                    </div>
                </div>

                {/* EXTRA SPACE BELOW */}
                <div className="h-56"></div>
            </div>
        </>
    );
};

export default ContactHero;