import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Produtos", href: "" },
    { name: "Sobre nós", href: "" },
    { name: "FAQ", href: "" },
    { name: "Contato", href: "" },
  ];

  return (
    <nav className="flex items-center justify-between py-6 px-8 md:px-12 xl:px-16 h-[80px] bg-[#0f0f0f] text-white relative z-50">
      <span className="text-4xl font-bold italic">Vedete</span>

      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-lg hover:font-semibold transition-all duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>

      <button
        className="md:hidden focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={30} />
      </button>

      {isOpen && (
        <div className="fixed bg-black top-0 right-0 flex flex-col items-start justify-center pb-6 pl-6 pt-10 pr-20 space-y-3 rounded-bl-2xl w-[180px]">
          <button
            className="absolute top-6 right-8 text-white cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <X size={30} />
          </button>

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:font-semibold text-base"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
