import Btn from '@/components/Btn/Btn'
import Next from '@/components/Directing/Next'
import SectionContetnt from '@/components/SectionContetnt/SectionContetnt'
import SocialMediaLink from '@/components/SocialMediaLink/SocialMediaLink'
import TypewriterEffect from '@/components/TypewriterEffect/TypewriterEffect'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



const index = () => {
  // render() {}
  return (
    <>
      <Head>
        <title>ibrahim kurut / Home</title>
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
          {/* Hero content */}

          <SectionContetnt>

            <div className="relative border-b-2 border-secondary border-t-2 w-[15rem] h-[15rem]  mx-auto rounded-full overflow-hidden mb-5">
              <Image
                src="/assets/img/ibrahim-kurut.png"
                width={500}
                height={500}
                alt='hero'
                priority
                className="w-[100%]bg-cover bg-center"
              />
            </div>

            <div className="flex flex-col items-center">

              <h1 className="text-text_color text-3xl md:text-6xl font-cairo">
                Hi I'am <span className='text-secondary'>Ibrahim Kurut</span>
              </h1>
              <h2 className="text-text_color flex gap-2 text-lg md:text-4xl">
                I'am a
                <span className="text-secondary capitalize underline-offset-8 border-b-[1px] border-secondary"><TypewriterEffect /></span>
              </h2>

            </div>
            <div className="w-[50%] mx-auto mt-5 mb-5  ">
              <SocialMediaLink />
            </div>
            <div className="flex justify-center gap-5 w-[50%] mx-auto">

              <Link href="/assets/img/frontend-developer-cv.jpg">
                <Btn btnTitle="download cv" target='_blank' download />
              </Link>



              <Link href="/assets/img/frontend-developer-cv.jpg" target='_blank'>
                <Btn btnTitle="show cv" />
              </Link>

            </div>
            <div className="w-[50%] flex justify-center mx-auto mt-5">
              <Link href="/about">
                <Next />
              </Link>
            </div>
          </SectionContetnt>




        </div>

      </div>
    </>
  )
}

export default index