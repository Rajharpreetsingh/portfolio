
import React from 'react'; 
import { Card } from 'primereact/card';


export default function ProjectCard() {
  

    const projects=[
        {
            id:1,name:"Pg Management System",
            des:"A full-stack web app for managing PG , tenant registration ,room allocations, & occupancy records using PHP and MySQL.",

            img:"https://cdn-icons-png.magnific.com/256/13445/13445004.png?semt=ais_white_label",
            
            url:"https://github.com/Rajharpreetsingh/Movie_Explorer_React_App"
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

    const styles = {
       
        backgroundColor: "white",
       
    
        marginBottom: "10px",
        padding: "1rem",
        color: "gray",
        boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
        borderRadius:"0.6rem",
        border:"solid 2px"
        
  
    };

    const img_s ={
        width:"5rem",
        height:"5rem",
        borderRadius:"0.5rem",
      

    }

    const gb ={
        
        backgroundColor:"black",
        color:"white",
        width:"10rem",
        height:"2rem",
        border:"none",
        borderRadius:"0.2rem",
        fontFamily:"Segoe UI"

    }


    return (

        <div className="card flex justify-content-center">
       
            <Card title="Projects"  className="md:w-25rem" >
                <div style={{display:"grid",justifyContent:"center",gridTemplateColumns: '1fr 1fr 1fr',alignItems:"center",flexDirection:"row",gap:"2rem"}}>
              {
                projects.map((project)=>{
                    return(
                   <div key={project.id} style={styles}>
                       <br></br>
                        <img src={project.img} style={img_s}></img>
                   
                        <h4>       {project.name}</h4>
                 
                       
                          <a href={project.url}>
                        <button type="button" value="View on Github" style={gb}>
                            <div style={{display:"flex" ,gap:"1rem",alignItems:"center",padding:"0.2rem"}}>
                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png" style={{height:"1.2rem",width:"1.2rem"}}></img>
                                <span style={{color:"white"}}>View on Github</span>
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
        