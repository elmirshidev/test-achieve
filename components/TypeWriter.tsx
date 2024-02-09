"use client"
import { TypeAnimation } from "react-type-animation";

type props = {
    text:string;
}
export default function TypeWriter({ text }:props) {
    return (
        <TypeAnimation
            className={`h1`}
            preRenderFirstString={true}
            sequence={[
                1000,
                text+".", // initially rendered starting point
                4000,
                '',
            ]}
            speed={10}
            repeat={Infinity}
        />
    );
}
