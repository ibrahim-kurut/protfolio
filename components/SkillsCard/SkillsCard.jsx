import React from 'react'
import { FaHtml5, FaCss3, FaFigma, FaJsSquare, FaBootstrap, FaReact } from "react-icons/fa"
import { BiLogoTailwindCss, BiLogoJquery } from "react-icons/bi"
import { SiNextdotjs } from "react-icons/si"
import { DiIllustrator, DiPhotoshop } from "react-icons/di"
const SkillsCard = () => {
    return (
        <div className="flex gap-4 flex-wrap justify-center items-center text-4xl animate-pulse">
            {/* html */}
            <span className="bg-orange-700 text-white p-2 rounded-full">
                <FaHtml5 />
            </span>
            {/* css */}
            <span className="bg-blue-500 text-white p-2 rounded-full">
                <FaCss3 />
            </span>
            {/* Bootstrap */}
            <span className="bg-purple-700 text-white p-2 rounded-full">
                <FaBootstrap />
            </span>
            {/* TailwindCss */}
            <span className="bg-white text-blue-400 p-2 rounded-full">
                <BiLogoTailwindCss />
            </span>
            {/* js */}
            <span className="bg-yellow-400 text-black p-2 rounded-full">
                <FaJsSquare />
            </span>
            {/* Jquery */}
            <span className="bg-white text-blue-400 p-2 rounded-full">
                <BiLogoJquery />
            </span>
            {/* React */}
            <span className="bg-blue-400 text-white p-2 rounded-full">
                <FaReact />
            </span>
            {/* Next */}
            <span className="bg-white text-black p-2 rounded-full">
                <SiNextdotjs />
            </span>
            {/* illustrator */}
            <span className="bg-[#330000] text-secondary p-2 rounded-full">
                <DiIllustrator />
            </span>
            {/* photoshop */}
            <span className="bg-blue-950 text-blue-300 p-2 rounded-full">
                <DiPhotoshop />
            </span>
            {/* figma */}
            {/* <span className="bg-blue-950 text-blue-200 p-2 rounded-full">
                <FaFigma />
            </span> */}
        </div>
    )
}

export default SkillsCard