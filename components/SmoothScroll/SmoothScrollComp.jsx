"use client"
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrollComp({ children }) {
  return <ReactLenis root option={{
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: true
  }}>{children}</ReactLenis>;
}
