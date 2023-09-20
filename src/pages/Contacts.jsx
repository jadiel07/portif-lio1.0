import Header from "../components/Header";
import engrenagem from "../images/engrenagem.png";

export default function Contacts() {
  return (
    <div>
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
    </div>
  );
}
