import React from 'react';
import { Panel } from 'primereact/panel';
import PageTransition from './PageTransition';
import { Button } from 'primereact/button';
import c1Image from './images/c1.png';
import c2aImage from './images/c2-a.png';
import c2bImage from './images/c2-b.png';
import c3Image from './images/c3.png';
import c4Image from './images/c4.png';
import c6Image from './images/c6.jpg';
import c7Image from './images/c7.jpg';
import c8Image from './images/c8.jpg';
import c9Image from './images/c9.jpg';
import './Styles/Certifications.css';

export default function Certifications() {
const certificates = [
{ id: 1, image: c1Image, title: 'Certificate 1', link: 'https://coursera.org/share/804e26db5bb59f8dcadc1207e3155d03' },
{ id: 2, image: c2aImage, title: 'Certificate 2', link: 'https://www.coursera.org/account/accomplishments/certificate/NLG5DFDRKG89' },
{ id: 3, image: c2bImage, title: 'Certificate 3', link: 'https://coursera.org/share/50e754343131de2f3cdc366bf85c2ac9' },
{ id: 4, image: c3Image, title: 'Certificate 4', link: 'https://verify.onwingspan.com/' },
{ id: 5, image: c4Image, title: 'Certificate 5', link: 'https://verify.onwingspan.com/' },
{ id: 6, image: c6Image, title: 'Certificate 6', link: 'https://verify.onwingspan.com/' },
{ id: 7, image: c7Image, title: 'Certificate 7', link: 'https://www.udemy.com/certificate/UC-e4d79775-f884-45df-b9f4-42ce09f7a8d6/' },
{ id: 8, image: c8Image, title: 'Certificate 8', link: 'https://www.futureskillsprime.in:443//LX/ecertificate/verification?id=43040910-18690-775809-7' },
{ id: 9, image: c9Image, title: 'Certificate 9', link: 'https://drive.google.com/file/d/1Od_9uycGe0SZe8IB40modqHEds-sOidH/view' }
];


return (
     <PageTransition>
    <div className="certifications-container">
        <h2 className="certifications-heading">Certifications</h2>

        <div className="certifications-grid">
            {certificates.map((certificate) => (
                <Panel key={certificate.id} className="certificate-panel">
                 
                        <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="certificate-image"
                        />
                         
                        <div style={{display:"flex" , justifyContent:"center" ,alignItems:"center" ,padding:"1rem"}}>
                         

                        <a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link"
                         
                         >
                       <Button style={{ borderRadius: '6px' }}  label="View certificate"   className="btns"/>
                       </a>
                      </div>
                </Panel>
            ))}
        </div>
    </div>
    </PageTransition>
);


}
