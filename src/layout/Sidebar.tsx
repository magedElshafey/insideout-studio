
import { IoCloseSharp } from "react-icons/io5";
import { navLinks } from "../data/data";
import { NavLink } from "react-router-dom";
import { socials } from "../data/data";
import { useTranslation } from "react-i18next";
interface SidebarProps {
    showSidebar: boolean;
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    sidebarRef: React.RefObject<HTMLDivElement>;
}
const Sidebar: React.FC<SidebarProps> = ({ showSidebar, setShowSidebar, sidebarRef, }) => {
    const { t } = useTranslation();
    return (
        <div ref={sidebarRef} className={`w-screen py-3 bg-slate-700 duration-300 fixed top-0 z-[1000] ${showSidebar ? 'left-0' : 'left-[-400%]'}`}>
            <div className="flex justify-end px-8">
                <button onClick={() => setShowSidebar(false)}>
                    <IoCloseSharp className="text-2xl text-white" />
                </button>
            </div>
            <ul className="flex flex-col items-center gap-3">
                {
                    navLinks?.map((item, index) => <li key={index} className="flex w-full items-center justify-center pb-3 border-b  border-b-white">
                        <NavLink onClick={() => setShowSidebar(false)} to={item?.link} className="text-white text-xl duration-300">{item?.name}</NavLink>
                    </li>)
                }
            </ul>
            <div className="mt-5 px-4">
                <h5 className="text-white mb-2">
                    {t("follow us")} :
                </h5>
                <ul className="flex items-center gap-2 flex-wrap text-white ">
                    {socials?.map((item, index) => (
                        <li key={index} className="flex items-center gap-4">
                            <a
                                onClick={() => setShowSidebar(false)}
                                href={item?.url}
                                target="_blank"
                                rel="noreferrer"
                                className=" duration-300 hover:text-orangeColor hover:scale-110"
                            >
                                {item?.icon && <item.icon size={20} />}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Sidebar