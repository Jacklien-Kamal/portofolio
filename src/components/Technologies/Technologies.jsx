import React from 'react'

export default function Technologies() {
    var techs=['Git','Tailwind','Bootstrap','Npm','Node.js','WIX','SASS','Gulp unit testing','React native']
  return (
<>
<section id='technologies' className='md:container py-10'>
<h1 className=" text-2xl md:text-6xl font-bold my-10">Technologies</h1>
<div className=' mx-auto'>
<label className='font-bold text-xl md:text-3xl my-3'> HTML,CSS</label><br/>
            <progress className="en mb-10 mt-3" value="90" max="100" > </progress> <br/>
           < label className='font-bold text-xl md:text-3xl my-3'>JavaScript </label><br/>
            <progress className="en mb-10 mt-3" value="90" max="100" > </progress> <br/>
           < label className='font-bold text-xl md:text-3xl my-3'> TypeScript</label><br/>
            <progress className="en mb-10 mt-3" value="88" max="100" > </progress> <br/>
           < label className='font-bold text-xl md:text-3xl my-3'>React</label><br/>
            <progress className="en mb-10 mt-3" value="85" max="100" > </progress> <br/>
            <label className='font-bold text-xl md:text-3xl '>Next.js</label><br/>
            <progress className="en mb-10 mt-3" value="70" max="100" >  </progress> <br/>
           < label className='font-bold text-xl md:text-3xl my-3'>Angular</label><br/>
            <progress className="en mb-10 mt-3" value="60" max="100" > </progress> <br/>
         
    </div>

    <div>
<h1 className=" text-2xl md:text-5xl font-bold mt-20 pb-16">Additional technologies and skills
</h1>
<div className='grid grid-cols-2 md:grid-cols-3 gap-y-9 items-center '>

{techs.map((tech,idx)=>(

    <div key={idx} className='flex items-center   '><div className='bg-gradient w-[26px] h-[26px] rounded-full me-6 '> </div><p className='text-lg lg:text-2xl font-bold'>{tech}</p></div>
))}
</div>

    </div>
</section>
</>  )
}
