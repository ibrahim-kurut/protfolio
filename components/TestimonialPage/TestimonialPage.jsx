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
        {
            id: 3,
            name: "pakize kilic",
            jobTitle: "back-end web developer",
            imageSrc: "/assets/img/pakizekilic.jpeg",
            description: "Sakarya Üniversitesi"

        }
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

