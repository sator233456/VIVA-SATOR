import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'
import BitcoinPrice from '@/components/BTCprice/BitcoinPrice';
import Logo from "public/assets/322738.png"

export function Introduction() {
    return (
        <div className="bg-[#131424]/30 w-full  z-10    ">
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10  ">
                <div className="container grid items-center h-full w-full p-20 px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div className="hidden w-auto h-auto mx-auto md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src={Logo} priority width="500" height="600" alt="Avatar" />
                    </motion.div>

                    <motion.div variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"

                        
                    >



                        <h1 className="mb-5 text-4xl leading-tight md:mb-10">Welcome to $ATOR-<a href='https://cybord.org/' target='_blank'>CBRC-20</a>  <br />
                            <span className="text-secondary">Unveiling the Crypto Enigma</span></h1>
                            <div className="flex  items-center leading-tight gap-3 md:gap-10 md:mb-10">
                            <BitcoinPrice /> 
                            </div>
                        <p className="max-w-sm  mb-10 text-xl md:max-w-2xl md:mx-0 md:mb-16 md:text-l">
                        $ator is not just a token; it is a journey inspired by the ancient enigma of the <b>Sator palindrome.</b> Delve into the depths of crypto possibilities with a token that embodies the spirit of choice, destiny, and the cosmic dance of the decentralized universe.
                        </p>
                        <div >
                        <p className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50" ><a href='https://cybord.org/#overview-of-cbrc-20-features' target='_blank'>What is cbrc-20 metaprotocol on btcoin?</a></p>
                        </div>
                        

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                            <a href="https://magiceden.io/ordinals/wallet?walletAddress=bc1q0u8al9d5dddd9rswz5w7n5c4d4mk5uq6e5vays" target="_blank"  className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                                Buy $ATOR
                            </a> 
                            <a href="https://ordinals.com/inscription/d95b2098e05e15fc027405e22209ddbaf5ee990345f21cb804b24ef1004c3c8ai0" target="_blank" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Ordinal Inscription
                            </a>
                            <p className="max-w-sm  mb-10 text-l md:max-w-xl md:mx-0 md:mb-16 md:text-l" >Sow. Reap. Decide.</p>
                        </div>
                        
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
