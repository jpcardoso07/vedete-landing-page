import type { IHomePresentation } from "./interface";
import Refri1 from "../../shared/assets/lata-guarana.png";
import Refri2 from "../../shared/assets/lata-vedete.png";

export default function HomePresentation(state: Readonly<IHomePresentation>) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 px-8 md:px-12 xl:px-16 bg-[#0f0f0f] text-white">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full max-w-[1300px]">
        <div
          id="carousel"
          className="flex max-w-[500px] w-full mt-[-12%] lg:mt-[-2%]"
        >
          <img
            src={Refri1}
            alt="Refri 1"
            className="w-[47%] h-fit pt-[10%] transition-transform duration-500 ease-out hover:scale-110"
          />
          <img
            src={Refri2}
            alt="Refri 2"
            className="w-[63%] transition-transform duration-500 ease-out hover:scale-110"
          />
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-5xl lg:text-6xl font-bold text-blue-700">
            O Sabor do <br /> Brasileiro.
          </p>
          <p className="text-base lg:text-lg max-w-[460px] lg:max-w-[480px]">
            Tradição no almoço de família, churrasco e aniversários. Quem é
            paulista sabe que Vedete acompanha diferentes fases da nossa
            trajetória. <br /> <br /> Refrescante, marcante e feita para estar
            presente em todos os momentos que têm alegria, amizade e boas
            risadas.
          </p>
        </div>
      </div>
    </div>
  );
}
