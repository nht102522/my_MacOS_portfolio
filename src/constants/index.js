const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Websites",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const projectLinks = [
  {
    id: 1,
    title: "CodeU",
    description:
      "Learn web development through lessons, hands-on practice, and progress tracking.",
    image: "/images/codeu_dashboard.png",
    link: "https://codeu.onrender.com/",
  },
  {
    id: 2,
    title: "macOS Portfolio",
    description:
      "Explore my projects in an interactive desktop inspired by macOS.",
    image: "/images/portfolio_1.png",
    link: "https://namtrinh-portfolio.onrender.com/",
  },
  {
    id: 3,
    title: "PineLedger",
    description:
      "A dashboard for cabin bookings, guests, and daily operations.",
    image: "/images/pineLedger_dashboard_lightMode.png",
    link: "https://pineledger.onrender.com",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js"],
  },

  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "UI/UX Design",
    items: ["Figma"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Supabase"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/nht102522",
  },
  {
    id: 2,
    text: "Resume",
    icon: "/icons/file-user.svg",
    bg: "#4bcb63",
    windowKey: "resume",
  },
  {
    id: 3,
    text: "Email Me",
    icon: "/icons/inbox.svg",
    bg: "#ff866b",
    link: "mailto:nht35@drexel.edu?subject=Let's Connect",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/namtrinh102522/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/namtrinh.jpg",
  },
  {
    id: 2,
    img: "/images/namtrinh_yellow_bg.png",
  },
  {
    id: 3,
    img: "/images/namtrinh_travel.jpg",
  },
  {
    id: 4,
    img: "/images/namtrinh_usa.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  projectLinks,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const [NIKE_PROJECT, AI_RESUME_PROJECT, FOOD_DELIVERY_PROJECT] = [
  // ▶ Project 1
  {
    id: 5,
    name: "CodeU - Programming Learning Platform",
    icon: "/images/folder.png",
    kind: "folder",
    position: "top-10 left-5", // icon position inside Finder
    windowPosition: "top-[5vh] left-5", // optional: Finder window position
    children: [
      {
        id: 1,
        name: "CodeU_Project.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-5 left-10",
        description: [
          "CodeU is an interactive online learning platform designed to help beginners learn web development through structured lessons and hands-on practice.",
          "Instead of simply watching tutorials, users can track their learning progress, complete lessons, maintain daily learning streaks, and earn certificates as they reach their goals.",
          "The platform also provides personalized dashboards, secure user authentication, and a review system where learners can share their experiences.",
          "Built with the MERN stack (MongoDB, Express.js, React.js, and Node.js), CodeU delivers a responsive, user-friendly learning experience.",
        ],
      },
      {
        id: 2,
        name: "codeU.com",
        icon: "/images/safari.png",
        kind: "file",
        fileType: "url",
        href: "https://codeu.onrender.com/",
        position: "top-10 right-20",
      },
      {
        id: 4,
        name: "codeU_dashboard.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 right-80",
        imageUrl: "/images/codeu_dashboard.png",
      },
      {
        id: 5,
        name: "codeU_lecture.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 right-80",
        imageUrl: "/images/codeu_lecture.png",
      },
      {
        id: 6,
        name: "codeU_profile.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 right-80",
        imageUrl: "/images/codeu_profile.png",
      },
      {
        id: 9,
        name: "codeU_design.fig",
        icon: "/images/figma.png",
        kind: "file",
        fileType: "fig",
        href: "https://www.figma.com/design/oZVozUcLmbRD73Y7SRh2IP/Codeu_Homepage-Dashboard?node-id=0-1&t=Aa1psl2zIjhRgimS-1",
        position: "top-60 right-20",
      },
    ],
  },

  // ▶ Project 2
  {
    id: 6,
    name: "MacOS Portfolio",
    icon: "/images/folder.png",
    kind: "folder",
    position: "top-52 right-80",
    windowPosition: "top-[20vh] left-7",
    children: [
      {
        id: 1,
        name: "macos-inspired-portfolio.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-5 right-10",
        description: [
          "MacOS Portfolio is an interactive personal portfolio website inspired by Apple's macOS desktop interface, designed to showcase my projects, technical skills, and experience in a creative way.",
          "Instead of a traditional portfolio layout, visitors can explore a simulated desktop environment with draggable windows, a functional dock, and interactive applications.",
          "The portfolio features a Finder-style file explorer, project showcases, a terminal-inspired tech stack display, and a contact window where recruiters and fellow developers can connect with me.",
          "Built with React.js, Tailwind CSS, and GSAP, the website delivers smooth animations, interactive elements, and a visually engaging user experience.",
        ],
      },
      {
        id: 2,
        name: "namtrinh-porfolio.com",
        icon: "/images/safari.png",
        kind: "file",
        fileType: "url",
        href: "https://namtrinh-portfolio.onrender.com/",
        position: "top-20 left-20",
      },
      {
        id: 4,
        name: "portfolio_1.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 left-80",
        imageUrl: "/images/portfolio_1.png",
      },
      {
        id: 5,
        name: "portfolio_2.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 left-80",
        imageUrl: "/images/portfolio_2.png",
      },
    ],
  },

  // ▶ Project 3
  {
    id: 7,
    name: "PineLedger - Cabin Booking & Operations",
    icon: "/images/folder.png",
    kind: "folder",
    position: "top-10 left-80",
    windowPosition: "top-[33vh] left-7",
    children: [
      {
        id: 3,
        name: "START HERE - Demo Login.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        subtitle: "Try the PineLedger demo",
        description: [
          "Thanks for reviewing PineLedger! Use this guest account on the login screen to sign in and explore the app.",
          "Username: guest@pineledger.com",
          "Password: 12345678",
          "Explore the dashboard, bookings, and cabins to see the main features in action.",
        ],
      },
      {
        id: 1,
        name: "PineLedger-Project.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-5 left-10",
        description: [
          "PineLedger is a cabin booking and operations dashboard designed for hospitality staff.",
          "It brings reservations, guests, cabins, payments, and check-ins together in one organized workspace.",
          "Staff can monitor daily arrivals and departures, manage bookings, update property settings, and review sales and occupancy analytics.",
          "It is built with React, React Query, React Router, React Hook Form, and Supabase, with responsive light and dark themes.",
        ],
      },
      {
        id: 2,
        name: "pineledger.com",
        icon: "/images/safari.png",
        kind: "file",
        fileType: "url",
        href: "https://pineledger.onrender.com/dashboard",
        position: "top-10 right-20",
      },
      {
        id: 4,
        name: "pineLedger_dashboard_lightMode",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 right-80",
        imageUrl: "/images/pineLedger_dashboard_lightMode.png",
      },
      {
        id: 5,
        name: "pineLedger_dashboard_darkMode",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 right-80",
        imageUrl: "/images/pineLedger_dashboard_darkMode.png",
      },
      {
        id: 6,
        name: "pineLedger_bookings",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 right-80",
        imageUrl: "/images/pineLedger_bookings.png",
      },
      {
        id: 7,
        name: "pineLedger_cabins",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 right-80",
        imageUrl: "/images/pineLedger_cabins.png",
      },
    ],
  },
];

