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
            style={{ position:" absolute", top: "400px",left: "600px", width: 600,
              height: 150, 
             
              }}
        >
        <h1>web</h1>
        </motion.div>
        </>
    )
}

export default Box;


