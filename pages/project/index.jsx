import SectionContetnt from '@/components/SectionContetnt/SectionContetnt'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import TestimonialCard from '@/components/TestimonialPage/TestimonialCard'
import ProjectCard from '@/components/project-card/ProjectCard'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const index = () => {
    return (
        <>
            <Head>
                <title>ibrahim kurut / Skills</title>
            </Head>
            <div className=" h-[calc(100vh_-_100px)]">
                <div className="relative ">
                    <div className=" absolute top-0 left-0 w-full h-[calc(100vh_-_100px)] bg-primary opacity-90"></div>
                    <Image
                        src="/assets/img/hero.jpg"
                        width={500}
                        height={428}
                        alt='hero'
                        priority
                        className="w-full h-[calc(100vh_-_100px)]"
                    />


                    <div className="absolute w-3/4 top-0 left-[15%] md:top-[50%] lg:top-[20%] md:left-[50%] md:-translate-x-[50%]">
                        <SectionTitle SectionTitle="my some projects" />


                        <div className="mt-8">
                            <ProjectCard />
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}

export default index