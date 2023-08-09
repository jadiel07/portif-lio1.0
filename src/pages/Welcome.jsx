import { Link } from "react-router-dom";
import IconsHome from "../components/home/IconsHome";

export default function Welcome() {
  return (
    <main className="h-screen grid place-items-center ">
      <h1>Hello, welcome, my name is Jadiel and I'm a front-end developer</h1>
      <IconsHome />
    </main>
  );
}
