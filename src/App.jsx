import React from 'react'
import { motion } from 'framer-motion'

const data = {
  name: "Sanjaykumar Kumarasamy",
  title: "Frontend Developer • React.js • JavaScript • TypeScript",
  email: "sanjaysk1070@gmail.com",
  phone: "+91 95147 79393",
  linkedin: "https://in.linkedin.com/in/sanjaykumarkumarasamy",
  github: "https://github.com/SANJAYSK19",
  resume: "/Sanjaykumar_React_Developer_Resume.pdf",
  summary:
    "Motivated Frontend Developer with 3.4+ years of experience building scalable web and mobile applications. Skilled in React.js, TypeScript, and modern JavaScript with a focus on reusable components, API integration, performance optimization, and responsive design. Adept at Agile teamwork and debugging complex issues.",
  education:
    "BE in Computer Science and Engineering – Kumaraguru College of Technology (July 2017 – May 2021), CGPA: 8.0",
  skills: {
    Frontend: ["React.js (Hooks, Redux, Context API, Router)", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "TailwindCSS", "Bootstrap"],
    "Testing & Tools": ["Jest", "React Testing Library", "Git", "JIRA", "CI/CD"],
    "Backend & DB": ["Java", "MySQL", "REST APIs"],
    Other: ["Kony Visualizer (Temenos Infinity)", "Agile/Scrum"],
  },
  experience: [
    {
      role: "Software Engineer – Aspire Systems, Chennai",
      dates: "Nov 2023 – Present",
      bullets: [
        "Built and optimized reusable React.js components, improving feature deployment time by 25%.",
        "Integrated APIs and modular frontend architectures, enhancing scalability and reducing maintenance by 15%.",
        "Designed responsive UIs with React.js, improving engagement and accessibility.",
        "Collaborated with cross-functional teams to deliver projects on time, improving on-time delivery by 10%.",
        "Debugged and resolved production issues, reducing system defects by 20%.",
      ],
    },
    {
      role: "Software Engineer – HCL Tech, Chennai",
      dates: "Feb 2023 – Sept 2023",
      bullets: [
        "Led development of React-based web, Android, and iOS apps, improving user engagement by 25%.",
        "Implemented accessibility features and responsive design, improving usability by 30%.",
        "Integrated back-end APIs into React apps, resulting in 20% performance improvement.",
        "Mentored junior developers on React best practices, accelerating delivery by 25%.",
      ],
    },
    {
      role: "Product Engineer – Temenos, Chennai",
      dates: "July 2021 – Feb 2023",
      bullets: [
        "Developed digital banking web & mobile apps using React.js and Kony Visualizer, increasing customer engagement by 30%.",
        "Built and deployed the 'Trade Finance' micro-app, improving user interactions by 40%.",
        "Integrated Chart.js and Google Charts into dashboards for better visualization.",
        "Delivered bug fixes and release support, reducing downtime by 20%.",
      ],
    },
  ],
  projects: [
    {
      name: "IMDB Clone",
      desc: "Built an IMDB clone using React.js + Vite + TailwindCSS, with real-time API data fetching, state management, and responsive design.",
      stack: "React.js, Vite, TailwindCSS, JavaScript",
      github: "https://github.com/SANJAYSK19/imdb-clone",
      live: "https://your-live-demo-link",
    },
    {
      name: "E-Commerce Store (Coming Soon)",
      desc: "Demo project planned: Store with React.js, Redux, and REST API integration — cart, authentication, and order management.",
      stack: "React.js, Redux, REST API, Bootstrap",
      github: "#",
      live: "#",
    },
    {
      name: "Dashboard with Charts (Coming Soon)",
      desc: "Demo project planned: Financial dashboard with React.js + Chart.js/Recharts, authentication and role-based access.",
      stack: "React.js, Chart.js, REST API, TailwindCSS",
      github: "#",
      live: "#",
    },
  ],
}

function ThemeToggle() {
  const [dark, setDark] = React.useState(document.documentElement.classList.contains('dark'))
  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }
  return (
    <button onClick={toggle} className="btn">
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}

const fade = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }

export default function App() {
  return (
    <div className="container">
      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fade}
        transition={{ duration: 0.4 }}
        className="hero mt-6"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{data.name}</h1>
            <p className="subtle mt-1">{data.title}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <a className="btn" href={`mailto:${data.email}`}>Email</a>
            <a className="btn" href={`tel:${data.phone.replace(/\s/g,'')}`}>Call</a>
            <a className="btn" target="_blank" rel="noreferrer" href={data.linkedin}>LinkedIn</a>
            <a className="btn" target="_blank" rel="noreferrer" href={data.github}>GitHub</a>
            <a className="btn" target="_blank" rel="noreferrer" href={data.resume}>Resume</a>
            <ThemeToggle />
          </div>
        </div>
      </motion.section>

      {/* About */}
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fade} className="card mt-6">
        <h3 className="section-title">About</h3>
        <p className="subtle">{data.summary}</p>
      </motion.section>

      {/* Skills */}
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fade} className="card mt-6">
        <h3 className="section-title">Skills</h3>
        {Object.entries(data.skills).map(([group, items]) => (
          <div key={group} className="mb-2">
            <strong>{group}:</strong>{" "}
            {items.map((s, i) => <span key={i} className="pill">{s}</span>)}
          </div>
        ))}
      </motion.section>

      {/* Education */}
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fade} className="card mt-6">
        <h3 className="section-title">Education</h3>
        <p className="subtle">{data.education}</p>
      </motion.section>

      {/* Experience */}
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fade} className="card mt-6">
        <h3 className="section-title">Experience</h3>
        {data.experience.map((item, idx) => (
          <div key={idx} className="mb-4">
            <div className="font-semibold">{item.role} <span className="subtle">({item.dates})</span></div>
            <ul className="list-disc pl-5 mt-1">
              {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </motion.section>

      {/* Projects */}
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fade} className="card mt-6">
        <h3 className="section-title">Projects</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {data.projects.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -2 }} className="border border-slate-200 dark:border-slate-700 rounded-2xl p-5">
              <div className="text-lg font-semibold">{p.name}</div>
              <div className="subtle mt-1">{p.desc}</div>
              <div className="subtle text-sm mt-1">Tech: {p.stack}</div>
              <div className="mt-3 flex gap-2">
                <a className="btn" target="_blank" rel="noreferrer" href={p.github}>GitHub</a>
                <a className="btn" target="_blank" rel="noreferrer" href={p.live}>Live Demo</a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <footer className="footer">© {new Date().getFullYear()} {data.name} • Built with React, Tailwind & Framer Motion</footer>
    </div>
  )
}
