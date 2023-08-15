import { Link } from "react-router-dom";
import welcomeSvg from "../images/WELCOMESvg.svg";
import jadielsvg from "../images/jadiel.svg";

export default function Welcome() {
  return (
    <>
      <header className="h-64">
        <img className="h-20" src={jadielsvg} alt="logo" />
      </header>
      <main className="flex justify-center flex-col place-items-center ">
        <div className="mr-96 	">
          <img className="mr-20" src={welcomeSvg} alt="Welcome" />
        </div>
        <div className="flex gap-52">
          <h1 className="font-Montserrat text-lg font-semibold text-gray-800 leading-tight">
            Hello, my name is Jadiel Santos,
            <br /> and I am embarking on a career in web development. <br />I am
            currently pursuing a degree <br /> in Systems Analysis and
            Development at São Judas University. <br /> I invite you to explore
            my portfolio to gain a deeper understanding <br /> of my background
            and skills. Your consideration is greatly appreciated.
          </h1>
          <ul className=" flex flex-col font-Montserrat ">
            <li className="mt-3 hover:cursor-pointer relative transform transition-transform duration-300 hover:scale-105">
              About-Me
              <div className="absolute left-0 w-full h-[1px] bg-black opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </li>
            <li className="mt-3 hover:cursor-pointer relative transform transition-transform duration-300 hover:scale-105">
              Skills
              <div className="absolute left-0 w-full h-[1px] bg-black opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </li>
            <li className="mt-3 hover:cursor-pointer relative transform transition-transform duration-300 hover:scale-105">
              Projects
              <div className="absolute left-0 w-full h-[1px] bg-black opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </li>
            <li className="mt-3 hover:cursor-pointer relative transform transition-transform duration-300 hover:scale-105">
              Contacts
              <div className="absolute left-0 w-full h-[1px] bg-black opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
