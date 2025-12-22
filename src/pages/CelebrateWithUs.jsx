import React from "react";

const events = [
  { title: "Birthday Parties 🎂", desc: "Make your special day unforgettable with customized celebrations." },
  { title: "Anniversary Celebrations 💍", desc: "Celebrate love and togetherness in a memorable way." },
  { title: "Family Gatherings 👨‍👩‍👧‍👦", desc: "Enjoy quality time with your loved ones over delicious food." },
  { title: "Corporate Lunch / Dinner 💼", desc: "Professional events with a touch of elegance." },
  { title: "Kitty Parties 👭", desc: "Fun, laughter, and delicious meals for your kitty group." },
  { title: "Engagement / Small Functions 💐", desc: "Perfect setting for intimate and memorable functions." },
  { title: "Farewell / Get-together 🎓", desc: "Cherish memories with friends, colleagues, and family." },
  { title: "Festival Special Events 🎉", desc: "Celebrate Diwali, New Year, Christmas & more with us." },
];

export default function CelebrateWithUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          🎊 Celebrate With Us 🎊
        </h1>
        <p className="text-gray-700 mb-10 text-lg">
          Whether it’s a small gathering or a big occasion, we create unforgettable moments for you.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {events.map((event, index) => (
          <div
            key={index}
            className="p-6 text-center rounded-2xl border border-black bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              {event.title}
            </h2>
            <p className="text-gray-700 text-sm">{event.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-black mb-4">
          Ready to Plan Your Celebration? 🎉
        </h2>
        <div className="flex justify-center gap-6">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918411039009"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-medium"
          >
            💬 WhatsApp Us
          </a>

          {/* Call Button */}
          <a
            href="tel:+918411039009"
            className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition font-medium"
          >
            📞 Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
