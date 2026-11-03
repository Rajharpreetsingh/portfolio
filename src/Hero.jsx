import React from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import PageTransition from './PageTransition';
import { useNavigate } from "react-router-dom";

import pic from "./images/p.png";
import "./Styles/hero.css"
import {motion} from "motion/react";


export default function HeroSection() {

  let navigate = useNavigate();

  
  return (
    <>
     <PageTransition>
    <div style={{ 
      minHeight: '75vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      padding: '4rem 1.5rem',
      fontFamily: 'var(--font-family, sans-serif)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        width: '100%',
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        {/* LEFT COLUMN: CALL TO ACTION TEXT */}
      
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
       
             <motion.div 
                     initial={{y:-100,opacity:0}}
                     animate={{y:0,opacity:1}}
                     transition={{duration:1}}
                      >
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: '800', 
            color: '#1e293b', 
            lineHeight: '1.1',
            margin: '0',
            letterSpacing: '-0.02em'
          }}>
           
            Hi, I'am  <span style={{ color: '#6366f1' }}>Rajharpreet Singh</span>
            <br/>
           FullStack Developer
          </h1>
          </motion.div>
           <motion.div 
                     initial={{y:50,opacity:0}}
                     animate={{y:0,opacity:1}}
                     transition={{duration:1,delay:0.5}}
                      >
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#64748b', 
            lineHeight: '1.6', 
            margin: '0',
            maxWidth: '540px' 
          }}>
            Currently Persuing MCA from Amity University
          </p>
          </motion.div>
          
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            
            <Button 
             initial={{opacity:0}}
               animate={{opacity:1}}
               transition={{duration:0.8}}
              
              label="See certifications" 
              icon="pi pi-compass" 
              severity="primary" 
              size="large"
              style={{ borderRadius: '6px' }}
              onClick={()=>navigate("/certifications")} 
              className="btns"
            />
            <a href="https://drive.google.com/file/d/1zsYuQZIvctRkScM6fxD6CZtL_cN44QkT/view?usp=sharing">
            <Button 
              label="Download CV" 
              icon="pi pi-external-link" 
              severity="secondary" 
              outlined 
              size="large"
              style={{ borderRadius: '6px' }}
              className="btns"
            />
            </a>
          </div>
        </div>

   
          
       

      </div>
        
      
    </div>
   
    </PageTransition>
    </>
  );
}
