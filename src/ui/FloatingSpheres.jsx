import { motion } from "framer-motion";

export default function FloatingSpheres(){

return(

<>

<motion.div

animate={{

y:[0,-40,0]

}}

transition={{

repeat:Infinity,

duration:5

}}

className="absolute top-32 left-20 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"

/>

<motion.div

animate={{

y:[0,50,0]

}}

transition={{

repeat:Infinity,

duration:6

}}

className="absolute top-96 right-20 w-52 h-52 rounded-full bg-cyan-500/20 blur-3xl"

/>

</>

)

}