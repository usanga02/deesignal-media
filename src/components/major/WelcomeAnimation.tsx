import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WelcomeAnimation = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 7000); // Adjust the delay (in milliseconds) as per your preference
    const textTimer = setTimeout(() => {
      setTextAnimationComplete(true);
    }, 5000); // Adjust the delay (in milliseconds) as per your preference

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, []);

  const animationVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 0, y: -20, zIndex: -1 },
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      transition={{ duration: 1 }}
      animate={animationComplete ? "exit" : "animate"}
      exit="exit"
      className="fixed flex-col top-0 z-50 left-0 w-full font-bold font-druk-wide h-full text-[10px] md:text-2xl gap-4 flex justify-center items-center bg-gray-900 text-white"
    >
      <motion.h1
        // variants={animationVariants}
        initial={{ x: "200%" }}
        transition={{ duration: 2 }}
        animate={textAnimationComplete ? "exit" : { x: "0%" }}
        exit={{ x: 0 }}
        className=""
      >
        "Our aim is to create beautiful memories of
      </motion.h1>
      <motion.h1
        initial={{ x: "-200%" }}
        transition={{ duration: 2 }}
        animate={textAnimationComplete ? "exit" : { x: "0%" }}
        exit={{ x: 0 }}
        className=""
      >
        moments that you can access whenever & will
      </motion.h1>
      <motion.h1
        initial={{ x: "400%" }}
        transition={{ duration: 2 }}
        animate={textAnimationComplete ? "exit" : { x: "0%" }}
        exit={{ x: 0 }}
        className=""
      >
        cherish forever."
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.2 }}
        transition={{ duration: 2 }}
        animate={
          textAnimationComplete ? "exit" : { opacity: 1, y: 0, scale: 1 }
        }
        className="flex flex-col mt-10 items-center"
      >
        <hr className="w-8 h-1 bg-light text-5xl" />
        <h1 className="opacity-20 mt-2">Deesignal Media</h1>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeAnimation;
