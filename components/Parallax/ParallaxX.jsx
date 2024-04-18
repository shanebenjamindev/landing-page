import React, { useEffect, useRef } from 'react';
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useWindowSize } from "@studio-freight/hamo"
export default function ParallaxY({ className, children, speed = 1, id = "parallaxY" }) {

    const trigger = useRef();
    const target = useRef();
    const timeline = useRef();


    const { width: windowWidth } = useWindowSize();


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const x = windowWidth * speed * 0.1;

        const setX = gsap.quickSetter(target.current, "x", "px");

        timeline.current = gsap.timeline({
            scrollTrigger: {
                id: id,
                trigger: trigger.current,
                scrub: true,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (e) => {
                    setX(e.progress * x)
                }
            }
        })

        return () => {
            timeline?.current?.kill()
        }
    }, [id, speed, windowWidth])

    return (
        <div ref={trigger} className={className}>
            <div ref={target}>
                {children}
            </div>
        </div>
    )

}