import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import Wrapper from "./Wrapper";

const testimonial = [
  {
    id: 1,
    avatar: "/avatar-anisha.png",
    name: "Anisha Li",
    said: "“Manage has supercharged our team&apos;s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    id: 2,
    avatar: "/avatar-ali.png",
    name: "Ali Bravo",
    said: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    id: 3,
    avatar: "/avatar-richard.png",
    name: "Richard Watts",
    said: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can&apos;t stop recommending them to everyone I talk to!”",
  },
  {
    id: 4,
    avatar: "/avatar-shanai.png",
    name: "Shanai Gough",
    said: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

const TheyHaveSaid = () => {
  return (
    <Wrapper
      as="section"
      aria-label="What they've said"
      className="relative flex flex-col items-center justify-center gap-10 overflow-visible pt-28 pb-21.5 md:gap-16 md:pt-24 md:pb-24 lg:pt-44 lg:pb-36"
    >
      <div className="absolute -top-[20%] -left-[26%] -z-10 hidden lg:flex">
        <Image
          src="/bg-tablet-pattern.svg"
          alt=""
          width={814}
          height={814}
          className="h-auto w-full"
          aria-hidden="true"
        />
      </div>
      <h2 className="text-[2rem] leading-[140%] font-bold tracking-normal text-[#242D52] md:text-[2.5rem] md:leading-11 md:tracking-[-0.7px]">
        What they&apos;ve said
      </h2>
      <div className="w-full max-w-5xl px-4">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonial.map((item) => (
              <CarouselItem
                className="pl-4 md:basis-1/2 md:pl-6 lg:basis-1/3"
                key={item.id}
              >
                <div className="flex h-full w-full max-w-[360px] flex-col items-center justify-center gap-4 rounded-lg bg-[#FAFAFA] p-8 text-center shadow-xl md:max-w-[560px]">
                  <div className="flex items-center justify-center">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={72}
                      height={72}
                    />
                  </div>
                  <h3 className="text-base leading-[145%] font-bold tracking-normal text-[#242D52]">
                    {item.name}
                  </h3>
                  <p className="text-[0.8125rem] leading-[200%] font-normal tracking-normal text-[#242D52]/50">
                    {item.said}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2 md:-left-4" />
          <CarouselNext className="-right-2 md:-right-4" />
        </Carousel>
      </div>
      <Button
        type="button"
        variant={"orange"}
      >
        Get Started
      </Button>
    </Wrapper>
  );
};
export default TheyHaveSaid;
