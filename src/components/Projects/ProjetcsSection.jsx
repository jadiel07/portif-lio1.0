import style from "./style.module.css";
import projectsData from "./projects.json";
import Header from "../Header";

export default function ProjectsSection() {
  return (
    <>
      <div
        className={` flex flex-col justify-center items-center ${style.gradientBackground}`}
      >
        <div className={`flex  ${style.cardsContainer}`}>
          {projectsData.map((project, index) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div
                key={index}
                className={style.card}
                style={{
                  backgroundImage: `url(${project.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className={style.textBox}>
                  <h2 className={`text-2xl text-blue-500 ${style.textHead}`}>
                    {project.name}
                  </h2>
                  <img
                    className={style.technologiesImage}
                    src={project.technologies}
                    alt="technologies"
                  />
                  <p className={`text-blue-500 ${style.description}`}>
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
