import Image from "next/image"
import Link from "next/link"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ProjectCard = () => {

    const projects = [
        {
            id: 1,
            name: "demo",
            description: "Create a weather app using react js and tailwindcss with fetching data from openweathermap",
            url: "https://react-weather-app-omega-three.vercel.app/",
            image: "/assets/img/weather.png",
        },
        {
            id: 2,
            name: "demo",
            description: "Create a movie website with reactjs and bootstrap with a movie search feature and a link to the movie details",
            url: "https://movie-app-reactjs-chi.vercel.app/",
            image: "/assets/img/movie.png",
        },
        {
            id: 3,
            name: "demo",
            description: "Create a static coffee shop website with reactjs and bootstrap",
            url: "https://coffee-three-beta.vercel.app/",
            image: "/assets/img/coffee.png",
        },
        {
            id: 4,
            name: "demo",
            description: "Create a static coffee shop website with reactjs and bootstrap",
            url: "https://calculator-livid-seven-89.vercel.app/",
            image: "/assets/img/calculator.png",
        },

    ]



    return (
        <>


            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="myproject"
            >
                <div className="md:flex gap-5">

                    {
                        projects.map((project) => {
                            return (

                                <SwiperSlide className="px-5 pb-10 pt-5">
                                    <div
                                        key={project.id}
                                        className="main_box border border-secondary p-1 rounded-lg overflow-hidden text-white w-[100%] h-[250px]  my-2">
                                        <Image
                                            src={project.image}
                                            width={500}
                                            height={428}
                                            alt='hero'
                                            priority
                                            className="w-[100%] h-[80%]"
                                        />

                                    </div>
                                    <div className="desc">
                                        <p className="text-sm text-gray-400">{project.description}</p>
                                    </div>
                                    <Link href={project.url} target="_blank">
                                        <div className="project_name text-center text-secondary capitalize text-lg">{project.name}</div>

                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }

                </div>


            </Swiper>
        </>
    )
}

export default ProjectCard