export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  experience: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Dilsana",
  role: "Full Stack Developer",
  about:
    "I’m a Full Stack Developer with 1+ year of experience building scalable and user-focused web applications. My expertise spans React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL, enabling me to develop responsive frontend interfaces, secure backend systems, and database-driven solutions. I have hands-on experience creating RESTful APIs, implementing JWT authentication, role-based access control, and real-time features using modern JavaScript technologies. With a strong foundation in software engineering principles, SDLC practices, API integration, and performance optimization, I’m passionate about delivering high-quality, efficient, and scalable digital solutions.",
  profileImage: "/images/profile.webp",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/Dilshna-git",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/dilshana-vv-9282b6212",
      icon: "Linkedin",
    },
    {
      platform: "Email",
      url: "dilshanavv8.com",
      icon: "Mail",
    },
  ],
  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Bootstrap",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Socket.IO",
      "JWT Authentication",
      "NFC Integration",
    ],
    database: [
      "MongoDB",
      "MySQL",
    ],
    tools: ["Git", "GitHub", "Postman", "VS Code", "NPM"],
  },
  experience: [
    {
      company: "Yoro Technologies | Calicut",
      role: "Junior Software Developer",
      period: "Oct, 2025 - Present",
      description: [
        "Architected a multi-tenant React/Node.js food delivery platform with dynamic menus, RBAC, and JWT auth.",
        "Led development of a SaaS HRMS, integrating real-time chat functionality using Socket.IO.",
        "Engineered AI school tools, including timetable generators, GPS bus tracking, and fuel management.",
        "Implemented FCM push notifications and automated background tasks with Node-Cron.",
        "Developed secure NFC Business Card solutions in Next.js for contactless profile sharing.",
        "Built secure Node.js/Express APIs (tested via Postman) in Agile/Git version-controlled sprints.",
      ],
    },
    {
      company: "Mashupstack | Kochi",
      role: "MERN Full Stack Developer Trainee",
      period: "2024 - 2025",
      description: [
        "Completed intensive, hands-on training in the MERN stack (MongoDB, Express.js, React.js, Node.js), building end-to-end web applications with robust user authentication and database integration.",
        "Developed dynamic and responsive frontend interfaces in React.js and constructed scalable RESTful backend services utilizing Node.js and Express.js.",
        "Designed structured database schemas and implemented complex CRUD operations using MongoDB.",
        "Conducted rigorous API testing, debugging, and integration validation using Postman to ensure backend reliability.",
      ],
    },
  ],
  projects: [
    {
      title: "Covid-19 Status",
      description:
        "COVID-19 Status is a free and open-source Android app that provides real-time COVID-19 statistics across India and worldwide, featuring a clean, fast, and responsive user interface.",
      techStack: ["Java", "XML", "Firebase", "Rest APIs"],
      link: "https://project.dilsana.com/covid",
      github: "https://github.com/Coders-Of-XDA-OT/covid19-status-android",
      thumbnail: "/images/projects/covid.webp",
    },
    {
      title: "ElectraBlue Kernel",
      description:
        "ElectraBlue is a flash-and-forget custom kernel for supported Android devices, built to deliver a stable, smooth, and battery-efficient experience with thoughtful customization options using apps like Kernel Adiutor.",
      techStack: ["Linux", "C", "Makefile", "Bash"],
      link: "https://xdaforums.com/t/kernel-mido-oreo-pie-electrablue-kernel-21-0-july-06-redmi-note-4.3655651",
      github: "https://github.com/Dilshna-git/electrablue_mido",
      thumbnail: "/images/projects/eb.webp",
    },
    {
      title: "Portfolio Website",
      description:
        "A previous version of my personal portfolio website showcasing my projects, work experience, and resume before launching the further iterations built in more modern tech stack.",
      techStack: ["HTML", "CSS", "Bootstrap", "JQuery"],
      link: "https://project.dilsana.com/website",
      github: "https://github.com/Dilshna-git/website",
      thumbnail: "/images/projects/portfolio.webp",
    },
    {
      title: "ABS Tweaks",
      description:
        "ABS Tweaks (Arkaynine Boost Script) is a collection of shell-based performance optimizations for Android devices, designed to improve speed and battery life. It has been downloaded over 200,000 times.",
      techStack: ["Shell", "BusyBox", "Terminal Emulator", "SuperSU"],
      link: "https://xdaforums.com/t/tweak-mod-arm-x86-project-dark-booster-abs-tweaks-v5-0-2-3-6-0-23-01-2016.3120404",
      github: "https://github.com/Dilshna-git/ABS-Tweaks",
      thumbnail: "/images/projects/abs.webp",
    },
    {
      title: "Lenovo SNAPit Camera",
      description:
        "Lenovo SNAPit Camera was one of the most feature-rich OEM camera apps of its time, offering a wide range of unique capabilities. I successfully ported it to run on nearly all supported Android devices back then.",
      techStack: ["Java", "XML", "Libs", "Smali", "Apktool"],
      link: "https://xdaforums.com/t/app-port-6-0-lenovo-snapit-camera-5-8-53-for-all-devices.3608065/",
      github: "",
      thumbnail: "/images/projects/snapit.webp",
    },
    {
      title: "CyanogenOS Apps",
      description:
        "CyanogenOS 12.1 included exclusive apps such as the updated theme engine and a Truecaller-integrated dialer. I successfully ported these features to work on CyanogenMod 13 and CyanogenMod13-based ROMs.",
      techStack: ["Java", "Libs", "Updater Script", "Apktool"],
      link: "https://xdaforums.com/t/c-apps-v2-unofficial-6-0-x-cyanogen-os-capps-v2-for-cm13-and-cm13-based-roms.3254865/",
      github: "",
      thumbnail: "/images/projects/capps.webp",
    },
  ],
};
