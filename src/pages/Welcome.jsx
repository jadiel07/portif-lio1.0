import { Link } from "react-router-dom";
import welcomeSvg from "../images/WELCOMESvg.svg";
import jadielsvg from "../images/jadiel.svg";
import ProjectsSection from "../components/Projects/ProjetcsSection";
export default function Welcome() {
  return (
    <>
      <div className="h-screen mb-12">
        <header className="xl:h-64 sm:h-0 md:h-0">
          <img className="w-96  " src={jadielsvg} alt="logo" />
        </header>
        <main className="flex justify-center flex-col place-items-center ">
          <div>
            <img className="mr-20" src={welcomeSvg} alt="Welcome" />
          </div>
          <div>
            <h1
              className="
            font-Montserrat text-lg font-semibold text-gray-800 leading-tight
            m-5 pb-3
           "
            >
              Hello, my name is Jadiel Santos,
              <br /> and I am embarking on a career in web development. <br />I
              am currently pursuing a degree <br /> in Systems Analysis and
              Development at São Judas University. <br /> I invite you to
              explore my portfolio to gain a deeper understanding <br /> of my
              background and skills. Your consideration is greatly appreciated.
            </h1>
            <ul className="flex  font-Montserrat justify-between">
              <Link to={"/about-me"}>
                <li
                  className="mt-3 hover:cursor-pointer relative transform transition-transform duration-300 hover:scale-105
              hover:border-b-2  hover:border-stone-600"
                >
                  About-Me
                </li>
              </Link>
              <Link to={"/skills"}>
                <li
                  className="mt-3 hover:cursor-pointer relative transform transition-transform duration-300 hover:scale-105
              hover:border-b-2  hover:border-stone-600"
                >
                  Skills
                </li>
              </Link>
              <Link to={"/contacts"}>
                <li
                  className="mt-3 hover:cursor-pointer relative transform transition-transform duration-300 hover:scale-105
              hover:border-b-2  hover:border-stone-600"
                >
                  Contacts
                </li>
              </Link>
            </ul>
          </div>
        </main>
      </div>
      <ProjectsSection />
    </>
  );
}
