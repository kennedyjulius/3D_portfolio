import {
    mobile,
    backend,
    flutter,
    web,
    javascript,
    typescript,
    html,
    css,
    threejs,
    reactjs,
    laravel,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    deveintlogo,
    Viciocodelogo,
    ramitech,
    sttheresa,
    foodapp,
    bettingtipsapp,
    konnectui,
    sokoflow,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web 3 Developer",
      icon: web,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Flutter Developer",
      company_name: "Deveint Limited",
      icon: deveintlogo,
      iconBg: "#383E56",
      date: "January 2024- Present",
      points: [
        "Developing and maintaining Mobile applications using Flutter and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-platform compatibility.",
        "Participating in code reviews and maintenace to company code.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Viciocodetech limited",
      icon: Viciocodelogo,
      iconBg: "#E6DEDD",
      date: "June 2023 - Nov 2023",
      points: [
        "Developing and maintaining mobile applications using Flutter and Laravel for Backend.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and maintenance and debugging",
      ],
    },
    {
      title: "Network Technician",
      company_name: "Ramitech Networks",
      icon: ramitech,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Installation and Maintenance of clients Fiber networks",
        "Running fiber cables to clients premises.",
        "configuration and troubleshooting of  routers.",
        "configuring new clients routers ",
      ],
    },
    {
      title: "ICT Intern",
      company_name: "St Theresa Mission Hospital -Kiirua",
      icon: sttheresa,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaning new Lan Network",
        "Offering ICT support to company devices and computing assets when required.",
        "Monitoring and maintenance of company systems and giving feeddback where necessary",
        "Maintenace of company Servers and Hosted Platforms",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Food App",
      description:
        "Mobile-based solution that allows users to Order, Pay and get Food delivered  at their places of work , Bussiness complex and other areas",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "laravel",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: foodapp,
      source_code_link: "https://github.com/kennedyjulius/food_App_dbstech",
    },
    {
      name: "Football Tips",
      description:
        "Mobile application that enables users to  get latest updates on tips of coming matches and help them make sound choices.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: bettingtipsapp,
      source_code_link: "https://github.com/kennedyjulius/football_tips",
    },
    {
      name: "Sokoflow V1",
      description:
        "A comprehensive travel Merchandizing platform that allows employees be able to manage stocks effectivelly while management gets real time updates and reports and schedule routes.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "laravel",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: sokoflow,
      source_code_link: "https://play.google.com/store/apps/details?id=com.sidai.sokoflow",
    },

    {
      name: "Konnect UI",
      description:
        "A UI/UX clone of the famous E-Commerce Platfor powered by connect.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: konnectui,
      source_code_link: "https://github.com/kennedyjulius",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };