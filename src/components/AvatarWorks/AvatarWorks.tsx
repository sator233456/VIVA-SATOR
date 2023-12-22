"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'
import satorSpace2 from "/assets/satorspace2.png"

export function AvatarWorks() {

    return (
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden" className="bottom-0 left-0 hidden md:inline-block md:absolute -z-20">
            <Image src={satorSpace2} alt="Avatar works" width="350" height="350" className="w-full h-full" />
        </motion.div>
    )
}
