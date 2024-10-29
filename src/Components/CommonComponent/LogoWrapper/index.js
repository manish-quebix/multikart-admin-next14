import React, { useContext } from "react";
import ToggleButton from "./ToggleButton";
import Logo from "./Logo";
import Image from "next/image";
import SettingContext from "../../../Helper/SettingContext";
import LogoImg from "../../../../public/assets/images/logo.webp";

const LogoWrapper = ({ setSidebarOpen }) => {
  const { state } = useContext(SettingContext);
  return (
    <div className="logo-wrapper logo-wrapper-center">
      <Logo />
      <Image
        className="img-fluid logo-sm w-auto"
        src={
          state?.setTinyLogo?.original_url
            ? state?.setTinyLogo?.original_url
            : LogoImg
        }
        alt="The Heavenly Gifts"
        width={150}
        height={29}
      />
      <ToggleButton setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default LogoWrapper;
