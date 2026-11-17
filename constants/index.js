export const Skill_data = [
  {
    skill_name: "Html 5",
    Image: "/html5.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    Image: "js.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "TypeScript",
    Image: "typescript.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js ",
    Image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
    width: 80,
    height: 80,
  },



  {
    skill_name: "React Native",
    Image: "/reactnative.png",
    width: 70,
    height: 70,
  }
];


export const Socials = [
  {
    name: "Git",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kikjv_63_53X3Ahbq5DNaJ3r1EYdJlvTHaFQVxlE9-AkJyU7llSBN8EM1GKoNjQxhYE&usqp=CAU",
    url: 'https://github.com/Jacklien-Kamal'
  },
  {
    name: "Facebook",
    src: "https://static.vecteezy.com/system/resources/previews/042/127/151/original/round-circle-black-and-white-facebook-logo-on-a-transparent-background-free-png.png",
    url: 'https://www.facebook.com/profile.php?id=100005125537767'
  },
  {
    name: "Linkedin",
    src: "https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png",
    url: 'https://www.linkedin.com/in/jacklin-kmal'
  },
];


export const Frontend_skill = [
  {
    skill_name: "Angular",
    Image: "angular.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tailwind",
    Image: "taillwind.jpeg",
    width: 70,
    height: 80,
  },


  {
    skill_name: "MaterialUI",
    Image: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
    width: 70,
    height: 70,
  },




  {
    skill_name: "Bootstrap",
    Image: "bootstrap.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Mongo db",
    Image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Node js",
    Image: "https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png",
    width: 65,
    height: 65,
  },


  {
    skill_name: "Firebase",
    Image: "firebase.png",
    width: 70,
    height: 70,
  },
];

export const Test_skill = [
  {
    skill_name: "Post Man",
    Image: "postman.png",
    width: 65,
    height: 65,
  },

  {
    skill_name: "Expo",
    Image: "expo.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "React query",
    Image: "react-query.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Redux",
    Image: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Webpack",
    Image: "https://miro.medium.com/v2/resize:fit:542/format:webp/0*QWJsNmIu81bhqgds.png",
    width: 70,
    height: 70,
  },



];

export const others = [

  {
    skill_name: "Github",
    Image: "/git.png",
    width: 70,
    height: 20,
  },

  {
    skill_name: "Figma",
    Image: "figma.png",
    width: 40,
    height: 50,
  },

];

export const Mobile_skill = [

  {
    skill_name: "Docker",
    Image: "/docker.png",
    width: 70,
    height: 70,
  }

];


// export const Mobile_skill = [
//  {
//     skill_name: "React Native",
//     Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207",
//     width: 70,
//     height: 70,
//   }
// ];



// ملاحظة: الـ tech و features و role مكتوبين من وصف كل مشروع، راجعهم وعدّل اللي مش مظبوط.
// أي حقل مش موجود (images / longDesc / year / client) الصفحة بتتجاهله تلقائيًا.

export const projectCategories = [
  "All",
  "Company",
  "E-commerce",
  "Dashboard",
  "Web App",
  "Clone",
  "Portfolio",
  "Landing Page",
];

