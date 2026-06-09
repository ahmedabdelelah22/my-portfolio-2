import {
  Code,
  Globe,
  Server,
  Atom,
  Layers3,
} from "lucide-react";

export const personal = {
  name: 'Ahmed Abdelelah Rashad',
  title: 'Full-Stack Web Developer',
  email: 'ahmedabdelelah909493@gmail.com',
  phone: '01090949310',
  github: 'ahmedabdelelah22',
  githubUrl: 'https://github.com/ahmedabdelelah22',
  location: 'Mansoura, Egypt',
  bio: "I'm a Full-Stack Web Developer based in Mansoura, Egypt, graduated from the Faculty of Computer Science & Information Technology at Mansoura University in 2023. I completed all of Jonas Schmedtmann's courses on Udemy, mastering JavaScript, React, Next.js, Node.js, Express, and MongoDB. I love building real-world applications with clean architecture and great user experiences.",
  linkedinUrl: 'https://linkedin.com/in/ahmed-abdelelah',
  portfolioUrl: 'https://my-portfolio-after-update-2.vercel.app/',
  cvUrl: '/Ahmed_Abdelelah_CV.pdf', // Place PDF in public folder
}
// https://raw.githubusercontent.com/ahmedabdelelah22/my-portfolio-2/main/public/Ahmed_Abdelelah_CV.pdf
export const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Redux', 'React Query', 'React Router', 'Tailwind CSS', 'Styled Components'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Stripe Payments', 'Resend Email'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Supabase'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    items: ['Git', 'GitHub', 'Railway', 'Vercel', 'Netlify', 'Vite', 'npm'],
  },
]

export const projects = [
  {
    name: 'Natours',
    emoji: '🌿',
    description: 'Full-stack tour booking platform with user authentication, role-based access, Stripe payments, email notifications, and a RESTful API. Deployed on Railway.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'Pug'],
    live: 'https://natours-production-b3f7.up.railway.app',
    github: 'https://github.com/ahmedabdelelah22',
    badge: 'Deployed',
  },
    {
    name: 'Natours-React',
    emoji: '🌿',
    description: 'Full-stack tour booking platform with user authentication, role-based access, Stripe payments, email notifications, and a RESTful API. Deployed on Railway.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'REact'],
    live: 'https://natours-react-psi.vercel.app/',
    github: 'https://github.com/ahmedabdelelah22',
    badge: 'Deployed',
  },
  {
    name: 'The Wild Oasis',
    emoji: '🏨',
    description: 'Internal hotel management dashboard for staff to manage cabins, bookings, and guests. Features real-time data, dark mode, charts, and full CRUD operations.',
    tech: ['React', 'Supabase', 'React Query', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/ahmedabdelelah22',
    live: 'https://the-wild-oasis-six-sable.vercel.app/',
    badge: 'Full-stack',
  },
  {
    name: 'Wild Oasis Website',
    emoji: '🌐',
    description: 'Public-facing hotel website built with Next.js App Router, featuring SSR, cabin browsing, reservation system, and authentication via NextAuth.',
    tech: ['Next.js', 'Tailwind CSS', 'Supabase', 'NextAuth'],
    github: 'https://github.com/ahmedabdelelah22',
    live: 'https://the-wild-oasis-website-yfgk.vercel.app/',
    badge: 'Full-stack',
  },
  {
    name: 'Forkify',
    emoji: '🍴',
    description: 'Recipe search app with bookmarking, custom recipe uploads, and servings calculator. Built with clean MVC architecture and vanilla JavaScript.',
    tech: ['JavaScript', 'OOP', 'MVC', 'Parcel', 'REST API'],
    github: 'https://github.com/ahmedabdelelah22',
    badge: 'Frontend',
  },
  {
    name: 'WorldWise',
    emoji: '🗺️',
    description: 'Interactive map-based travel tracker to log visited cities and countries worldwide, featuring geolocation and dynamic routing.',
    tech: ['React', 'React Router', 'Context API', 'CSS Modules'],
    github: 'https://github.com/ahmedabdelelah22',
     live: 'https://worldwise-22.vercel.app/',
    badge: 'Frontend ',
  },
  {
    name: 'Mapty',
    emoji: '🏃',
    description: 'Map-based workout logger using object-oriented JavaScript, storing running and cycling workouts on an interactive Leaflet map with geolocation.',
    tech: ['JavaScript', 'OOP', 'Leaflet.js', 'Geolocation API'],
    github: 'https://github.com/ahmedabdelelah22',
    badge: 'Frontend',
  },
]
export const portfolioProjects = [
  {
    title: "Portfolio Website",
    description:
      "Modern personal portfolio built with React, Tailwind CSS, and smooth animations.",
    image: "/projects/portfolio.png",
    technologies: ["React", "Tailwind", "Vite"],
    url: "https://your-portfolio-live.com",
    github: "https://github.com/username/portfolio",
    featured: true,
  },
  {
    title: "E-Commerce App",
    description:
      "Full-stack e-commerce platform with cart system, authentication, and payments.",
    image: "/projects/ecommerce.png",
    technologies: ["React", "Node.js", "MongoDB"],
    url: "https://your-ecommerce-live.com",
    github: "https://github.com/username/ecommerce",
    featured: true,
  },
  {
    title: "Blog Platform",
    description:
      "Markdown-based blog system with admin dashboard and dynamic posts.",
    image: "",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    url: "https://your-blog-live.com",
    github: "https://github.com/username/blog-platform",
    featured: true,
  },
  {
    title: "Weather App",
    description:
      "Simple weather application using API integration and location search.",
    image: "/projects/weather.png",
    technologies: ["React", "API", "CSS"],
    url: "https://your-weather-app.com",
    github: "https://github.com/username/weather-app",
    featured: false,
  },
];
export const experience = [
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Self-Employed',
    period: '2023 – Present',
    description: 'Building and deploying full-stack web applications using React and Node.js. Developing RESTful APIs, implementing secure JWT authentication, and integrating third-party services including Stripe payments and email APIs.',
  },
  
]