const FIGMA_PROJECT = {
  id: 10,
  name: "Figma",
  icon: "/images/folder.png",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Figma Portfolio.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      subtitle: "Banking website and mobile app designs",
      description: [
        "My Figma portfolio explores a banking experience across a marketing website and a mobile app.",
        "The website designs include a hero section, product highlights, pricing plans, and frequently asked questions.",
        "The mobile app designs cover OTP verification, profile setup, an account overview, credit cards, transactions, and notifications.",
        "The designs focus on clear information hierarchy, consistent components, and straightforward user flows.",
      ],
    },
    {
      id: 2,
      name: "Banking Website.url",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://www.figma.com/design/cbg5WPCbnioUr7XyTmohC4/Landing-Page?node-id=0-1&t=Nsx3lWgH6AbvvmGv-1", // Add your banking website Figma file URL here.
    },
    {
      id: 3,
      name: "Banking Mobile App.url",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://www.figma.com/design/ZUeuEYI0PTIGJZGkRnqpYT/Mobile-Application?node-id=0-1&t=sCmCdUMf30KMFvXA-1", // Add your mobile app Figma file URL here.
    },
    {
      id: 4,
      name: "Hero Section.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      imageUrl: "/images/figma_hero_section.png",
    },
    {
      id: 5,
      name: "Pricing.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      imageUrl: "/images/figma_pricing.png",
    },
    {
      id: 6,
      name: "OTP and Profile.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      imageUrl: "/images/figma_opt_profile.png",
    },
    {
      id: 7,
      name: "Credit Card and Transactions.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      imageUrl: "/images/figma_credit_card.png",
    },
  ],
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 8,
      name: "Team Projects",
      icon: "/images/folder.png",
      kind: "folder",
      windowPosition: "top-[5vh] left-5",
      children: [NIKE_PROJECT],
    },
    {
      id: 9,
      name: "Personal Projects",
      icon: "/images/folder.png",
      kind: "folder",
      windowPosition: "top-[20vh] left-5",
      children: [AI_RESUME_PROJECT, FOOD_DELIVERY_PROJECT, FIGMA_PROJECT],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
