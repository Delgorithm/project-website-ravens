import Image from "next/image";
import BtnCTA from "./btn-cta";

export default function Information() {
  return (
    <div className="h-screen mt-24 flex flex-col gap-24">
      <div className="border-y-2">
        <h2 className="flex items-center justify-between text-[110px] font-ppEiko font-thin text-[#F5F8F1] px-32">
          Informations<span className="text-[30px] mt-14">[04]</span>
        </h2>
      </div>
      <section className="px-32">
        <div>
          <article className="flex justify-around items-center text-white">
            <div className="w-[480px] flex flex-col gap-6">
              <h2 className="text-[80px] font-ppEiko flex">Julie Ravens</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <ul className="list-disc ml-4">
                <li>Lieu : Lorem Ipsum</li>
                <li>Adresse : Lorem Ipsum</li>
                <ul className="list-disc flex flex-col ml-6">
                  <li>Lundi: 10h00 - 18h00</li>
                  <li>Mardi: 10h00 - 18h00</li>
                  <li>Mercredi: 10h00 - 18h00</li>
                  <li>Jeudi: 10h00 - 18h00</li>
                  <li>Vendredi: 10h00 - 18h00</li>
                </ul>
              </ul>
              <div className="flex justify-center">
                <BtnCTA text={"Prendre rendez-vous"} />
              </div>
            </div>
            <div className="w-[416px] h-[500px] bg-white"></div>
          </article>
        </div>
      </section>
    </div>
  );
}