export const education = [
  {
    degree: 'B.Sc. Computer Science & Information Technology',
    school: 'Mansoura University',
    period: '2019 – 2023',
    description: 'Graduated 2023. Studied algorithms, data structures, software engineering, databases, and web technologies.',
  },
  {
    degree: 'Jonas Schmedtmann – The Ultimate React Course (React / Full-Stack )',
    school: 'Self-Learning / Online Courses',
    period: '2024 – 2025',
    description: 'Completed 84+ hours of training covering React fundamentals, hooks, routing, API integration, authentication, Next, and full-stack project development.',
  },
  {
    degree: 'The Complete Node.js Bootcamp – Jonas Schmedtmann',
    school: 'Self-Learning / Online Courses',
    period: '2025 – 2026',
    description: 'Completed comprehensive training in Node.js, Express.js, MongoDB, REST APIs, Authentication & Authorization, MVC Architecture, Server-Side Rendering, and Application Deployment.',
  },
  
]

export const courses = [
  {
    title: "The Complete JavaScript Course 2024",
    instructor: "Jonas Schmedtmann",
    platform: "Udemy",
    icon: Code,
  },
  {
    title: "Build Responsive Websites with HTML & CSS",
    instructor: "Jonas Schmedtmann",
    platform: "Udemy",
    icon: Globe,
  },
  {
    title: "Node.js, Express & MongoDB Bootcamp",
    instructor: "Jonas Schmedtmann",
    platform: "Udemy",
    icon: Server,
  },
  {
    title: "Build Modern React Applications",
    instructor: "Jonas Schmedtmann",
    platform: "Udemy",
    icon: Atom,
  },
  {
    title: "The Ultimate Next.js Course",
    instructor: "Jonas Schmedtmann",
    platform: "Udemy",
    icon: Layers3,
  },
];
 
export const certifications = [
 {
    title: 'The Ultimate React Course 2025: React, Next.js, Redux & More',
    instructor: 'Jonas Schmedtmann',
    platform: 'Udemy',
    certificateUrl: 'https://www.udemy.com/certificate/UC-2b2fe51a-2f59-4a8c-91a4-c22cbfd5b2fc/',
    year: 2025,
  },
  {
    title: 'The Complete Node.js, Express & MongoDB Bootcamp',
    instructor: 'Jonas Schmedtmann',
    platform: 'Udemy',
    certificateUrl: 'https://www.udemy.com/certificate/UC-79284a8a-cfb5-4c13-b367-50f2c35b566a/',
    year: 2026,
  },
];
