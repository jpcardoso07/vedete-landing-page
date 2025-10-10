import type { IHomePresentation } from "./interface";
import Refri1 from "../../shared/assets/refri1.png";
import Refri2 from "../../shared/assets/refri2.png";

export default function HomePresentation(state: Readonly<IHomePresentation>) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 px-8 md:px-12 xl:px-16 bg-[#0f0f0f] text-white">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full max-w-[1300px]">
        <div id="carousel" className="flex max-w-[500px] w-full">
          <img src={Refri1} alt="Refri 1" className="w-[32%] xl:w-[40%]" />
          <img src={Refri2} alt="Refri 2" className="w-[32%] xl:w-[40%]" />
          <img src={Refri1} alt="Refri 3" className="w-[32%] xl:w-[40%]" />
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-5xl lg:text-6xl font-bold text-[#2933c2]">
            O Sabor do <br /> Brasileiro
          </p>
          <p className="text-lg lg:text-xl max-w-[460px] lg:max-w-[500px]">
            Tradição no almoço de familia, churrasco e aniversários. Quem é
            brasileiro sabe que Vedete acompanha diferentes fases da nossa
            trajetória.
          </p>
        </div>
      </div>
    </div>
  );
}
