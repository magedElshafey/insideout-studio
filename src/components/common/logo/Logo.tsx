import { Link } from "react-router-dom";

interface logoProps {
    logo?: string;
    style?: React.CSSProperties;
}

const Logo: React.FC<logoProps> = ({ logo, style }) => {
    return (
        <Link to="/">
            <img
                style={style}
                alt="logo"
                src={logo}
                className={`${style ? "" : " w-[100px] h-[28px] md:w-[136px] md:h-[39px]"
                    }`}
            />
        </Link>
    );
};

export default Logo;
