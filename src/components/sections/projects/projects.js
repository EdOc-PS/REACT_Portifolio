import Card from '../../structure/card/card';
import style from './projects.module.sass'
import React, {useState, useEffect } from 'react';

export default function Projects() {
  

  const [projects, setProjects] = useState([])

  useEffect(() => {
  
    fetch('./database/database.json',{
      headers: {
        Accept: "application/json"
      }})
    .then(res => res.json())
    .then(data => setProjects(data.projects)) 
  }, [])

  return (
    <section className={style.projects_section} id={"projects"}>
      <div className={style.projects_text}>
        <h1>Projetos</h1>
        <p>Confira a seguir alguns dos projetos que desenvolvi, refletindo minhas habilidades e a aplicação de tecnologias para resolver desafios reais.</p>
      </div>

      <div className={style.projects_container}>
        {projects.map((projects, index) => (
           <Card key={index} title={projects.name} description={projects.description} />
        ))}
       
      </div>
    </section>
  );
}


