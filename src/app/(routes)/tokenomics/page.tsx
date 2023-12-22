import { Tokenomics } from "@/components/Tokenomics";
import { Transition } from "@/components/Transition/Transition";


export default function TokenomicsPage() {
    return (
        <div className="min-h-screen ">
            <Transition />
            <Tokenomics />
        </div>
    )
}
