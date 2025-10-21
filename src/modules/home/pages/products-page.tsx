import VedeteGuarana from "../../../shared/assets/refris/vedete-guarana.png";
import VedeteLaranja from "../../../shared/assets/refris/vedete-laranja.png";
import VedeteLimao from "../../../shared/assets/refris/vedete-limao.png";
import VedeteTradicional from "../../../shared/assets/refris/vedete-tradicional.png";

export default function ProductsPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 px-8 md:px-12 xl:px-16 bg-[#0f0f0f] text-white">
      <div className="flex flex-col gap-4 text-center">
        <p className="font-bold text-4xl text-blue-700">Nossos Produtos</p>
        <p className="text-xl">
          A Vedete está presente em diversos momentos da vida — e para cada um,
          existe um sabor perfeito.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 text-center mt-12 gap-16">
        <div className="flex flex-col w-full max-w-[400px] gap-4">
          <img
            src={VedeteTradicional}
            className="w-[300px] self-center hover:scale-106 transition-all duration-300"
          />
          <p className="text-2xl font-semibold">Vedete Tradicional</p>
          <p className="text-lg">
            O clássico que atravessa gerações, com o sabor inconfundível que só
            a Vedete tem.
          </p>
        </div>
        <div className="flex flex-col w-full max-w-[400px] gap-4">
          <img
            src={VedeteGuarana}
            className="w-[300px] self-center hover:scale-106 transition-all duration-300"
          />
          <p className="text-2xl font-semibold">Vedete Guaraná</p>
          <p className="text-lg">
            Feito com o melhor do fruto brasileiro, refrescante e vibrante como
            o nosso povo.
          </p>
        </div>
        <div className="flex flex-col w-full max-w-[400px] gap-4">
          <img
            src={VedeteLaranja}
            className="w-[300px] self-center hover:scale-106 transition-all duration-300"
          />
          <p className="text-2xl font-semibold">Vedete Laranja</p>
          <p className="text-lg">
            Doce na medida certa e com aquele toque cítrico irresistível.
          </p>
        </div>
        <div className="hidden lg:flex"></div>
        <div className="flex flex-col w-full max-w-[400px] gap-4">
          <img
            src={VedeteLimao}
            className="w-[300px] self-center hover:scale-106 transition-all duration-300"
          />
          <p className="text-2xl font-semibold">Vedete Limão</p>
          <p className="text-lg">
            Refrescância garantida — o par ideal para um dia quente de verão.
          </p>
        </div>
      </div>
    </div>
  );
}
