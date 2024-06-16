import React from 'react'

export default function Technologies() {
    var techs=['Git','Npm','Node.js','SASS','WIX','unit testing']
  return (
<>
<section className='md:container py-10'>
<h1 className=" text-2xl md:text-6xl font-bold my-10">Technologies</h1>
<div className=' mx-auto'>
<label className='font-bold text-xl md:text-3xl my-3'> HTML,CSS</label><br/>
            <progress className="en mb-10 mt-3" value="90" max="100" > </progress> <br/>
           < label className='font-bold text-xl md:text-3xl my-3'>JavaScript , TypeScript</label><br/>
            <progress className="en mb-10 mt-3" value="80" max="100" > </progress> <br/>
            <label className='font-bold text-xl md:text-3xl '> React,Next.js</label><br/>

            <progress className="en mb-10 mt-3" value="70" max="100" >  </progress> <br/>
    </div>

    <div>
<h1 className=" text-2xl md:text-5xl font-bold mt-20 pb-16">Additional technologies and skills
</h1>
<div className='grid grid-cols-2 md:grid-cols-3 gap-y-9 items-center '>

{techs.map((tech)=>(

    <div className='flex items-center   '><div className='bg-gradient w-[26px] h-[26px] rounded-full me-6 '> </div><p className='text-lg lg:text-2xl font-bold'>{tech}</p></div>
))}
</div>

    </div>
</section>
</>  )
}
