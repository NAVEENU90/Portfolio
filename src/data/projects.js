import musicImg from "../images/bb.png";
import taskimg from "../images/task.png";
import rbuilderimg from "../images/rbuilder.png";
import vowimg from "../images/vow.png";
import cards from "../images/cards.png";
import cine from "../images/cine.png";
export const projects = [
  {
    id: 1,
    title: "Music-Production Portfolio",
    description:
      "Modern beach-themed music web app with immersive UI, responsive design, and smooth music-focused user experience",
    image: musicImg,
    techStack: ["React", "TypeScript", "Vite", "shadcn-ui", "Tailwind CSS"],
    liveUrl: "https://beachbeats.netlify.app",
    githubUrl: "https://github.com/NAVEENU90/BeachBeats",
  },
  {
    id: 2,
    title: "TRACKPAD-Daily tasks tracker",
    description:
      "TaskPad – Modern task management web application with clean UI and productivity-focused experience",
    image: taskimg,
    techStack: ["JS", "CSS", "HTML", "Tailwind CSS"],
    liveUrl: "https://taskpad-eight.vercel.app",
    githubUrl: "https://github.com/NAVEENU90/Taskpad",
  },
  {
    id: 3,
    title: "Resume Builder",
    description:
      "Responsive resume builder application designed for creating professional resumes with dynamic editing and downloadable output.",
    image:rbuilderimg,
    techStack: ["React", "Tailwind CSS", "Node.js", "Material UI"],
    liveUrl: "https://resumebuilder-frontend-wine.vercel.app",
    githubUrl: "https://github.com/NAVEENU90/resumebuilder-frontend",
  },
  {
    id: 4,
    title: "VOWVENUE – Elegant Wedding Venue Website",
    description:
      "Elegant wedding venue website delivering modern design, smooth navigation, and venue showcase experience.",
    image:vowimg,
    techStack: ["React", "Tailwind", "OpenWeather API"],
    liveUrl: "https://naveenu90.github.io/VOWVENUE",
    githubUrl: "https://github.com/NAVEENU90/VOWVENUE",
  },
  {
    id: 5,
    title: "PAIR MASTER – Interactive Card Matching Game",
    description:
      "PAIR MASTER – Interactive memory card game with smooth UI and engaging matching mechanics.",
    image:cards,
    techStack: ["Javascript","HTML", "CSS"],
    liveUrl: "https://naveenu90.github.io/PAIR-MASTER/",
    githubUrl: "https://github.com/NAVEENU90/PAIR-MASTER",
  },
  {
    id: 6,
    title: "CINIVERSE – Modern movie discovery website with clean design and immersive browsing experience.",
    description:
      "Responsive movie showcase website built for exploring films, featured content, and cinematic browsing with clean UI and engaging visual design.",
    image:cine,
    techStack: ["HTML", "CSS",],
    liveUrl: "https://naveenu90.github.io/CINIVERSE",
    githubUrl: "https://github.com/NAVEENU90/CINIVERSE",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager, Nova Labs",
    avatar: "/assets/client-sarah.png",
    quote:
      "Naveen blends strong engineering skills with product thinking. Our dashboards shipped faster and looked better than we expected.",
    rating: 5,
  },
  {
    id: 2,
    name: "Arun Kumar",
    role: "Founder, EduSecure",
    avatar: "/assets/client-arun.png",
    quote:
      "The Exam Guard AI prototype exceeded our expectations. Naveen communicated clearly and iterated quickly on feedback.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lisa Wong",
    role: "Tech Lead, CloudNine",
    avatar: "/assets/client-lisa.png",
    quote:
      "Clean code, thoughtful architecture, and a strong eye for detail. I'd happily collaborate with Naveen again on future projects.",
    rating: 4.5,
  },
];

