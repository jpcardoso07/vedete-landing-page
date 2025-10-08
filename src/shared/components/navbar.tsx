export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-6 px-8 md:px-12 xl:px-16 h-[80px] bg-[#0f0f0f] text-white">
      <span className="text-5xl font-bold italic">Vedete</span>
      <div className="flex items-center gap-6">
        <a target="_blank" href="" className="text-lg hover:font-semibold">
          Produtos
        </a>
        <a target="_blank" href="" className="text-lg hover:font-semibold">
          Sobre nós
        </a>
        <a target="_blank" href="" className="text-lg hover:font-semibold">
          FAQ
        </a>
        <a target="_blank" href="" className="text-lg hover:font-semibold">
          Contato
        </a>
      </div>
    </div>
  );
}
