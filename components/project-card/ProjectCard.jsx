import Image from "next/image"
import Link from "next/link"


const ProjectCard = () => {

    const projects = [
        {
            id: 1,
            name: "weather app",
            url: "https://react-weather-app-omega-three.vercel.app/",
            image: "/assets/img/weather.png",
        },
        {
            id: 2,
            name: "movie app",
            url: "https://movie-app-reactjs-chi.vercel.app/",
            image: "/assets/img/movie.png",
        },

    ]



    return (
        <div className="md:flex gap-5">

            {
                projects.map((project) => {
                    return (
                        <div
                            key={project.id}
                            className="main_box border border-secondary p-1 rounded-lg overflow-hidden text-white w-[100%] h-[250px] md:h-[350px] md:w-[30%] my-2">
                            <Image
                                src={project.image}
                                width={500}
                                height={428}
                                alt='hero'
                                priority
                                className="w-[100%] h-[80%]"
                            />
                            <Link href={project.url} target="_blank">
                                <div className="project_name text-center mt-3 capitalize text-lg">{project.name}</div>

                            </Link>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ProjectCard