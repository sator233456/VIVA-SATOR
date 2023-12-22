"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logoSator from "public/assets/logosator.png"

export function Avatar() {
    return (
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src={logoSator} width="400" height="400" className="w-full h-full" alt="Particles" />
        </motion.div>
    )
}
