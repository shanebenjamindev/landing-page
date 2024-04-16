import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "@/constants";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav
      className="max-container padding-container flexBetween
    relative z-30 py-5    "
    >
      {/* LOGO */}
      <Link href={"/"}>
        <Image src="/hilink-logo.svg" alt=" logo" width={74} height={29} />
      </Link>

      {/* Navigator */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((nav) => (
          <Link
            href={nav.href}
            key={nav.key}
            className="regular-16 text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {nav.label}
          </Link>
        ))}
      </ul>

      {/* Button */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        alt="menu"
        src="/menu.svg"
        className="lg:hidden"
        width={32}
        height={32}
      ></Image>
    </nav>
  );
};

export default Navbar;
