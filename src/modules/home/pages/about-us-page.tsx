import FabricaVedete from "../../../shared/assets/fabrica-vedete.jpg";
import DonoVedete from "../../../shared/assets/dono-vedete.jpg";

export default function AboutUsPage() {
  return (
    <div
      id="sobre"
      className="flex flex-col items-center justify-center w-full py-16 px-8 md:px-12 xl:px-16 bg-[#0f0f0f] text-white"
    >
      <div className="flex flex-col gap-4 text-center">
        <p className="font-bold text-4xl text-blue-700">Sobre Nós</p>
        <p className="text-xl">Descubra um pouco mais sobre nossa história</p>
      </div>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center lg:gap-20 w-full max-w-[1300px] mt-16">
        <div className="lg:pb-12 max-w-xl">
          <p className="text-lg lg:text-xl mb-4 mt-10 lg:mt-0">
            De almoços em família a festas de aniversário, a Vedete está
            presente em cada brinde, em cada risada e em cada lembrança boa.
          </p>
          <ul className="space-y-3 text-base lg:text-lg">
            <li>
              <strong>Missão:</strong> levar alegria e sabor à vida das pessoas,
              valorizando momentos simples e especiais.
            </li>
            <li>
              <strong>Visão:</strong> ser reconhecida como o refrigerante que
              representa a alma e o sabor do brasileiro.
            </li>
            <li>
              <strong>Valores:</strong> tradição, qualidade, autenticidade e
              paixão pelo que fazemos.
            </li>
          </ul>
        </div>
        <img
          src={FabricaVedete}
          className="rounded-xl hover:scale-104 transition-all duration-300 w-full max-w-xl"
        />
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:gap-20 w-full max-w-[1300px] mt-20">
        <img
          src={DonoVedete}
          className="rounded-xl hover:scale-104 transition-all duration-300 w-full max-w-xl"
        />
        <div className="lg:pb-12">
          <p className="text-lg lg:text-xl mb-4 mt-10 lg:mt-0 max-w-xl">
            Desde 1984, a Vedete faz parte da mesa dos brasileiros. Nascida em
            uma pequena fábrica do interior de São Paulo, a marca cresceu
            mantendo o mesmo compromisso: oferecer sabor e qualidade com aquele
            toque de brasilidade que só a gente tem.
          </p>
        </div>
      </div>
    </div>
  );
}
