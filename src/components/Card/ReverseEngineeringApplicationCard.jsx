export default function ReverseEngineeringApplicationCard({ children }) {
    const items = [
        {
            name: "Legacy part replacement",
            description: "Recreating obsolete components with improved accuracy and performance."
        },
        {
            name: "Failure analysis",
            description: "Identifying root causes of component failure to prevent future breakdowns."

        },
        {
            name: "Product improvement",
            description: "Enhancing design, performance, and reliability of existing products."

        },
        {
            name: "Competitive analysis",
            description: "Evaluating products against market standards to gain a strategic edge."

        },
        {
            name: "Digitalization",
            description: "Transforming physical products into smart, data-driven digital solutions."

        }
    ];

    return (
        <div className="w-full">
            {/* Top row - 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {items.slice(0, 3).map((item, index) => (
                    <div
                        key={index}
                        className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer"
                    >
                        <div className="relative h-44 w-full">
                            <img
                                src={`/images/reverseEngineering/${index + 1}.jpg`}
                                alt={item.name}
                                className="h-full w-full object-fill transition duration-300 group-hover:blur group-hover:brightness-75"
                            />
                            <div className="absolute inset-0 flex items-center justify-center px-4 text-black bg-[#68aad3] text-[16px] text-center opacity-0 transition duration-300 group-hover:opacity-100 pointer-events-none">
                                {item.description}
                            </div>
                        </div>
                        <div className="bg-blue-900 text-white text-center py-2 text-md font-medium">
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom row - 2 cards centered */}
            <div className="flex justify-center gap-6 flex-wrap mb-6">
                {items.slice(3, 5).map((item, index) => (
                    <div
                        key={index + 3}
                        className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                    >
                        <div className="relative h-44 w-full">
                            <img
                                src={`/images/reverseEngineering/${index + 4}.jpg`}
                                alt={item.name}
                                className="h-full w-full object-fill transition duration-300 group-hover:blur group-hover:brightness-75"
                            />
                            <div className="absolute inset-0 flex items-center justify-center px-4 text-black bg-[#68aad3] text-[16px] text-center opacity-0 transition duration-300 group-hover:opacity-100 pointer-events-none">
                                {item.description}
                            </div>
                        </div>
                        <div className="bg-blue-900 text-white text-center py-2 text-md font-medium">
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>

            {/* CHILDREN */}
            <div className="">{children}</div>
        </div>
    );
}