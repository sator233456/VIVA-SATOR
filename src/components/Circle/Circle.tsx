"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'
import satorSpace3 from "/assets/satorspace3.png"

export function Circle() {
    return (
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden " className="bottom-0 right-0 hidden md:inline-block md:absolute -z-1">
            <Image src={satorSpace3} width="350" height="350" className="w-full h-full" alt="Circle" />
        </motion.div>
    )
}
