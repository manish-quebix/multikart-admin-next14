import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import SettingContext from "../../../Helper/SettingContext";

const Logo = () => {
  const { state, settingObj } = useContext(SettingContext);
  return (
    <Link href="/dashboard">
      {state?.setLightLogo?.original_url ? (
        <Image
          className="for-white"
          src={`${state?.setLightLogo?.original_url}`}
          alt="The Heavenly Gifts"
          width={1300}
          height={500}
          priority
        />
      ) : (
        <h2 className="text-white">
          {settingObj?.general?.site_name || "The Heavenly Gifts"}
        </h2>
      )}
    </Link>
  );
};

export default Logo;
