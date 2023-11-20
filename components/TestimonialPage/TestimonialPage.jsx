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
            description: "The service is exceptional! It is characterized by professionalism and high quality. You showed great interest in meeting my needs and providing innovative solutions. A wonderful and satisfying experience by all accounts."
        },
        {
            id: 2,
            name: "muhammed ameen",
            jobTitle: "Owner of Western Home Improvement Inc",
            imageSrc: "/assets/img/emin.jpg",
            description: "I am very satisfied with this client's services. It is distinguished by a high level of professionalism and mastery of its duties. His elegant handling and quick response made the experience of working with him enjoyable and fruitful. Highly recommended and I look forward to dealing with him again."
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






            </Swiper>
        </>
    );
}




export default TestimonialPage

