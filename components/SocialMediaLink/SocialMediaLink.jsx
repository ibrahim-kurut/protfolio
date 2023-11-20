import Link from "next/link"
import { FaBehanceSquare, FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa"


const SocialMediaLink = () => {
    return (
        <div className="flex gap-5 justify-center items-center w-[50%] mx-auto   ">
            <Link
                target="_blank"
                href="https://www.linkedin.com/in/ibrahim-kurut-a94644210/
            "className="hover:text-secondary transition-all text-2xl cursor-pointer text-gray-500">
                <FaLinkedinIn />
            </Link>
            <Link
                target="_blank"
                href="https://github.com/ibrahim-kurut" className="hover:text-secondary transition-all text-2xl cursor-pointer text-gray-500">
                <FaGithub />
            </Link>
            <Link
                target="_blank"
                href="https://www.behance.net/ibrahimkurut" className="hover:text-secondary transition-all text-2xl cursor-pointer text-gray-500">
                <FaBehanceSquare />
            </Link>
            {/* <Link
                target="_blank"
                href="https://www.behance.net/ibrahimkurut" className="hover:text-secondary transition-all text-2xl cursor-pointer text-gray-500">
                <FaDiscord />
            </Link> */}


        </div>
    )
}

export default SocialMediaLink