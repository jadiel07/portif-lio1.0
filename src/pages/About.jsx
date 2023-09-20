import Header from "../components/Header";
import MainAbout from "../components/about.components/MainAbout";
import engrenagem from "../images/engrenagem.png";

export default function About() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-2xl font-semibold">Building the page</p>
          <div
            className="w-24 h-24 bg-center bg-cover mx-auto mt-4 animate-spin"
            style={{
              backgroundImage: `url(${engrenagem})`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
