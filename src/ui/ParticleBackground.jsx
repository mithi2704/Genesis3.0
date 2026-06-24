import Particles from "react-tsparticles";

export default function ParticleBackground(){

return(

<Particles

options={{

background:{color:"#040814"},

particles:{

number:{value:100},

color:{value:"#2563eb"},

move:{enable:true,speed:1},

links:{

enable:true,

distance:150,

color:"#2563eb"

}

}

}}

/>

)

}