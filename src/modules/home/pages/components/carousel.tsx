import useDimensions from "../../../../shared/hooks/useDimensions";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import CarouselCard from "./carousel-cards";

export default function Carousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const { width } = useDimensions();

  const cards = [
    {
      id: 1,
      title: "titulo",
      description: "descricao",
    },
    {
      id: 2,
      title: "titulo",
      description: "descricao",
    },
    {
      id: 3,
      title: "titulo",
      description: "descricao",
    },
    {
      id: 4,
      title: "titulo",
      description: "descricao",
    },
    {
      id: 5,
      title: "titulo",
      description: "descricao",
    },
  ];

  return (
    <div
      className={`flex w-full items-center justify-between gap-4 ${
        width >= 1366 ? "max-w-[1300px]" : "max-w-[500px]"
      } h-[380px] self-center custom-swiper`}
    >
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        autoplay
        spaceBetween={20}
        loop
        initialSlide={0}
        watchSlidesProgress
        centeredSlides
        slidesPerView={width >= 1366 ? 3 : width >= 800 ? 1 : 1}
        className="py-6 px-5"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
      >
        {cards?.map(({ id, title, description }) => (
          <SwiperSlide
            key={id}
            className="flex justify-center h-full items-center transition-transform duration-1000 md:[&.swiper-slide-active]:scale-115 my-6"
          >
            <div className="flex w-full justify-center items-center h-[380px]">
              <CarouselCard title={title} description={description} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