export const projects = [
{
  id: "ramec-group",
  title: "Ramec Group",
  img: "/ramec.png",
  category: "Company",
  featured: true,
  status: "Live",
  role: "Full-Stack Developer",
  tech: ["Next.js", "SQLite", "Tailwind CSS", "i18n", "Admin Dashboard"],
  desc: "Full-stack bilingual (German/English) corporate website built with Next.js and SQLite, with an admin dashboard.",
  longDesc: "A full-stack corporate website for Ramec Group built with Next.js and SQLite, styled with Tailwind CSS. It supports German and English, presents the company's services, projects, and business information, and includes an admin dashboard for managing content.",
  features: [
    "Full-stack app: Next.js frontend and backend with SQLite database",
    "German and English language support",
    "Admin dashboard for managing content",
    "Fully responsive on desktop, tablet, and mobile",
  ],
  livePre: "https://ramec-germany.com/",
  gitLink: null,
},
  {
    id: "jood-clinic",
    title: "Jood Clinic Center",
    img: "/jood.png",
    category: "Company",
    featured: true,
    status: "Live",
    role: "Frontend Developer",
    tech: ["React.js", "Tailwind CSS", "Responsive Design"],
    desc: "Responsive healthcare website giving patients clear information about services, doctors, and clinic facilities.",
    longDesc:
      "A responsive healthcare website for a medical clinic, providing patients with clear information about services, doctors, and clinic facilities through an easy-to-use interface.",
    features: [
      "Services and doctors pages",
      "Clinic facilities overview",
      "Easy-to-use, mobile-friendly interface",
    ],
    livePre: "https://jood.clinic/",
    gitLink: null,
  },
  {
    id: "kalaks",
    title: "KALAKS",
    img: "/kalaks.png",
    category: "Web App",
    featured: true,
    status: "Live",
    role: "Frontend Developer",
    tech: ["React.js", "Tailwind CSS", "Reusable Components"],
    desc: "Responsive web application with a modern UI, structured layouts, and reusable components.",
    longDesc:
      "A responsive web application with a modern user interface, structured layouts, reusable components, and an optimized experience across desktop and mobile devices.",
    features: [
      "Modern, structured UI",
      "Reusable component architecture",
      "Optimized for desktop and mobile",
    ],
    livePre: "http://72.61.167.203:8028/",
    gitLink: null,
  },
  {
    id: "system-dashboard",
    title: "System Dashboard",
    img: "/dash.png",
    category: "Dashboard",
    featured: true,
    status: "Live",
    role: "Frontend Developer",
    tech: ["React.js", "Tailwind CSS", "Data Tables"],
    desc: "Modern admin dashboard for managing clinic operations with organized data views.",
    longDesc:
      "A modern admin dashboard for managing clinic operations, featuring organized data views, responsive layouts, and an intuitive interface for daily management tasks.",
    features: [
      "Organized data views and tables",
      "Responsive admin layout",
      "Built for daily clinic management tasks",
    ],
    livePre: "https://centeradmin.dreasey.com/",
    gitLink: null,
  },
  {
    id: "company-portfolio",
    title: "Company Portfolio Website",
    img: "/company.png",
    category: "Company",
    featured: true,
    status: "Live",
    role: "Frontend Developer",
    tech: ["React.js", "Tailwind CSS", "i18n", "RTL/LTR"],
    desc: "Bilingual (Arabic/English) corporate website with RTL/LTR support and a built-in admin dashboard.",
    longDesc:
      "A modern responsive corporate website with full Arabic and English support (RTL/LTR), presenting the company's services, projects, and business information, plus an admin dashboard for managing content.",
    features: [
      "Arabic and English with RTL/LTR switching",
      "Admin dashboard for managing content",
      "Fully responsive design",
    ],
    livePre: "https://ai.zentixeg.com/",
    gitLink: null,
  },
  {
    id: "foody",
    title: "Foody Website",
    img: "https://www.upwork.com/att/download/portfolio/persons/uid/1747570654730399744/profile/projects/files/ea15a37f-59bc-4b94-a99b-42c41c9e3cea",
    category: "Web App",
    status: "Live",
    role: "Frontend Developer",
    tech: ["React.js", "Tailwind CSS", "REST API"],
    desc: "Responsive React food website with dynamic product rendering from a fake API and theme switching.",
    longDesc:
      "A responsive React.js food website built with Tailwind CSS, featuring dynamic product rendering from a fake API, responsive layouts, and a theme switching feature.",
    features: [
      "Dynamic products fetched from a fake API",
      "Light/dark theme switching",
      "Responsive layouts",
    ],
    livePre: "https://foody-site-iota.vercel.app/",
    gitLink: "https://github.com/Jacklien-Kamal/Foody-React?tab=readme-ov-file",
  },
  {
    id: "walmart-clone",
    title: "Walmart Clone Website",
    img: "https://www.upwork.com/att/download/portfolio/persons/uid/1747570654730399744/profile/projects/files/039f1168-c6c5-4a7b-b3f0-bac43c8f6777",
    category: "E-commerce",
    status: "Live",
    role: "Frontend Developer",
    tech: ["Next.js", "Tailwind CSS", "React"],
    desc: "E-commerce website inspired by Walmart with categories, catalog pages, and a shopping cart.",
    longDesc:
      "An e-commerce website inspired by Walmart, built with Next.js and Tailwind CSS. Includes product categories, catalog pages, item cards, shopping cart functionality, and reusable UI components.",
    features: [
      "Product categories and catalog pages",
      "Shopping cart functionality",
      "Reusable UI components",
    ],
    livePre: "https://walmart-next.vercel.app/",
    gitLink: "https://github.com/AndrewJacop/walmart-next.git",
  },
  {
    id: "ecommerce-momentum",
    title: "E-commerce Website",
    img: "https://www.upwork.com/att/download/portfolio/persons/uid/1747570654730399744/profile/projects/files/48051c4f-4f28-4c0c-a674-6c84df49cfdb",
    category: "E-commerce",
    status: "Live",
    role: "Frontend Developer",
    tech: ["React.js", "Tailwind CSS"],
    desc: "Responsive React e-commerce website with dynamic product data and category filtering.",
    longDesc:
      "A responsive React.js e-commerce website built with Tailwind CSS, featuring dynamic product data, category filtering, product cards, and a clean shopping experience.",
    features: [
      "Dynamic product data",
      "Category filtering",
      "Clean product cards and shopping flow",
    ],
    livePre: "https://responsive-e-commerce-momentum-solutions.vercel.app/",
    gitLink:
      "https://github.com/Jacklien-Kamal/Responsive-e-commerce-Momentum-solutions?tab=readme-ov-file",
  },
  {
    id: "movies-time",
    title: "Movies Time Website",
    img: "https://www.upwork.com/att/download/portfolio/persons/uid/1747570654730399744/profile/projects/files/594d299c-a990-45a9-be9f-2fd05eb10da5",
    category: "Web App",
    status: "Live",
    role: "Frontend Developer",
    tech: ["React.js", "Bootstrap", "Firebase Auth"],
    desc: "React movie discovery website with Firebase authentication, search, and favorites.",
    longDesc:
      "A React movie discovery website built with Bootstrap and Firebase authentication, allowing users to search for movies, manage favorites, and access personalized content.",
    features: [
      "Movie search",
      "Favorites list per user",
      "Firebase authentication",
    ],
    livePre: "https://66890099445f1d1481a1551c--bejewelled-pastelito-ca33c7.netlify.app/",
    gitLink: "https://github.com/Jacklien-Kamal/Movies-Time---React-.git",
  },
  {
    id: "linkedin-clone",
    title: "LinkedIn Clone",
    img: "https://www.upwork.com/att/download/portfolio/persons/uid/1747570654730399744/profile/projects/files/0aa15133-3c94-4210-a203-57cb34f1dce4",
    category: "Clone",
    status: "Live",
    role: "Frontend Developer",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "Responsive LinkedIn-inspired social platform recreating the core layout and UI.",
    longDesc:
      "A responsive LinkedIn-inspired social platform built with HTML, CSS, and JavaScript, recreating the core layout and user interface of a professional networking website.",
    features: [
      "Pixel-focused recreation of the LinkedIn layout",
      "Fully responsive",
      "Built with vanilla HTML, CSS, and JavaScript",
    ],
    livePre: "https://linked-in-clone-kohl.vercel.app/",
    gitLink: "https://github.com/Jacklien-Kamal/Linked-In-Clone",
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio",
    img: "https://www.upwork.com/att/download/portfolio/persons/uid/1747570654730399744/profile/projects/files/d09ade15-c265-4203-82df-b9eb0f8e7ffb",
    category: "Portfolio",
    status: "Live",
    role: "Frontend Developer",
    tech: ["React.js", "Tailwind CSS"],
    desc: "Modern responsive developer portfolio showcasing projects, skills, and experience.",
    longDesc:
      "A modern responsive developer portfolio built with React.js and Tailwind CSS to showcase projects, technical skills, experience, and professional information.",
    features: [
      "Projects, skills, and experience sections",
      "Fully responsive",
      "Gradient-themed modern UI",
    ],
    livePre: "https://portofolio-xiw4.vercel.app/",
    gitLink: "https://github.com/Jacklien-Kamal/portofolio",
  },
  {
    id: "tod-movie",
    title: "TOD Movie Website",
    img: "https://res.cloudinary.com/dk2uh7sho/image/upload/v1729808713/Screenshot_2024-10-25_012311_jbqpo9.png",
    category: "Web App",
    status: "Live",
    role: "Frontend Developer",
    tech: ["React.js", "Firebase", "Admin Dashboard"],
    desc: "Full-featured movie platform with browsing, authentication, and an admin dashboard.",
    longDesc:
      "A full-featured responsive movie platform built with React.js and Firebase, including movie browsing, user authentication, and an admin dashboard for content management.",
    features: [
      "Movie browsing",
      "User authentication",
      "Admin dashboard for content management",
    ],
    livePre: "https://my-movie-app-sable.vercel.app/",
    gitLink: "https://github.com/Jacklien-Kamal/my-movie-app/",
  },
  {
    id: "pharmacy",
    title: "Pharmacy Website",
    img: "https://res.cloudinary.com/dk2uh7sho/image/upload/v1729809247/Screenshot_2024-10-25_013346_uep6dy.png",
    category: "E-commerce",
    status: "Live",
    role: "Frontend Developer",
    tech: ["React.js", "Firebase", "Admin Dashboard"],
    desc: "Responsive pharmacy web app with product browsing, categories, authentication, and an admin dashboard.",
    longDesc:
      "A responsive pharmacy web application built with React.js and Firebase, featuring product browsing, organized categories, authentication, and an admin dashboard for managing content.",
    features: [
      "Product browsing with organized categories",
      "User authentication",
      "Admin dashboard for managing content",
    ],
    livePre: "https://66b74450e930a1159f459360--grand-kitsune-151c45.netlify.app/",
    gitLink: "https://github.com/Jacklien-Kamal/Pharmacy",
  },
  {
    id: "arabic-flower-shop",
    title: "Arabic Flower Shop",
    img: "https://res.cloudinary.com/dk2uh7sho/image/upload/v1733575827/Screenshot_2024-11-05_015637_gikrvl.png",
    category: "Landing Page",
    status: "Live",
    role: "Frontend Developer",
    tech: ["HTML", "CSS", "JavaScript", "RTL"],
    desc: "Elegant Arabic flower shop landing page with responsive design and smooth animations.",
    longDesc:
      "An elegant Arabic flower shop landing page built with HTML, CSS, and JavaScript, featuring responsive design, smooth animations, and an engaging visual experience.",
    features: [
      "Arabic (RTL) layout",
      "Smooth animations",
      "Fully responsive",
    ],
    livePre: "https://flowershop-lake.vercel.app/",
    gitLink: "https://github.com/Jacklien-Kamal/Flower-site-template",
  },
];
export const mobileProjects = [
  {
    id: "nexgen-academy",
    title: "NexGen Academy",
    images: ["/nexGent2.webp", "/nexgen.webp", "/nexgen3.jpg"],
    category: "E-learning",
    platform: "iOS & Android",
    role: "Mobile Developer",
    tech: ["React Native", "Expo", "JavaScript", "React Query", "RTL/LTR"],
    desc: "Learning app where students follow their courses and progress, discuss in a community feed, and trainers track their earnings.",
    features: [
      "Courses with progress tracking and continue-learning flow",
      "Community feed with posts, likes, and threaded comments",
      "Trainer wallet with balance, invoices, commission, and withdrawals",
    ],
    playStore: null,
    appStore: null,
  },
  {
    id: "evangelion",
    title: "Eve Angelion",
    images: ["/evangelion5.png","/evangelion4.png","/evangelion0.png", "/image.png"],
    category: "Religious / Education",
    platform: "Android",
    role: "Mobile Developer",
    tech: ["React Native", "Expo", "RTL", "Dark/Light Theme"],
    desc: " App for testing and growing Bible knowledge, with Quizes, posts feed, likes and sharing, and a points system.",
    features: [
      " Live Quizes ",
      "Dark and light themes",
      "Posts feed with like and share actions",
      "User profile with points",
    ],
    playStore: null,
    appStore: null,
  },
  {
    id: "dreasy",
    title: "DrEasy", // ?
    images: ["/drEasy1.jpg","drEasy0.jpg","drEasy2.jpg","dreasy4.jpg"],
    category: "Healthcare",
    platform: "Android",
    role: "Mobile Developer",
    tech: ["React Native", "Expo", "Multi-step Forms"],
    desc: "Medical community app with a multi-step sign-up flow where users join through an organization code or by choosing a specialist.",
    features: [
      "Login and 3-step sign-up wizard",
      "Join by organization code or specialist selection",
      "Clean, responsive mobile UI",
    ],
    playStore: null,
    appStore: null,
  },
  {
    id: "kafd-assistant",
    title: "KAFD Smart Assistant",
    images: ["/kafd2.jpg","/kafd3.jpeg"],
    category: "AI Chatbot",
    platform: "Android",
    role: "Mobile Developer",
    tech: ["React Native", "Expo", "AI Chat", "RTL"],
    desc: "Arabic AI assistant that answers questions about King Abdullah Financial District in a chat interface.",
    features: [
      "Real-time AI chat in Arabic",
      "Conversation UI with RTL support",
      "Floating assistant control",
    ],
    playStore: null,
    appStore: null,
  },
  {
    id: "bible-kids-store",
    title: "Bible Kids Store", 
    images: ["/Bible.png"],
    category: "Religious / Education",
    platform: "iOS & Android",
    role: "Mobile Developer",
    tech: ["React Native", "Expo", "RTL"],
    desc: "Arabic app for Sunday-school servants with stores for teaching resources, games, and competitions, plus teaching methods.",
    features: [
      "Resources, games, and competitions stores",
      "Teaching ideas and explanation methods",
      "Favorites and personal account tabs",
    ],
    playStore: null,
    appStore: null,
  },
  // {
  //   id: "theosumma",
  //   title: "TheoSumma",
  //   images: ["/theoSumma.jpg","/theosumma.jpeg"],
  //   category: "Education",
  //   platform: "iOS",
  //   role: "Mobile Developer",
  //   tech: ["React Native", "Expo"],
  //   desc: "Theology knowledge app — \"To Redeem Knowledge\".", // ? edit
  //   features: [],
  //   playStore: null,
  //   appStore: null,
  // },
];