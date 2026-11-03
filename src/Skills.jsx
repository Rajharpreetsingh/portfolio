// import { Accordion, AccordionTab } from 'primereact/accordion';
// import { Panel } from 'primereact/panel';
// import ps from "./ps.jpg";
// import ws from "./ws.jpg";
// import frs from "./frs.jpg";
// import tks from "./tks.jpg";
// import phps from "./phps.png";
// import "./Skills.css";

// export default function Skills() {
// return (
// <> <br /> <hr />


//         <center>
//             <h3>Technical Skills</h3>
//         </center>

//         <div className="card">
//             <Accordion activeIndex={null}>
//                 <AccordionTab header="Programming Languages">
//                     <Panel>
//                         <img src={ps} className="skill-image" alt="Programming Languages" />
//                         <p>C C++ JAVA PHP PYTHON JAVASCRIPT</p>
//                     </Panel>
//                 </AccordionTab>

//                 <AccordionTab header="Desktop App Development">
//                     <Panel>
//                         <img src={tks} className="skill-image" alt="Desktop App Development" />
//                         <p>Tkinter Custom Tkinter</p>
//                     </Panel>
//                 </AccordionTab>

//                 <AccordionTab header="Web Technologies">
//                     <Panel>
//                         <img src={ws} className="skill-image" alt="Web Technologies" />
//                         <p>HTML CSS JavaScript</p>
//                     </Panel>
//                 </AccordionTab>

//                 <AccordionTab header="Frontend">
//                     <Panel>
//                         <img src={frs} className="skill-image" alt="Frontend Technologies" />
//                         <p>React Bootstrap Tailwind</p>
//                     </Panel>
//                 </AccordionTab>

//                 <AccordionTab header="Backend">
//                     <Panel>
//                         <img src={phps} className="skill-image" alt="Backend Technologies" />
//                         <p>PHP , Node js</p>
//                     </Panel>
//                 </AccordionTab>
//             </Accordion>

//             <hr />
//         </div>

//         <center>
//             <h3>Additional Skills</h3>
//         </center>

//         <div>
//             <Accordion activeIndex={null}>
//                 <AccordionTab header="Game Development">
//                     <p className="m-0">Game Development Using Unity Game Engine</p>
//                 </AccordionTab>

//                 <AccordionTab header="Video-Editing">
//                     <p className="m-0">Video-Editing Using Sony Vegas Pro</p>
//                 </AccordionTab>

//                 <AccordionTab header="Version Control">
//                     <p className="m-0">Version Control Using Git, GitHub</p>
//                 </AccordionTab>

//                 <AccordionTab header="Audio-Dubbing">
//                     <p className="m-0">Audio-Dubbing Using Audacity</p>
//                 </AccordionTab>

//                 <AccordionTab header="3D-Modelling">
//                     <p className="m-0">3D-Modelling Using Blender</p>
//                 </AccordionTab>

//                 <AccordionTab header="UI/UX Design">
//                     <p className="m-0">UI/UX Design Using Figma</p>
//                 </AccordionTab>

//                 <AccordionTab header="MS office">
//                     <p className="m-0">Microsoft Excel, PowerPoint Presentation, Microsoft Word</p>
//                 </AccordionTab>
//             </Accordion>
//         </div>
//     </>
// );


// }

import React from "react";
import PageTransition from './PageTransition';
import "./Styles/Skills.css";

const skills = [
  {
    name: "HTML",
    icon: "html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "javascript/javascript-original.svg",
  },
  {
    name: "React JS",
    icon: "react/react-original.svg",
  },
  {
    name: "Java",
    icon: "java/java-original.svg",
  },
  {
    name: "C++",
    icon: "cplusplus/cplusplus-original.svg",
  },
  {
    name: "Python",
    icon: "python/python-original.svg",
  },
  {
    name: "PHP",
    icon: "php/php-original.svg",
  },
  {
    name: "MySQL",
    icon: "mysql/mysql-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    icon: "git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "github/github-original.svg",
  },
  {
    name: "Node.js",
    icon: "nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "express/express-original.svg",
  },
  {
    name: "Tkinter",
    icon: "python/python-original.svg",
  },
  {
  name: "Blender",
  icon: "blender/blender-original.svg",
  },
  {
  name: "Unity",
  icon: "unity/unity-original.svg",
  },
  {
  name: "Figma",
  icon: "figma/figma-original.svg",
  },
  {
  name: "C-language",
  icon: "c/c-original.svg",
  }
];

const Skills = () => {
  return (
    <PageTransition>
    <section className="skills-page">
      <div className="skills-container">

        {/* Heading */}
        <div className="skills-heading">
          <h1>
            <span className="skills-black">My Skills</span>
         
          </h1>

          <p style={{color:"#64748B"}}>
            Building responsive web applications and exploring technologies
            to develop efficient and user-friendly solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill) => (
            skill.name=="Tkinter"?
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">
                <img
                  src={`https://customtkinter.tomschimansky.com/img/icon.ico`}
                  alt={`${skill.name} logo`}
                  loading="lazy"
                />
              </div>

              <div className="skill-name">
                {skill.name}
              </div>
            </div>
              
            :
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                  alt={`${skill.name} logo`}
                  loading="lazy"
                />
              </div>

              <div className="skill-name">
                {skill.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </PageTransition>
  );
};

export default Skills;

