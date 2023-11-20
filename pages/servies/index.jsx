import Next from '@/components/Directing/Next'
import Prev from '@/components/Directing/Prev'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCodeSlash } from "react-icons/bs"
import { FaFigma } from "react-icons/fa"
import { BsVectorPen } from "react-icons/bs"
import SectionContetnt from '@/components/SectionContetnt/SectionContetnt'
import ServiceCard from '@/components/GlobalCard/GlobalCard'
const index = () => {
    const cardData = [
        {
            id: 1,
            title: "front-end web developer",
            icon: <BsCodeSlash />
        },
        {
            id: 2,
            title: "Web Design",
            icon: <FaFigma />
        },
        {
            id: 3,
            title: "graphic design",
            icon: <BsVectorPen />
        }
    ]
    return (
        <>
            <Head>
                <title>ibrahim kurut / Servies</title>
            </Head>
            <div className=" h-[calc(100vh_-_100px)]">
                <div className="relative ">
                    <div className=" absolute top-0 left-0 w-full h-[calc(100vh_-_100px)] bg-primary opacity-90"></div>
                    {/* Hero */}
                    <Image
                        src="/assets/img/hero.jpg"
                        width={500}
                        height={428}
                        alt='hero'
                        priority
                        className="w-full h-[calc(100vh_-_100px)]"
                    />
                    <SectionContetnt>
                        <SectionTitle SectionTitle="servies" />
                        <div className="container mx-auto text-text_color">
                            <div className="w-[95%] mx-auto">
                                <p className=" my-5 text-xs sm:text-lg">
                                    As a front-end developer, I specialize in creating user interfaces and building attractive, responsive websites with different screens using HTML, CSS, and JavaScript. . Working with front-end frameworks such as React.js and Next.js
                                </p>
                                {/* ServiceCard */}
                                <div className="flex flex-wrap gap-3 justify-around items-center md:py-6 md:px-3 py-3 px-[5px] rounded-xl bg-secondary text-xs md:text-lg">

                                    {
                                        cardData?.map((item) => {
                                            return (
                                                <ServiceCard key={item.id}
                                                    cardTitle={item.title}
                                                    cardIcon={item.icon}
                                                    linkNane=''
                                                    url=''
                                                />

                                            )
                                        })

                                    }

                                </div>

                            </div>
                            <div className="flex justify-around items-center mt-8 md:mt-20">
                                <Link href="/about"><Prev /></Link>
                                <Link href="/portfolio"><Next /></Link>
                            </div>
                        </div>
                    </SectionContetnt>




                </div>


            </div>
        </>
    )
}

export default index