// shadcn components imports...
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";

// plugins for the shadcn carousel components..
import Autoplay from "embla-carousel-autoplay";

// utilities functions...
import { cn } from "@/lib/utils";

// types imports...
import { IAnime } from "@/types/anime.types";

// RRD imports...
import { Link } from "react-router-dom";

const AnimeCarousel = ({ animes }: { animes: IAnime[] }) => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}
      className="relative w-full max-w-screen-2xl mx-auto"
    >
      <CarouselContent>
        {animes.map((anime) => (
          <CarouselItem
            className="h-[50vw] pl-0 max-h-[620px] min-h-72 w-full"
            key={anime.id}
          >
            <div className="w-full h-full relative">
              <div className="absolute h-full w-[75%] right-0 -z-10 [mask-image:linear-gradient(to_right,transparent,white)]">
                <img
                  src={anime.bannerImage ?? anime.coverImage.extraLarge}
                  alt="anime image"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="ml-8 max-w-3xl bottom-8 absolute space-y-3">
                <div className="aspect-[12/18] w-36 rounded-md overflow-hidden shadow-sm hidden mb-4 lg:block">
                  <img
                    src={anime.coverImage.large}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                <h1 className="text-[clamp(2rem,6vw,3rem)] md:w-full md:max-w-full max-w-sm leading-none font-semibold line-clamp-2">
                  {anime.title.english}
                </h1>
                <p
                  className="md:!line-clamp-3 md:block hidden"
                  dangerouslySetInnerHTML={{ __html: anime.description }}
                ></p>

                <Link
                  to={`/anime/${anime.animeId}`}
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      className: "rounded-none sm:max-w-sm max-w-xs",
                    })
                  )}
                >
                  Watch Now -
                  <span className="truncate ml-1">
                    {anime.title.userPreferred}
                  </span>
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <div className="absolute bottom-4 right-4 w-16 grid gap-4 grid-cols-2">
        <CarouselPrevious className="translate-x-0 translate-y-0 right-0 top-0" />
        <CarouselNext className="translate-x-0 translate-y-0 right-0 top-0" />
      </div> */}
    </Carousel>
  );
};
export default AnimeCarousel;
