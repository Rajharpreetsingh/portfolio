
import React from 'react';
import { BlockUI } from 'primereact/blockui';
import PageTransition from './PageTransition';
import pr from "./images/profile.jpeg";
import "./Styles/About.css";
import {motion} from "motion/react";
import { Panel } from 'primereact/panel';

export default function TemplateDemo() {
    

    return (
   
        
        <PageTransition>


        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
        
          
        
            
        </div>

         
         <div style={{display:"flex" , justifyContent:"center" ,alignItems:"center",marginTop:"2rem"}}>
              <h3>About Me </h3>
        </div>
         
         <motion.div 
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:3}}
          >
         <div style={{display:"flex" , justifyContent:"center" ,alignItems:"center"}}>
             <motion.div 
         initial={{opacity:0,y:-200}}
         animate={{opacity:1,y:0}}
         transition={{duration:1}}
          >
          
              <img src={pr} style={{borderRadius:"50%",width:"10rem",height:"10rem",border:"solid 3px black",marginTop:"1rem",boxShadow:"2pxblack",marginBottom:"2rem"}} className="pim">
              </img>
              </motion.div>

         </div>
           
        <div className="card">
        
             
            <BlockUI >
                <Panel header="">
                    <p className="m-0">

                     Hi, I'm Raj, Iam a BCA Graduate And Currently Pursuing MCA student at Amity University, Noida, with a passion
  for software development and building web applications. I work with
  technologies like React.js, Node.js, Java, JavaScript, HTML, CSS, PHP,
  and MySQL. I enjoy turning ideas into functional applications, exploring
  new technologies, and solving real-world problems through code. I'm
  continuously improving my full-stack development skills and looking
  forward to building impactful projects and growing as a FullStack Developer.

                    </p>
                </Panel>
            </BlockUI>
        </div>
        </motion.div>
        </PageTransition>
    );
}
        