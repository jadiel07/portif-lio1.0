import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex justify-center sm:gap-4 md:gap-6 lg:gap-10">
          <Link to={"/skills"}>
            <li
              className="font-bold cursor-pointer
           bg-gradient-to-r text-transparent bg-clip-text from-orange-400 to-orange-600
           hover:from-orange-600 hover:to-orange-700 transition-all hover:border-b-2  hover:border-orange-600
           sm:text-2xl md:text-3xl lg:text-4xl"
            >
              Skills
            </li>
          </Link>
          <Link to={"/"}>
            <li
              className=" font-bold
            cursor-pointer
            bg-gradient-to-r text-transparent bg-clip-text from-orange-400 to-orange-600
            hover:from-orange-600 hover:to-orange-700 transition-all hover:border-b-2  hover:border-orange-600
            sm:text-2xl md:text-3xl lg:text-4xl
            "
            >
              Home
            </li>
          </Link>
          <Link to={"/contacts"}>
            <li
              className=" font-bold cursor-pointer
            bg-gradient-to-r text-transparent bg-clip-text from-orange-400 to-orange-600
            hover:from-orange-600 hover:to-orange-700 transition-all hover:border-b-2  hover:border-orange-600
            sm:text-2xl md:text-3xl lg:text-4xl
            "
            >
              Contatos
            </li>
          </Link>

          <Link to={"/about-me"}>
            <li
              className=" font-bold cursor-pointer
            bg-gradient-to-r text-transparent bg-clip-text from-orange-400 to-orange-600
            hover:from-orange-600 hover:to-orange-700 transition-all hover:border-b-2  hover:border-orange-600
            sm:text-2xl md:text-3xl lg:text-4xl"
            >
              Sobre-mim
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
