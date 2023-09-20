import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex justify-center ">
          <Link to={"/skills"}>
            <li
              className="font-bold cursor-pointer
              bg-gradient-to-r text-transparent bg-clip-text from-stone-700 to-stone-400
              hover: from-stone-400 hover:to-stone-700 transition-all hover:border-b-2  hover:border-stone-600
              h-12 text-2xl px-2 "
            >
              Skills
            </li>
          </Link>
          <Link to={"/"}>
            <li
              className=" font-bold cursor-pointer
              bg-gradient-to-r text-transparent bg-clip-text from-stone-700 to-stone-400
              hover: from-stone-400 hover:to-stone-700 transition-all hover:border-b-2  hover:border-stone-600
              h-12 text-2xl px-2"
            >
              Home
            </li>
          </Link>
          <Link to={"/contacts"}>
            <li
              className=" font-bold cursor-pointer
              bg-gradient-to-r text-transparent bg-clip-text from-stone-700 to-stone-400
              hover: from-stone-400 hover:to-stone-700 transition-all hover:border-b-2  hover:border-stone-600
              h-12 text-2xl px-2"
            >
              Contacts
            </li>
          </Link>

          <Link to={"/about-me"}>
            <li
              className=" font-bold cursor-pointer
            bg-gradient-to-r text-transparent bg-clip-text from-stone-700 to-stone-400
            hover: from-stone-400 hover:to-stone-700 transition-all hover:border-b-2  hover:border-stone-600
            h-12 text-2xl px-2 "
            >
              Me
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
