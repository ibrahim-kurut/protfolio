import Link from 'next/link'
import React from 'react'

const GlobalCard = ({ cardTitle, cardIcon, addStyle, linkNane, url }) => {
    return (
        <>
            <div className={`${addStyle} w-60 bg-primary flex flex-col items-center py-2  rounded-lg shadow-lg`}>
                <span className="w-[3rem] h-[3rem] rounded-full bg-secondary text-primary flex items-center justify-center text-3xl animate-pulse">
                    {cardIcon}
                </span>
                <h1 className="capitalize mt-2">
                    {cardTitle}
                </h1>
                <p className="mt-3 text-[1rem] capitalize text-secondary animate-pulse hover:animate-none">
                    <Link
                        target='_blank'
                        href={url}>{linkNane}</Link>
                </p>
            </div>
        </>
    )
}

export default GlobalCard