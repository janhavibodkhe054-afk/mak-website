export default function ProductRenderingCard({ children }) {
    const items = [
        {
            name: "E-Commerce",
            description: "High-quality 3D visuals that boost online product appeal and sales."
        },
        {
            name: "Interior design",
            description: "Realistic renders to visualize spaces, layouts, and finishes before execution."
        },
        {
            name: "Marketing & Advertising",
            description: "Eye-catching visuals crafted to strengthen brand communication."
        },
        {
            name: "Cataloguing ",
            description: "Consistent and detailed product images for impactful catalogs and brochures."
        },
        {
            name: "Product animation",
            description: "Dynamic animations that showcase product functionality and features clearly."
        }
    ];

    return (
        <div className="w-full">
            {/* Top row - 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mb-6">
                {items.slice(0, 3).map((item, index) => (
                    <div
                        key={index}
                        className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer"
                    >
                        <div className="relative h-44 w-full">
                            <img
                                src={`/images/ProductRendering/${index + 1}.jpg`}
                                alt={item.name}
                                className="h-full w-full object-fill transition duration-300 group-hover:blur group-hover:brightness-75"
                            />
                            <div className="absolute inset-0 flex items-center justify-center px-4 text-black bg-[#68aad3]  text-[16px] text-center opacity-0 transition duration-300 group-hover:opacity-100 pointer-events-none">
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
            <div className="flex justify-center gap-9 flex-wrap mb-6">
                {items.slice(3, 5).map((item, index) => (
                    <div
                        key={index + 3}
                        className="relative group rounded-md overflow-hidden shadow-sm bg-white hover:shadow-lg transition cursor-pointer w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                    >
                        <div className="relative h-44 w-full">
                            <img
                                src={`/images/ProductRendering/${index + 4}.jpg`}
                                alt={item.name}
                                className="h-full w-full object-fill transition duration-300 group-hover:blur group-hover:brightness-75"
                            />
                            <div className="absolute inset-0 flex items-center justify-center px-4 text-black bg-[#68aad3]  text-[16px] text-center opacity-0 transition duration-300 group-hover:opacity-100 pointer-events-none">
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