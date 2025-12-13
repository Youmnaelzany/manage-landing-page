import Image from "next/image";
import { Button } from "./ui/button";
import Wrapper from "./Wrapper";

const BetterProducts = () => {
  return (
    <Wrapper
      as="section"
      aria-label="Bring everyone together to build better products."
      className="relative flex flex-col items-center justify-center overflow-visible pt-14 md:pt-16 lg:flex-row-reverse lg:justify-between lg:pt-30"
    >
      <div className="absolute -top-[32%] -right-[48%] -z-10 md:-right-[27%] lg:-right-[10%]">
        <Image
          src="/bg-tablet-pattern.svg"
          alt=""
          width={814}
          height={814}
          className="h-auto w-full"
          aria-hidden="true"
        />
      </div>

      <div className="">
        <Image
          src="/illustration-intro.svg"
          alt="illustration"
          width={580}
          height={525}
        />
      </div>
      <div className="flex max-w-[673.49px] flex-col items-center justify-center gap-8 md:gap-6 lg:max-w-[445px] lg:items-start lg:gap-10">
        <div className="flex flex-col items-center justify-center gap-6 text-center lg:items-start lg:gap-4 lg:text-left">
          <h1 className="text-[2.5rem] leading-[110%] font-bold tracking-[-0.75px] text-[#242D52] lg:text-[3.5rem] lg:leading-[115%] lg:tracking-[-1px]">
            {" "}
            Bring everyone together to build better products.
          </h1>
          <p className="text-base leading-[162.5%] font-normal tracking-normal text-[#242D52]/50">
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the
            larger team goals in view.
          </p>
        </div>
        <Button
          type="button"
          variant={"orange"}
        >
          Get Started
        </Button>
      </div>
    </Wrapper>
  );
};

export default BetterProducts;
