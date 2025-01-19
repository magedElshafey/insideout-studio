
import { NavLink } from "react-router-dom"
import { navLinks } from "../data/data"
import { useTranslation } from "react-i18next"
import { useState, useRef } from "react"
import { IoMdMenu } from "react-icons/io";
import Sidebar from "./Sidebar";
const Navbar = () => {
    const { t } = useTranslation();
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    return (
        <>
            <div className="pt-4 container mx-auto px-8 md:px-12 lg:px-16">
                <div className="flex items-center justify-between">
                    <h1>logo</h1>
                    <ul className="hidden md:flex items-center gap-3">
                        {
                            navLinks?.map((item, index) => <li key={index}>
                                <NavLink to={item?.link} className="duration-300">
                                    {t(item.name)}
                                </NavLink>
                            </li>)
                        }
                    </ul>
                    <div className="md:hidden">
                        <button onClick={handleShowSidebar}>
                            <IoMdMenu className="text-2xl text-orangeColor" />
                        </button>
                    </div>
                </div>
            </div>
            <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} sidebarRef={sidebarRef} />
        </>
    )
}

export default Navbar