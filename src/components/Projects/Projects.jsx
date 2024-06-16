import React from 'react'


export default function Projects() {

const projects=[
  {img:'src/assets/proj1.png',title:'Foody Website',desc:'Responsive React.js website using tailwind css , generating products from a fake API , with Theme feature.',livePre:'https://666023f0c5e368d4b13d4f22--effervescent-cobbler-ba052f.netlify.app/',gitLink:'https://github.com/Jacklien-Kamal/Foody-React?tab=readme-ov-file'},
  {img:'src/assets/proj2.png',title:'Walmart Clone Website',desc:'Next.js e-commerce project with catalog, categories, item cards, and a shopping cart. Utilizes Next.js 13, TS, Tailwind CSS, Shadcn/ui, and React Hook Form. ',livePre:'https://walmart-next.vercel.app/',gitLink:'https://github.com/AndrewJacop/walmart-next.git'},
  {img:'src/assets/proj3.png',title:'Furniture e-commerce website',desc:' Responsive React.js website using tailwind css , generating products from a fake API with cat functionality',livePre:'https://666e2560ac3987580f3c4348--grand-kashata-75f178.netlify.app/',gitLink:'https://github.com/Jacklien-Kamal/Responsive-e-commerce-Momentum-solutions?tab=readme-ov-file'},
  {img:'https://www.upwork.com/att/download/portfolio/persons/uid/1747570654730399744/profile/projects/files/594d299c-a990-45a9-be9f-2fd05eb10da5',title:'Movies Time web site',desc:' React layout website using Bootstrap , applied full authontication with firebase, Search for and add movie to favourit',livePre:'',gitLink:'https://github.com/Jacklien-Kamal/Movies-Time---React-.git'},
  {img:'src/assets/proj4.png',title:'LinkedIn Clone',desc:'Responsive Html,CSS,JavaScript Full clone website ',livePre:'#',gitLink:'https://github.com/Jacklien-Kamal/Linked-In-Clone'},
  {img:'src/assets/proj5.png',title:'Resturant Website',desc:'HTML/CSS layout for an online Resturant store',livePre:'#',gitLink:'https://github.com/Jacklien-Kamal/restaurant-'},

]


  return (
    <section className=" lg:container   ">
    <h1 className=" text-4xl md:text-6xl font-bold my-10">Projects</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


      {projects.map((proj,idx)=>(


      <div key={idx} className="border border-primary rounded-3xl p-10 ">
      <img src={proj.img} className='lg:w-full lg:h-72'/>

        <h1 className='my-3 text-3xl font-bold'>{proj.title}</h1>
        <p className="mb-10 text-gray-400 w-[300px] md:w-full">
         {proj.desc}
        </p>
        <a
          href={proj.livePre}
          className="bg-gradient-to-r from-purple-500 to-cyan-500 text-xl font-bold py-3 rounded-full  px-5 inline-block transform transition-transform duration-300 ease-in-out  shadow-custom-light hover:scale-110 hover:shadow-more-custom-light"
        >
          Live Preview
        </a>
        <a
          href={proj.gitLink}
          className="px-5 py-3 text-xl ms-6 border border-white rounded-full inline-block transform transition-transform duration-300 hover:scale-110"
        >
          Github
        </a>
      </div>

      ))}




    </div>
  </section>  )
}
