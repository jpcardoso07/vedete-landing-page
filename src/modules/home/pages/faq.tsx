import { useState } from "react";
import Accordion from "./components/accordion";
import VedetePiquinique from "../../../shared/assets/vedete-piquinique.jpg";

export default function Faq() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  const items = [
    {
      id: "accordion1",
      title: "Onde posso encontrar os produtos Vedete?",
      description:
        "A Vedete está presente nos principais mercados, padarias e restaurantes do Brasil.",
    },
    {
      id: "accordion2",
      title: "A Vedete possui opções sem açúcar?",
      description:
        "Sim! Nossa linha Zero Açúcar garante o mesmo sabor com menos calorias.",
    },
    {
      id: "accordion3",
      title: "Quais tamanhos estão disponíveis?",
      description:
        "Trabalhamos com garrafas de 2L, 1L, 600ml e latinhas de 350ml.",
    },
    {
      id: "accordion4",
      title: "A Vedete é uma empresa brasileira?",
      description:
        "100% brasileira! Produzida com orgulho e distribuída por todo o país.",
    },
    {
      id: "accordion5",
      title: "Posso entrar em contato para parcerias ou eventos?",
      description:
        "Claro! Acesse a página de contato e fale com a nossa equipe.",
    },
  ];

  return (
    <div
      id="faq"
      className="flex items-center gap-32 justify-center w-full py-16 px-8 md:px-12 xl:px-16 bg-[#0f0f0f] text-white"
    >
      <div className="flex flex-col items-center">
        <p className="font-bold text-4xl text-blue-700">Dúvidas Frequentes</p>
        <div className="flex flex-col max-w-[640px] gap-3 mt-12">
          {items.map((item) => (
            <Accordion
              key={item.id}
              title={item.title}
              description={item.description}
              isOpen={openAccordion === item.id}
              toggle={() => toggleAccordion(item.id)}
            />
          ))}
        </div>
      </div>

      <img src={VedetePiquinique} className="w-[360px] rounded-xl hover:scale-104 transition-all duration-300" />
    </div>
  );
}
