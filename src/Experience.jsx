import ic from "./images/ic.jpg";
import "./Styles/Experience.css";
import { BlockUI } from 'primereact/blockui';
import {motion} from "motion/react";
import PageTransition from './PageTransition';
import { Panel } from 'primereact/panel';

export default function Experience() {
return (
    
  <PageTransition>
 
<center> <h3>Internship</h3>


            <span>
                Worked as a Frontend Developer Intern at Bron24 Company
                <br />
                Duration: 3 Months
            </span>
        </center>

        <br />

        <center>
            <motion.div 
                     initial={{opacity:0,y:-300}}
                     animate={{opacity:1,y:0}}
                     transition={{duration:1}}
                      >
                        
            <img src={ic} className="internship-certificate"/>
             
             </motion.div>
             <div className="card">
                        <br></br>
                         
                        <BlockUI >
                            <Panel header="Internship Experience">
                                <p className="m-0">
                                 During my seven-week frontend internship at Bron24, a sports court booking app based in Tashkent, I gained hands-on experience building both mobile and web interfaces with React Native and React. I developed features such as a hold-timer countdown using `useEffect` with proper cleanup, a responsive login page, a stadium venue listing page with real-time search and filtering, and an admin panel with a sidebar dashboard. I then integrated these modules into a single React application using React Router v6 with protected routes and deployed it on Vercel. Along the way, I became comfortable with the professional development workflow, including Vite, Git, working in a shared company repository, and deploying to production. I also strengthened my professional skills by planning features in advance, collaborating with a teammate on a joint presentation, documenting my progress through weekly reports and a final report, and working to weekly deliverables under an industry supervisor. Overall, the internship helped me move from building isolated components to delivering a complete, deployed application, improving my skills in component design, state management, routing, and deployment.
                                </p>
                            </Panel>
                        </BlockUI>
                    </div>
        </center>
       
          </PageTransition>
    
  
);


}
