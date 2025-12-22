import React, { useState } from "react";

const menuData = [
  {
    category: "Tandoori Starters (Non-Veg)",
    items: [
      { name: "Chicken Tandoori Full", price: 480 },
      { name: "Chicken Tandoori Half", price: 280 },
      { name: "Chicken Tikka", price: 350 },
      { name: "Chicken Achari Tikka", price: 350 },
      { name: "Chicken Pahadi Tikka", price: 350 },
      { name: "Chicken Tangdi Kabab", price: 380 },
      { name: "Chicken Kalmi Kabab", price: 400 },
      { name: "Mutton Seekh Kabab", price: 500 },
      { name: "Chicken Platter Full", price: 1250 },
    ],
  },
  {
    category: "Soups & Shorba",
    items: [
      { name: "Veg Manchow Soup", price: 160 },
      { name: "Sweet Corn Veg Soup", price: 160 },
      { name: "Chicken Manchow Soup", price: 190 },
      { name: "Seafood Soup", price: 240 },
      { name: "Crab Soup", price: 240 },
      { name: "Chicken Aalni Soup", price: 190 },
      { name: "Mutton Aalni Soup", price: 250 },
      { name: "Mutton Paya Soup", price: 280 },
    ],
  },
  {
    category: "Seafood Specials",
    items: [
      { name: "Pomfret Tandoori", price: 690 },
      { name: "Pomfret Goan Curry", price: 730 },
      { name: "Surmai Tikka", price: 660 },
      { name: "Surmai Curry Boneless", price: 750 },
      { name: "Prawns Tandoori", price: 460 },
      { name: "Prawns Curry (Goan/Maratha)", price: 560 },
      { name: "Rawas Curry", price: 670 },
      { name: "Halwa Curry Boneless", price: 780 },
    ],
  },
  {
    category: "Chinese Starters",
    items: [
      { name: "Veg Manchurian", price: 270 },
      { name: "Paneer Chilly", price: 300 },
      { name: "Chicken Lollipop", price: 320 },
      { name: "Chicken Crispy", price: 340 },
      { name: "Chicken Hot Pan", price: 330 },
    ],
  },
  {
    category: "Rice & Biryani",
    items: [
      { name: "Veg Biryani", price: 260 },
      { name: "Chicken Dum Biryani", price: 380 },
      { name: "Chicken Hyderabadi Biryani", price: 460 },
      { name: "Mutton Dum Biryani", price: 470 },
      { name: "Chicken Schezwan Fried Rice", price: 280 },
      { name: "Veg Schezwan Rice", price: 250 },
    ],
  },
  {
    category: "Indian Bread",
    items: [
      { name: "Roti", price: 30 },
      { name: "Butter Roti", price: 40 },
      { name: "Naan", price: 60 },
      { name: "Butter Naan", price: 70 },
      { name: "Cheese Naan", price: 150 },
      { name: "Kulcha", price: 80 },
    ],
  },
  {
    category: "Mocktails",
    items: [
      { name: "Night out at Kaveri", price: 220 },
      { name: "Flamingo", price: 220 },
      { name: "Berry Werry", price: 220 },
      { name: "Virgin Mojito", price: 220 },
      { name: "Fruit Punch", price: 220 },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Vanilla Icecream (Single/Double)", price: "70/120" },
      { name: "Brownie with Icecream", price: 180 },
      { name: "Gulab Jamun with Icecream", price: "120/190" },
      { name: "Malai Kulfi", price: 120 },
      { name: "Mango Icecream", price: "70/120" },
    ],
  },
];

export const Menu = () => {
  const [filter, setFilter] = useState("All");

  // unique categories
  const categories = ["All", ...menuData.map((sec) => sec.category)];

  // filter logic
  const filteredData =
    filter === "All"
      ? menuData
      : menuData.filter((section) => section.category === filter);

  return (
    <section
      id="menu"
      className="relative bg-black py-16"
      style={{
        backgroundImage: "url('/hotelimg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-white">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Our <span className="text-red-500">Menu</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full shadow-md transition ${
                filter === cat
                  ? "bg-red-600 text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Sections */}
        {filteredData.map((section, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-2xl font-bold text-red-500 mb-6 border-b-2 border-red-500 pb-2">
              {section.category}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-white text-black px-6 py-4 rounded-xl shadow-lg border-l-4 border-red-500 hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-lg font-medium">{item.name}</span>
                  <span className="font-bold text-red-600">₹{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {/* Call Us */}
          <a
            href="tel:+918411039009"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-md transition"
          >
            📞 Call Us
          </a>

          {/* WhatsApp Order */}
          <a
            href="https://wa.me/918411039009?text=Hi%20Kaveri%20Team!%20I%20would%20like%20to%20place%20an%20order.%20🍽️"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 hover:bg-gray-200 px-6 py-3 rounded-full shadow-md transition"
          >
            🛒 Order Now
          </a>

          {/* WhatsApp Reservation */}
          <a
            href="https://wa.me/918411039009?text=Hello%20Kaveri%20Team!%20I%20want%20to%20book%20a%20table.%20🍽️"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full shadow-md transition"
          >
            🍽️ Book a Table
          </a>

          {/* WhatsApp Specials */}
          <a
            href="https://wa.me/918411039009?text=Hi%20Kaveri%20Team!%20Can%20you%20share%20today's%20special%20menu%20with%20me%3F%20⭐"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full shadow-md transition"
          >
            ⭐ View Specials
          </a>
        </div>
      </div>
    </section>
  );
};
