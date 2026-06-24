import { motion } from "framer-motion";

export default function LoadingScreen(){

return(

<motion.div

initial={{opacity:1}}

animate={{opacity:0}}

transition={{delay:2,duration:1}}

className="fixed inset-0 bg-black flex items-center justify-center z-50"

>

<div>

<h1 className="text-5xl font-bold">

GENESIS 3.0

</h1>

<p className="text-blue-400">

Initializing Innovation...

</p>

</div>

</motion.div>

)

}