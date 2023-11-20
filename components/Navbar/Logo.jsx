import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className="relative">

            <Image
                src="/assets/img/ibrahim-kurut-logo-2.png"
                width={100}
                height={100}
                alt='hero'
                priority
                className="w-[20px] h-[20px]"
            />


        </div>
    )
}

export default Logo