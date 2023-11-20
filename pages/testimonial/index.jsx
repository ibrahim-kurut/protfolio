import Prev from '@/components/Directing/Prev'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SectionContetnt from '@/components/SectionContetnt/SectionContetnt'
import TestimonialPage from '@/components/TestimonialPage/TestimonialPage'
const index = () => {



    return (
        <>
            <Head>
                <title>ibrahim kurut / Testimonial</title>
            </Head>
            <div className="h-[calc(100vh_-_100px)]">
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

                    <SectionContetnt addStyle="mt-2 md:mt-0">
                        <SectionTitle SectionTitle="testimonial" />
                        <div className="container mx-auto text-text_color">
                            <div className="w-[95%] lg:w-[50%] text-center mx-auto">
                                <p className=" my-5 sm:text-lg">
                                    Some of the works that I have created
                                </p>
                                <div>
                                    <TestimonialPage />
                                </div>
                            </div>
                            <div className="flex justify-around items-center mt-8 md:mt-20">
                                <Link href="/skills"><Prev /></Link>

                            </div>
                        </div>
                    </SectionContetnt>
                </div>


            </div>
        </>
    )
}

export default index