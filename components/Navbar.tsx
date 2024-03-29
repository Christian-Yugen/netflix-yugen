import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import NavbarItem from "./NavbarItem";
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
;    }, []);

    return (
        <nav className="w-full fixed z-40">
            <div
                className="
                px-4
                md:px-16
                flex
                flex-row
                items-center
                transitions
                duration-500
                bg-zinc-900
                bg-opacity-90
                "
            >
                <Image className="h-4 lg:h-7" src="/images/netflix_Logo_RGB.png" alt="Logo" />
                <div
                    className="
                        flex-row
                        ml-8
                        gap-7
                        hidden
                        lg:flex
                    "
                >
                    <NavbarItem label="Home" />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Novos & Popular" />
                    <NavbarItem label="Minha lista" />
                    <NavbarItem label="Linguagem" />
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browser</p>
                    <BsChevronDown className="text-white transition" />
                    <MobileMenu visible={showMobileMenu} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;