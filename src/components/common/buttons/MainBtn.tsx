import { useTranslation } from "react-i18next";

interface MainBtnProps {
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>, ...args: any[]) => Promise<string | void> | string | void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const MainBtn: React.FC<MainBtnProps> = ({
    text,
    onClick,
    type = "button",
    disabled = false,
}) => {
    const { t } = useTranslation();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button
            disabled={disabled}
            type={type}
            onClick={handleClick}
            className="w-full flex items-center justify-center py-2 px-6 bg-blueColor text-white font-medium rounded-lg"
        >
            {t(text)}
        </button>
    );
};

export default MainBtn;

