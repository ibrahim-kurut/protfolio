import Next from '@/components/Directing/Next'
import Prev from '@/components/Directing/Prev'
import GlobalCard from '@/components/GlobalCard/GlobalCard'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FaGithub, FaBehance } from "react-icons/fa"
import SectionContetnt from '@/components/SectionContetnt/SectionContetnt'
const index = () => {

    const cardData = [
        {
            id: 1,
            title: "github",
            icon: <FaGithub />,
            url: "https://github.com/ibrahim-kurut",
            linkNane: "show now"
        },
        {
            id: 2,
            title: 'behance',
            icon: <FaBehance />,
            url: "https://www.behance.net/ibrahimkurut",
            linkNane: "show now"
        }
    ]

    return (
        <>
            <Head>
                <title>ibrahim kurut / Portfolio</title>
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

                    <SectionContetnt addStyle="mt-20 md:mt-0">
                        <SectionTitle SectionTitle="portfolio" />
                        <div className="container mx-auto text-text_color">
                            <div className="w-[95%] text-center mx-auto">
                                <p className=" my-5 sm:text-lg">
                                    Some of the works that I have created
                                </p>
                                <div className="flex flex-wrap gap-3 justify-around items-center py-6 px-3 rounded-xl bg-secondary ">

                                    {
                                        cardData?.map((item) => {
                                            return (
                                                <GlobalCard
                                                    key={item.id}
                                                    cardIcon={item.icon}
                                                    linkNane={item.linkNane}
                                                    url={item.url}
                                                />


                                            )
                                        })
                                    }

                                </div>
                            </div>
                            <div className="flex justify-around items-center mt-8 md:mt-20">
                                <Link href="/servies"><Prev /></Link>
                                <Link href="/skills"><Next /></Link>
                            </div>
                        </div>
                    </SectionContetnt>






                </div>


            </div>
        </>
    )
}

export default index