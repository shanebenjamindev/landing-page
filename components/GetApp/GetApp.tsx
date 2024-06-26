"use client";
import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import Parallax from "@/components/Parallax/Parallax";

const GetApp = () => {
  return (
    <section className=" flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <Parallax speed={-0.5} className={"self-start"}>
            <h2 className="bold-40 lg:bold-64 xl:max-w-[420px]">
              Get for free now!
            </h2>
            <p className="regular-16 text-gray-10">
              Available on iOS and Android
            </p>
            <br></br>
            <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
              <Button
                type="button"
                title="App Store"
                icon="/apple.svg"
                variant="btn_white"
                full
              />
              <Button
                type="button"
                title="Play Store"
                icon="/android.svg"
                variant="btn_dark_green_outline"
                full
              />
            </div>
          </Parallax>
        </div>

        <div className={"flex flex-1 items-center justify-end"}>
          <Parallax className={"self-end"} speed={2}>
            <Image src="/phones.png" alt="phones" width={550} height={870} />
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
