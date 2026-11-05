
import React from 'react'; 
import { Card } from 'primereact/card';
import './Styles/Projects.css';


export default function ProjectCard() {
  

    const projects=[
        {
            id:1,name:"Pg Management System",
            des:"A full-stack web app for managing PG , tenant registration ,room allocations, & occupancy records using PHP and MySQL.",

            img:"https://cdn-icons-png.magnific.com/256/13445/13445004.png?semt=ais_white_label",
            
            url:"https://github.com/Rajharpreetsingh/PgManagementSystem"
        }
            
            ,

        {
            id:2,name:"Java IDE Using Python",
            des:"A Python-based desktop application built with Custom Tkinter for writing, editing, and executing Java programs.",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdefqxP8NfVqk3_leal8Aww5xhoPprgzAFciaUPcpvA&s=10",
            url:"https://github.com/Rajharpreetsingh/JForge_IDE"
        }
        ,

        {
            id:3,name:"Movie Explorer Website",des:"A responsive web application that enables users to search, discover, and explore movies along with their details.",img:"https://play-lh.googleusercontent.com/vUn_NHm3cuhee_ye4s4tC1AghPVtCBrbtbMz_T5q1HNu95dT80U2Ye5p4AmXI9sxXnrgVF3JhhFaiphEwKaRPA=s0-br30",
        url:"https://github.com/Rajharpreetsingh/Movie_Explorer_React_App"
        }

        
        
        
    ];

    

    return (

        <div className="card flex justify-content-center">
       
            <Card title="Projects"  className="md:w-25rem" >
                <div className="container">
              {
                projects.map((project)=>{
                    return(
                   <div key={project.id} className="pcard">
                       <br></br>
                        <img src={project.img} className="img_s"></img>
                   
                        <h4>  {project.name}</h4>
                 
                       
                          <a href={project.url}>
                          <button type="button" value="View on Github" className="gb">
                            <div  className="vgit">
                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"  className="gi"></img>
                                <span className="lab">View on Github</span>
                            </div>
                            
                           </button>
                           </a>
                    </div>
                    )
                })

              }
              </div>
            </Card>
            
            
        </div>
    )
}
        