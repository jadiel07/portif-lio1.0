import { Link } from "react-router-dom";
import welcomeSvg from "../images/WELCOMESvg.svg";
import jadielsvg from "../images/jadiel.svg";

export default function Welcome() {
  return (
    <>
      <header className="xl:h-64 sm:h-0 md:h-0">
        <img
          className="xl:h-20 xl:block
          lg:h-20 sm:hidden md:hidden mobile:hidden"
          src={jadielsvg}
          alt="logo"
        />
      </header>
      <main className="flex justify-center flex-col place-items-center ">
        <div className="desktop0:mr-96 desktop:mr-96 mobile:mr-0 SmallMobile:mr-0	">
          <img className="mr-20" src={welcomeSvg} alt="Welcome" />
        </div>
        <div className=" ">
          <h1
            className="
            font-Montserrat text-lg font-semibold text-gray-800 leading-tight
            m-5
           "
          >
            Hello, my name is Jadiel Santos,
            <br /> and I am embarking on a career in web development. <br />I am
            currently pursuing a degree <br /> in Systems Analysis and
            Development at São Judas University. <br /> I invite you to explore
            my portfolio to gain a deeper understanding <br /> of my background
            and skills. Your consideration is greatly appreciated.
          </h1>
          <ul className="flex  font-Montserrat justify-between">
            <Link to={"/about-me"}>
              <li className="mt-3 hover:cursor-pointer relative transform transition-transform duration-300 hover:scale-105">
                About-Me
                <div className="absolute left-0 w-full h-[1px] bg-black opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              </li>
            </Link>
            <Link to={"/skills"}>
              <li className="mt-3 hover:cursor-pointer relative transform transition-transform duration-300 hover:scale-105">
                Skills
                <div className="absolute left-0 w-full h-[1px] bg-black opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              </li>
            </Link>
            <Link to={"/projects"}>
              <li className="mt-3 hover:cursor-pointer relative transform transition-transform duration-300 hover:scale-105">
                Projects
                <div className="absolute left-0 w-full h-[1px] bg-black opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              </li>
            </Link>
            <Link to={"/contacts"}>
              <li className="mt-3 hover:cursor-pointer relative transform transition-transform duration-300 hover:scale-105">
                Contacts
                <div className="absolute left-0 w-full h-[1px] bg-black opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              </li>
            </Link>
          </ul>
        </div>
      </main>
    </>
  );
}
