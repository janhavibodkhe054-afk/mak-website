import React from 'react';
import { Zap, DollarSign, Clock, Leaf, Users } from 'lucide-react';

export default function ModernBenefitsSection() {
    const benefits = [
        {
            icon: Zap,
            title: "Design Flexibility",
            description: "Create intricate and complex geometries that are not possible with traditional manufacturing techniques.",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: DollarSign,
            title: "Cost-Effective for Low Volume",
            description: "Avoid expensive tooling and molds, making it ideal for prototyping and small batch production.",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Clock,
            title: "Faster Prototyping",
            description: "Significantly reduces product development time by enabling rapid iterations and quick design validation.",
            gradient: "from-orange-500 to-red-500"
        },
        {
            icon: Leaf,
            title: "Reduced Waste",
            description: "Additive manufacturing uses only the material required, making it a more sustainable production method.",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: Users,
            title: "Mass Customization",
            description: "Enables creation of personalized and custom-fit products tailored to unique customer requirements.",
            gradient: "from-indigo-500 to-purple-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                        Benefits of 3D Printing
                    </h1>
                    <p className="text-xl text-gray-600">Rapid Prototyping & Additive Manufacturing</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                                {/* Icon */}
                                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>

                                {/* Number Badge */}
                                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-300">
                                    {index + 1}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-xl">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Transform Your Manufacturing Process?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8">
                        Discover how 3D printing can revolutionize your product development
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
}