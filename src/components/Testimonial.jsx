import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';

import React from 'react';

// Import Swiper React components


// Import Swiper styles



// import required modules



const Testimonial = () => {

  const testimonials = [
    {
      id: 1,
      name: "Amit Sharma",
      rating: 5,
      text: "The flavors at this restaurant are absolutely incredible! Every dish I've tried has been a delightful experience.",
      role: "Regular Customer"
    },
    {
      id: 2,
      name: "Priya Nair",
      rating: 4,
      text: "Great food and excellent service. The staff was very attentive and knowledgeable about the menu.",
      role: "Food Enthusiast"
    },
    {
      id: 3,
      name: "Rahul Verma",
      rating: 5,
      text: "This place is a hidden gem! The attention to detail in both the food presentation and taste is remarkable.",
      role: "Family Visitor"
    },
    {
      id: 4,
      name: "Sneha Patil",
      rating: 5,
      text: "I've been to many restaurants, but this one stands out. The ambiance, the service, and most importantly, the food are all top-notch.",
      role: "Food Blogger"
    },
    {
      id: 5,
      name: "Vikram Desai",
      rating: 4,
      text: "A wonderful dining experience! The fusion of flavors in their signature dishes is truly unique and delightful.",
      role: "Business Traveler"
    }
  ]

  return (
    <div className='py-10 bg-orange-50'>
      <h1 className='text-center text-3xl lg:text-4xl font-bold text-gray-800'>
        What Our Customers Say
      </h1>
      <div className='max-w-6xl mx-auto py-10 px-3'>
        <Swiper
          style={{
            "--swiper-pagination-color": "#EF4444",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px"
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 4000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          className="mySwiper"
        >
          {
            testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className='border border-gray-200 bg-white shadow-md shadow-orange-200 rounded-lg flex flex-col p-5'>
                  <div className='flex mb-3'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5"
                        fill={i < item.rating ? "#facc15" : "none"}
                        stroke="#facc15"
                      />
                    ))}
                  </div>
                  <p className='py-3 text-gray-600 italic'>“{item.text}”</p>
                  <div className='flex justify-between items-center mt-4'>
                    <div>
                      <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                      <p className='text-sm text-gray-500'>{item.role}</p>
                    </div>
                    <Quote className='text-red-400 w-6 h-6'/>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
          <div className='swiper-pagination my-10 gap-1 relative'></div>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial;
