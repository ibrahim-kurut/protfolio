import Next from '@/components/Directing/Next'
import Prev from '@/components/Directing/Prev'
import SectionContetnt from '@/components/SectionContetnt/SectionContetnt'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'


const About = () => {
    const [experience, setExperience] = useState()


    const accountYear = () => {
        const date = new Date()
        let thisYear = date.getFullYear();
        let startDate = 2020
        setExperience(thisYear - startDate)
    }
    useEffect(() => {
        accountYear()
    }, [])





    return (
        <>
            <Head>
                <title>ibrahim kurut / About</title>
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
                    <SectionContetnt addStyle="md:mt-16">
                        <SectionTitle SectionTitle="about me" />
                        <div className="container mx-auto text-text_color ">
                            <div className="w-[95%] mx-auto">
                                <p className=" my-5 sm:text-lg">
                                    I'am Ibrahim Kurut I Have Experinces In Front End Web Developer And Graphic Designer I Have Worked In This Field For <span className="text-secondary">{experience} Years</span>
                                </p>
                                <div className="flex flex-wrap gap-5 justify-center md:justify-between items-center">


                                    <div className="w-[80%] md:w-[45%]">
                                        <Image
                                            src="/assets/img/ibrahim-kurut.jpg"
                                            width={500}
                                            height={500}
                                            alt='hero'
                                            priority
                                            className="w-[75%] md:w-[90%] bg-cover bg-center rounded-lg"
                                        />
                                    </div>


                                    <div className="w-full md:w-[45%] text-[14px] md:text-base lg:text-2xl ">
                                        <p>
                                            <span className="text-secondary">Birthday</span>
                                            <span>
                                                : 04 / 06 / 1989
                                            </span>
                                        </p>
                                        <p>
                                            <span className="text-secondary">Website</span>
                                            <span>
                                                : www.domain.com
                                            </span>
                                        </p>
                                        <p>
                                            <span className="text-secondary">Emaill</span>
                                            <span>
                                                : ibrahim.kurut89@gmail.com
                                            </span>
                                        </p>
                                        <p>
                                            <span className="text-secondary">Language</span> <span>
                                                : Arabic - Turkish - English
                                            </span>
                                        </p>
                                        <p>
                                            <span className="text-secondary">Phone</span>
                                            <span>
                                                :090 505 880 11 81
                                            </span>
                                        </p>
                                        <p>
                                            <span className="text-secondary">Work</span>
                                            <span>
                                                : front-end developer
                                            </span>
                                        </p>
                                        <p>
                                            <span className="text-secondary">City</span>
                                            <span className='capitalize'>
                                                : turkey - ankara
                                            </span>
                                        </p>
                                        <p>
                                            <span className="text-secondary">Freelance</span> <span>
                                                : Available
                                            </span>
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="flex justify-around items-center mt-8 md:mt-8">
                                <Link href="/"><Prev /></Link>
                                <Link href="/servies"><Next /></Link>
                            </div>
                        </div>
                    </SectionContetnt>


                </div>


            </div>
        </>
    )
}

export default About






















































{/* <div className="container mx-auto text-text_color">
<div className="w-[95%] mx-auto">
    <p className=" my-5">
        I'am Ibrahim Kurut I Have Experinces In Front End Web Developer And Graphic Designer I Have Worked In This Field For Three Years I Am Currently Developing Myself In The Field Of Back-End Programming
    </p>
    <div className="flex flex-wrap gap-5 justify-center md:justify-between items-center">
        <div className="md:w-[45%] border">
            img
        </div>
        <div className="w-full md:w-[45%]">
            <p>
                <span className="text-secondary font-semibold">Birthday</span>
                <span>
                    : 04 / 06 / 1989
                </span>
            </p>
            <p>
                <span className="text-secondary font-semibold">Website</span>
                <span>
                    : www.domain.com
                </span>
            </p>
            <p>
                <span className="text-secondary font-semibold">Emaill</span>
                <span>
                    : ibrahim.kurut89@gmail.com
                </span>
            </p>
            <p>
                <span className="text-secondary font-semibold">Language</span> <span>
                    : Arabic - Turkish - English
                </span>
            </p>
            <p>
                <span className="text-secondary font-semibold">Phone</span>
                <span>
                    :+964 750 163 01 04
                </span>
            </p>
            <p>
                <span className="text-secondary font-semibold">Work</span>
                <span>
                    : front-end developer
                </span>
            </p>
            <p>
                <span className="text-secondary font-semibold">City</span>
                <span>
                    : iraq - erbil
                </span>
            </p>
            <p>
                <span className="text-secondary font-semibold">Freelance</span> <span>
                    : Available
                </span>
            </p>
        </div>
    </div>
</div>
<div className="flex justify-around items-center mt-20">
    <Link href="/"><Prev /></Link>
    <Link href="/servies"><Next /></Link>
</div>
</div> */}


{/* <div className="relative border border-gray-600 w-[15rem] h-[15rem]  mx-auto rounded-full overflow-hidden mb-5">
                        <Image
                            src="/assets/img/ibrahim-kurut.png"
                            width={500}
                            height={500}
                            alt='hero'
                            priority
                            className="w-[100%]bg-cover bg-center"
                        />
                    </div> */}