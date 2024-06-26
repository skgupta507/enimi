import { IAnime } from "@/types/anime.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Link } from "react-router-dom";

type PopularAnimeProps = {
  populars: IAnime[];
};

const PopularAnimeCarousel = ({ populars }: PopularAnimeProps) => {
  return (
    <>
      <Carousel opts={{ align: "start" }} className="mt-4">
        <div className="flex justify-between items-center mb-4">
          <div className="">
            <h2 className="text-4xl font-semibold">Popular</h2>
            <p className="text-muted-foreground text-sm">
              List of popular animes.
            </p>
          </div>

          <div className="flex items-center h-12 relative">
            <CarouselPrevious
              variant="default"
              className="top-1/2 -translate-y-1/2 md:w-24 absolute md:-translate-x-40 -translate-x-6 rounded-none"
            />
            <CarouselNext
              variant="default"
              className="top-1/2 -translate-y-1/2 right-0 md:w-24 absolute rounded-none"
            />
          </div>
        </div>
        <CarouselContent>
          {populars.map((anime, index) => (
            <CarouselItem className="basis-1/10" key={anime.id}>
              <div className="relative flex items-end">
                <div className="hidden md:block">
                  <Link
                    to={`/anime/${anime.animeId}`}
                    className="veritcal-text dark:text-white hover:text-primary dark:hover:text-primary text-secondary-foreground truncate h-52 text-base font-medium pr-0 pl-2"
                  >
                    {anime.title.userPreferred}
                  </Link>
                  <span className="block mx-auto w-fit text-xl text-primary font-semibold">
                    {Number(index) + 1 < 10
                      ? `0${Number(index) + 1}`
                      : Number(index) + 1}
                  </span>
                </div>
                <div className="md:hidden grid absolute top-0 left-0 place-items-center bg-primary h-10 text-xl w-10">
                  {Number(index) + 1 < 10
                    ? `0${Number(index) + 1}`
                    : Number(index) + 1}
                </div>
                <Link
                  to={`/anime/${anime.animeId}`}
                  className="sm:aspect-[12/16] w-52 aspect-[8/10]"
                >
                  <img
                    src={anime.coverImage.large}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};
export default PopularAnimeCarousel;
