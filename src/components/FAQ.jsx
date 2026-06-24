import { useState } from "react";

const faqs = [

{
q:"Who can participate?",
a:"Students from all departments are welcome."
},

{
q:"Will certificates be provided?",
a:"Yes, participation certificates will be provided."
},

{
q:"Is registration mandatory?",
a:"Yes, registration is required."
},

{
q:"Will the registration fee be announced later?",
a:"Yes, details will be updated soon."
}

];

export default function FAQ(){

const [open,setOpen]=useState(null);

return(

<section

id="faq"

className="max-w-5xl mx-auto py-28 px-6"

>

<div className="text-center mb-16">

<p className="text-blue-400">

FAQ

</p>

<h2 className="text-5xl font-bold mt-4">

Frequently Asked Questions

</h2>

</div>

{

faqs.map((faq,index)=>(

<div

key={index}

className="mb-6"

>

<button

onClick={()=>setOpen(

open===index

? null

: index

)}

className="

w-full

text-left

p-8

bg-white/5

border

border-white/10

rounded-3xl

"

>

{faq.q}

</button>

{

open===index &&

<div

className="

p-8

text-gray-400

"

>

{faq.a}

</div>

}

</div>

))

}

</section>

)

}