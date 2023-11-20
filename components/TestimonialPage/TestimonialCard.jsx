import Image from 'next/image'
import React from 'react'

const TestimonialCard = ({ imgSrc, customerName, jobTitlt, description }) => {

    return (
        <div className="h-fit py-3 flex gap-y-2 my-5 flex-col items-center">
            <div className="w-24 h-24 border rounded-full border-secondary overflow-hidden">
                <Image
                    src={imgSrc}
                    alt=''
                    width={100}
                    height={100}
                    className="bg-cover"
                />
            </div>
            <div className="name">
                <h1>{customerName}</h1>
                <p className="italic py-2 text-sm">
                    {jobTitlt}
                </p>
            </div>
            <div className="desc px-2">
                <p className="text-sm">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard