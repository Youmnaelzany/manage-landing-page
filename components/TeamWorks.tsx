import Image from "next/image";
import { Button } from "./ui/button";
import Wrapper from "./Wrapper";

const TeamWorks = () => {
  return (
    <Wrapper
      as="section"
      aria-label="Simplify how your team works today"
      className="relative z-50 flex flex-col items-center justify-between gap-10 overflow-hidden bg-[#F3603C] py-12 text-center lg:flex-row lg:justify-between lg:text-left"
    >
      <h2 className="z-50 max-w-[440px] text-[2.5rem] leading-[110$] font-bold tracking-[-0.75px] text-white">
        Simplify how your team works today.
      </h2>
      <Button
        variant={"orange"}
        type="button"
        size={"lg"}
        className="z-50 cursor-pointer rounded-full bg-white text-[#F3603C] hover:bg-white/80"
      >
        Get Started
      </Button>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={"/bg-simplify-section-desktop.svg"}
          alt=""
          fill
          className="object-cover object-left"
          aria-hidden="true"
        />
      </div>
    </Wrapper>
  );
};
export default TeamWorks;
