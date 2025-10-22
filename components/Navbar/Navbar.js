import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx"
import { FaUserAlt } from "react-icons/fa"
import NavbarItem from './NavbarItem';
import Logo from './Logo';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-primary p-6">
            <nav className="flex items-center justify-between flex-wrap  container mx-auto">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link href="/">
                        <div className="text-secondary">
                            <Logo />
                        </div>
                    </Link>
                </div>
                {/* =========== Hamburger icon =========== */}
                <div className="block lg:hidden">
                    <span
                        className="cursor-pointer text-secondary hover:text-orange-400 transition-all"
                        onClick={toggleMenu}>
                        <RxHamburgerMenu size={30} />
                    </span>

                </div>
                {/* =========== user icon =========== */}
                {/* <div className="absolute right-[6rem] top-[2rem]">
                    <div className="text-white cursor-pointer">
                        <Link href="/">
                            <FaUserAlt />
                        </Link>
                    </div>
                </div> */}
                {/* =========== Navbar Item =========== */}
                <div className={`w-full block flex-grow lg:flex  lg:items-center lg:w-auto ${isOpen ? 'hidden' : 'block'}`}>
                    <div className="text-sm w-[90%] lg:flex justify-center">
                        <NavbarItem toggleMenu={toggleMenu} />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;