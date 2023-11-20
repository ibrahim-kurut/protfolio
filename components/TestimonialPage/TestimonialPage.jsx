import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';

const TestimonialPage = () => {

    const customers = [
        {
            id: 1,
            name: "Nawaf Alabdullah",
            jobTitle: "QM Senior Manager | IT Engineer",
            imageSrc: "/assets/img/nawaf-alabdullah.jpeg",
            description: "The service is exceptional! It is characterized by professionalism and high quality."
        },
        {
            id: 2,
            name: "muhammed ameen",
            jobTitle: "Owner of Western Home Improvement Inc",
            imageSrc: "/assets/img/emin.jpg",
            description: "I am very satisfied with your services. I highly recommend him and look forward to doing business with him again."
        },
        // {
        //     id: 3,
        //     name: "yousif kassab",
        //     jobTitle: "jobTitle",
        //     imageSrc: "/assets/img/user2.png",
        //     description: "The service provided to customers reflects the highest levels of professionalism and quality. He has deep knowledge in the field and responds quickly to all inquiries. A great experience worth recommending to everyone.."

        // }
    ]



    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <div>
                    {
                        customers.map((customer) => {
                            return (
                                <SwiperSlide key={customer.id}>
                                    {/* imgSrc, jobTitlt, description */}
                                    <TestimonialCard

                                        imgSrc={customer.imageSrc}
                                        customerName={customer.name}
                                        jobTitlt={customer.jobTitle}
                                        description={customer.description}
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                </div>
            </Swiper>
        </>
    );
}




export default TestimonialPage

