import Next from '@/components/Directing/Next'
import Prev from '@/components/Directing/Prev'
import SectionContetnt from '@/components/SectionContetnt/SectionContetnt'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import SkillsCard from '@/components/SkillsCard/SkillsCard'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
                    {/* Hero */}
                    <Image
                        src="/assets/img/hero.jpg"
                        width={500}
                        height={428}
                        alt='hero'
                        priority
                        className="w-full h-[calc(100vh_-_100px)]"
                    />


                    <SectionContetnt addStyle="mt-40 md:mt-0">
                        <SectionTitle SectionTitle="skills" />
                        <div className="container mx-auto text-text_color">
                            <div className="w-[95%] mx-auto">
                                <p className=" my-5 text-center sm:text-lg">
                                    Languages and technologies that I master and use in my projects
                                </p>
                                {/* SkillsCard */}
                                <SkillsCard />
                            </div>
                            <div className="flex justify-around items-center mt-8 md:mt-20">
                                <Link href="/portfolio"><Prev /></Link>
                                <Link href="/testimonial"><Next /></Link>
                            </div>
                        </div>

                    </SectionContetnt>

                </div>
            </div>
        </>
    )
}

export default index