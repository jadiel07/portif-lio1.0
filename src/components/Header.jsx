export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex justify-center  m-1 sm:gap-4 md:gap-6 lg:gap-10">
          <li
            className=" font-bold cursor-pointer
           bg-gradient-to-r text-transparent bg-clip-text from-orange-400 to-orange-600
           hover:from-orange-600 hover:to-orange-700 transition-all hover:border-b-2  hover:border-orange-600
           sm:text-2xl md:text-3xl lg:text-4xl
           "
          >
            Skills
          </li>
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
          <li
            className=" font-bold cursor-pointer
            bg-gradient-to-r text-transparent bg-clip-text from-orange-400 to-orange-600
            hover:from-orange-600 hover:to-orange-700 transition-all hover:border-b-2  hover:border-orange-600
            sm:text-2xl md:text-3xl lg:text-4xl
            "
          >
            Contatos
          </li>
          <li
            className=" font-bold cursor-pointer
            bg-gradient-to-r text-transparent bg-clip-text from-orange-400 to-orange-600
            hover:from-orange-600 hover:to-orange-700 transition-all hover:border-b-2  hover:border-orange-600
            sm:text-2xl md:text-3xl lg:text-4xl
            "
          >
            Sobre-mim
          </li>
        </ul>
      </nav>
    </header>
  );
}
