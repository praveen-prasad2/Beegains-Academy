"use client";

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);



function page() {
  return (
    <div>
      
    </div>
  )
}

export default page
