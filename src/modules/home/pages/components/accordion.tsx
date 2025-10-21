import { ChevronDown } from "lucide-react";

interface AccordionProps {
  isOpen: boolean;
  toggle: VoidFunction;
  title: string;
  description: string;
}

export default function Accordion({
  isOpen,
  toggle,
  title,
  description,
}: Readonly<AccordionProps>) {
  return (
    <div className="w-full">
      <div className="border-[1px] border-[hsl(216,16%,30%)] rounded-2xl px-6 bg-gradient-to-b from-[#FFFFFF0D] to-[#FFFFFF00]">
        <button
          className="flex flex-row w-full text-left py-2 items-center gap-2"
          onClick={toggle}
        >
          <h3 className="text-base lg:text-lg text-text w-[90%] font-medium">
            {title}
          </h3>
          <div
            className={`flex rounded-full w-[40px] h-[40px] justify-center items-center transition-transform duration-300 ease-in-out cursor-pointer ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronDown size={20} />
          </div>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95"
          }`}
        >
          <div className="pb-6 text-white">
            <p
              className="text-sm lg:text-base"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
