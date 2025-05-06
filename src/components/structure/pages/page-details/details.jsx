import { Link, useParams } from "react-router-dom";
import style from "./details.module.sass";
import { useState, useEffect } from "react";

export default function Details() {
  const [detail, setDetail] = useState([]);
  const [selectedProject, setSelectedProject] = useState();
  const { name } = useParams();

  useEffect(() => {
    fetch("/database/database.json", {
      headers: {
        method: "GET",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setDetail(data.projects));
  }, []);

  useEffect(() => {
    const project = detail.find((project) => project.name === name);
    setSelectedProject(project);
    console.log(selectedProject);
  }, [detail, name]);

  return (
    <>
      <header className={style.card_header}>
        <Link to={"/"} className={style.card_back}>
          <i class="fi fi-sr-arrow-left"></i>
        </Link>
      </header>

      <section className={style.card_section}>
        {selectedProject ? (
          <>
            <div className={style.card_container}>
              <div className={style.card_article}>
                <h1>{selectedProject.name}</h1>

                <div className={style.button_container}>
                  {selectedProject.web ? (
                    <Link to={selectedProject.web} target="Blank">
                      Web <i class="fi fi-sr-globe"></i>
                    </Link>
                  ) : (
                    <></>
                  )}
                  <Link to={selectedProject.repository} target="Blank">
                    Repository <i class="fi fi-sr-code-branch"></i>
                  </Link>
                </div>

                <div className={style.card_language}>
                  <label>Languages: </label>
                  <ul>
                    {selectedProject.technologies.map((tech_name, index) => (
                      <li key={index}>
                        {tech_name}{" "}
                        <img src={`/assets/icons/${tech_name}.svg`} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={style.card_description}>
                <img
                  src="https://img.ibxk.com.br/2024/09/16/16123335919125.jpg?ims=704x"
                  alt="Project"
                />
                <p>{selectedProject.description}</p>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}
