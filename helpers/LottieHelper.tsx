"use client"
import React from 'react'
import Lottie from "lottie-react";

type params = {
    jsonFile:any
}
export default function LottieHelper({jsonFile}:params) {
  return (
    <Lottie className={`bg-transparent`} animationData={jsonFile} loop={true}/>
  )
}