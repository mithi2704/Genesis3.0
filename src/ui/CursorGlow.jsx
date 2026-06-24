import { useEffect } from "react";

export default function CursorGlow(){

useEffect(()=>{

const glow=document.getElementById("cursor");

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

})

},[])

return(

<div

id="cursor"

className="fixed w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-0"

/>

)

}