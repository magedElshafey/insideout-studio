import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/AuthProvider";
const RedirecIfLogin = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);
  const currentLocation = window.location.pathname;
  useEffect(() => {
    if (user) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(timer);
            navigate("/my-profile", {
              replace: true,
              state: { from: currentLocation },
            });
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [navigate, user]);
  if (!user) {
    return <Outlet />;
  }
  return (
    <div className="w-full flex justify-center">
      <div className="container">
        <div className="w-full md:w-[350px] lg:w-[400px] mx-auto py-3 px-6 rounded-md shadow-mainShadow h-[300px]">
          <div className="w-full h-full flex flex-col items-center gap-4 justify-center">
            <h1 className="text-[12px] md:text-[14px] lg:text-[15px] xl:text-base text-blueColor">
              {t(
                "you can't reach this page , because you are already logged in , you need to logout first"
              )}
            </h1>
            <div className="text-textColor text-center">
              {t("you will be redirect to your profile within")}{" "}
              <span className="font-bold text-orangeColor">{countdown}</span>{" "}
              {t("seconds")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirecIfLogin;
