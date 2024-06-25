import React from 'react'


export default function Projects() {

const projects=[
  {img:'https://www.upwork.com/att/download/portfolio/persons/uid/1747570654730399744/profile/projects/files/960bd803-4321-42e7-91af-6438a830dddc',title:'Foody Website',desc:'Responsive React.js website using tailwind css , generating products from a fake API , with Theme feature.',livePre:'https://666023f0c5e368d4b13d4f22--effervescent-cobbler-ba052f.netlify.app/',gitLink:'https://github.com/Jacklien-Kamal/Foody-React?tab=readme-ov-file'},
  {img:'https://www.upwork.com/att/download/portfolio/persons/uid/1747570654730399744/profile/projects/files/039f1168-c6c5-4a7b-b3f0-bac43c8f6777 ',title:'Walmart Clone Website',desc:'Next.js e-commerce project with catalog, categories, item cards, and a shopping cart. Utilizes Next.js 13, TS, Tailwind CSS, Shadcn/ui, and React Hook Form. ',livePre:'https://walmart-next.vercel.app/',gitLink:'https://github.com/AndrewJacop/walmart-next.git'},
  {img:'https://www.upwork.com/att/download/portfolio/persons/uid/1747570654730399744/profile/projects/files/48051c4f-4f28-4c0c-a674-6c84df49cfdb',title:'E-commerce website',desc:' Responsive React.js website using tailwind css , generating products from a fake API with cat functionality',livePre:'https://666e2560ac3987580f3c4348--grand-kashata-75f178.netlify.app/',gitLink:'https://github.com/Jacklien-Kamal/Responsive-e-commerce-Momentum-solutions?tab=readme-ov-file'},
  {img:'https://www.upwork.com/att/download/portfolio/persons/uid/1747570654730399744/profile/projects/files/594d299c-a990-45a9-be9f-2fd05eb10da5',title:'Movies Time web site',desc:' React layout website using Bootstrap , applied full authontication with firebase, Search for and add movie to favourit',livePre:'',gitLink:'https://github.com/Jacklien-Kamal/Movies-Time---React-.git'},
  {img:'https://www.upwork.com/att/download/portfolio/persons/uid/1747570654730399744/profile/projects/files/0aa15133-3c94-4210-a203-57cb34f1dce4',title:'LinkedIn Clone',desc:'Responsive Html,CSS,JavaScript Full clone website ',livePre:'#',gitLink:'https://github.com/Jacklien-Kamal/Linked-In-Clone'},
  {img:'https://www.upwork.com/att/download/portfolio/persons/uid/1747570654730399744/profile/projects/files/43ed4b8d-959e-4ffe-94fc-bb8ba55c08ad',title:'Resturant Website',desc:'HTML/CSS layout for an online Resturant store',livePre:'#',gitLink:'https://github.com/Jacklien-Kamal/restaurant-'},

]


  return (
    <section id='projects' className=" container   ">
    <h1 className=" text-4xl md:text-6xl font-bold my-10">Projects</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


      {projects.map((proj,idx)=>(


      <div key={idx} className="border border-primary rounded-3xl p-5 md:p-10">
      <img src={proj.img} className='lg:w-full lg:h-[380px]'/>

        <h1 className='my-3 text-xl font-bold'>{proj.title}</h1>
        <p className="mb-10 text-xs md:text-normal   text-gray-400 w-[300px] md:w-full">
         {proj.desc}
        </p>
        <a
          href={proj.livePre}
          className="bg-gradient-to-r from-purple-500 to-cyan-500 font-bold py-3 px-3 sm:py-4 sm:text-xl sm:px-5 rounded-full  px-1 inline-block transform transition-transform duration-300 ease-in-out  shadow-custom-light hover:scale-110 hover:shadow-more-custom-light"
        >
          Live Preview
        </a>
        <a
          href={proj.gitLink}
          className="px-3 py-2 sm:py-3 sm:px-5 text-lg sm:text-xl ms-2 sm:ms-5 border border-white rounded-full inline-block transform transition-transform duration-300 hover:scale-110"
        >
          Github
        </a>
      </div>

      ))}




    </div>
  </section>  )
}
