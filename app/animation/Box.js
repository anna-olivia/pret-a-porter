"use client";

import {motion} from "motion/react";

const Box = () => {
    return (
        <>
        <motion.div
        initial={{opacity:0, scale:0.5}}
            animate={{
                opacity: 1, scale: 1,
            }}
            transition={{
                delay: 3.5,
                duration: 2,
                ease: "easeInOut",
                
      
            }}
        >
        <span>web</span>
        </motion.div>
        </>
    )
}

export default Box;


