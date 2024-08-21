// src/components/Projects.jsx
import React, { forwardRef } from "react"
import { motion } from "framer-motion"
import agent from "../assets/projects/agent.png"
import expense from "../assets/projects/expense.png"
import geselle from "../assets/projects/geselle.png"
import notes from "../assets/projects/notes.png"
import SearchUser from "../assets/projects/SearchUser.png"
import tesla from "../assets/projects/tesla.png"
import Todo from "../assets/projects/Todo.png"
import todos from "../assets/projects/todos.png"
import weatherApp from "../assets/projects/weatherApp.png"

const projectsData = [
  {
    title: "Agent Marketing",
    description:
      "A web app for showcases a diverse portfolio, innovative services, and client success stories.",
    tech: ["VS Code", "React", "Tailwind", "DaisyUI", "javascript"],
    image: agent,
    github: "https://github.com/T1t3nda/Agent",
    live: "https://t1t3nda.github.io/Agent/",
  },
  {
    title: "Tesla Clone",
    description: "I build this clone base on original website using React.",
    tech: ["VS Code", "React", "Tailwind", "javascript"],
    image: tesla,
    github: "https://github.com/T1t3nda/tesla-clone",
    live: "https://t1t3nda.github.io/tesla-clone/",
  },
  {
    title: "Hair Dresser Website",
    description:
      "A web app for a Hair dresser to showcase their portfolio, services.",
    tech: ["BOOTSTRAP", "HTML", "CSS", "Javascript"],
    image: geselle,
    github: "https://github.com/T1t3nda/salon",
    live: "https://t1t3nda.github.io/salon/",
  },
  {
    title: "Weather App",
    description:
      "This is a responsive weather app made with Javascript using open-weather API. It is my first project using API.",
    tech: ["VS Code", "React", "Tailwind", "Open Weather API", "javascript"],
    image: weatherApp,
    github: "https://github.com/T1t3nda/react-weather-app",
    live: "https://t1t3nda.github.io/react-weather-app/",
  },
  {
    title: "Github Search User Profile",
    description:
      "This is a responsive website for searching github user profiles made with Javascript using Github API. It is my second project using API.",
    tech: ["VS Code", "React", "Tailwind", "Github API", "javascript"],
    image: SearchUser,
    github: "https://github.com/T1t3nda/search-user-app",
    live: "https://t1t3nda.github.io/search-user-app/",
  },
  {
    title: "Full Stack Expense Tracker",
    description:
      "Built a full-stack expense tracker application to help users manage their finances. Features include expense logging, categorization, and data visualization, ",
    tech: [
      "Visual studio 2022",
      "C#",
      "ASP.NET",
      "Bootstrap",
      "Syncfusion",
      "mySQL",
      "Entity Framework",
    ],
    image: expense,
    github: "https://github.com/T1t3nda/ExpenseTracker",
    live: "",
  },
  {
    title: "full stack Notes WebApp",
    description:
      "Developed a full-stack notes application that allows users to create, edit, and delete notes. The app includes user authentication and a clean interface, ",
    tech: [
      "Visual studio 2022",
      "C#",
      "ASP.NET",
      "Bootstrap",
      "mySQL",
      "Entity Framework",
    ],
    image: notes,
    github: "https://github.com/T1t3nda/Notetify",
    live: "",
  },
  {
    title: "Full stack To do list",
    description:
      "Created a full-stack to-do application for task management, featuring user authentication, task creation,",
    tech: [
      "Visual studio 2022",
      "C#",
      "ASP.NET",
      "Bootstrap",
      "mySQL",
      "Entity Framework",
    ],
    image: todos,
    github: "https://github.com/T1t3nda/ToDoList",
    live: "",
  },
  {
    title: "To do list",
    description:
      "Developed a React-based to-do app utilizing local storage for task management. Users can add, edit, and delete tasks, with data persistence ensuring easy access across sessions for enhanced productivity.",
    tech: ["VS Code", "Javascript", "React", "Tailwind"],
    image: Todo,
    github: "https://github.com/T1t3nda/Todo-reactApp",
    live: "https://t1t3nda.github.io/Todo-reactApp/",
  },
  // Add more projects as needed
]

const Projects = forwardRef((props, ref) => {
  return (
    <motion.section
      id='projects'
      ref={ref}
      className='py-20 bg-light-navy'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-lightest-slate mb-8'>
          Some Things I've Built
        </h2>
        <div className='space-y-12'>
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className='bg-lightest-navy rounded-lg shadow-lg overflow-hidden'
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className='flex flex-col md:flex-row'>
                <div className='md:w-2/5'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='md:w-3/5 p-6'>
                  <h3 className='text-xl font-semibold text-lightest-slate mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-slate mb-4'>{project.description}</p>
                  <div className='flex flex-wrap mb-4'>
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='bg-navy text-green text-sm px-2 py-1 rounded mr-2 mb-2'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='flex space-x-4'>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-green hover:underline'
                    >
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-green hover:underline'
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
})

export default Projects
