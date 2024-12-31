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
            name: "weather app",
            demo: "demo",
            code: "code",
            description: "Create a weather app using react js and tailwindcss with fetching data from openweathermap",
            url: "https://react-weather-app-omega-three.vercel.app/",
            image: "/assets/img/weather.png",
        },
        {
            id: 2,
            name: "show movie app",
            demo: "demo",
            code: "code",
            description: "Create a movie website with reactjs and bootstrap with a movie search feature and a link to the movie details",
            url: "https://movie-app-reactjs-chi.vercel.app/",
            image: "/assets/img/movie.png",
        },
        {
            id: 3,
            name: "coffee shop",
            demo: "demo",
            code: "code",
            description: "Create a static coffee shop website with reactjs and bootstrap",
            url: "https://coffee-three-beta.vercel.app/",
            image: "/assets/img/coffee.png",
        },
        {
            id: 4,
            name: "calculator app",
            demo: "demo",
            code: "code",
            description: "Create a calculator with html, css and javascript ",
            url: "https://calculator-livid-seven-89.vercel.app/",
            image: "/assets/img/calculator.png",
        },
        {
            id: 5,
            name: "notebook app",
            demo: "demo",
            code: "code",
            description: "Create a fullstack notebook project using React.js and Django REST Framework",
            url: "https://notebooktest.vercel.app/",
            image: "/assets/img/notebook.png",
        },
        {
            id: 6,
            name: "blog app",
            demo: "demo",
            code: "code",
            description: "Create a fullstack blog app project using React.js and Django REST Framework",
            url: "https://blog-demo-pink-two.vercel.app/",
            image: "/assets/img/blog.jpg",
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
                                        <p className="text-lg capitalize text-gray-200">{project.name}</p>
                                        <p className="text-sm text-gray-400">{project.description}</p>
                                    </div>
                                    <Link href={project.url} target="_blank" className="flex justify-center gap-5">
                                        <div className="project_name text-center text-secondary capitalize text-lg">{project.demo}</div>
                                        <div className="project_name text-center text-secondary capitalize text-lg">{project.code}</div>

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