import React from "react";
import lara from "../../images/lara.jpg";
import eu from "../../images/eu.jpg";

export default function MainAbout() {
  return (
    <main className="flex flex-col">
      <header className="text-center py-8 border-b border-gray-300">
        <h1 className="text-3xl font-bold">Jadiel Souza</h1>
      </header>
      <div className="flex items-center justify-between p-8">
        <div className="flex-1 pr-8">
          <h1 className="text-2xl font-bold mb-4">About me</h1>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            <br />
            ipsam alias sint ipsa obcaecati sit, facere consequuntur eligendi
            <br />
            sunt deserunt hic autem officiis quasi corrupti quidem temporibus
            <br />
            veritatis reprehenderit commodi rerum inventore esse placeat dolore.
            <br />
            Iusto dolorem natus doloremque suscipit?
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <img src={eu} alt="Hello" className="   w-80 md:w-64 rounded-tl-lg" />
        </div>
      </div>
    </main>
  );
}
