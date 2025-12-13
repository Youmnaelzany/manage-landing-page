import Wrapper from "./Wrapper";

const different = [
  {
    id: 1,
    number: "01",
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: 2,
    number: "02",
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: 3,
    number: "03",
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

const WhatsDifferent = () => {
  return (
    <Wrapper
      as="section"
      aria-label="What’s different about Manage?"
      className="relative z-0 flex flex-col items-center justify-center gap-10 overflow-visible pt-28.25 md:gap-8 md:pt-24 lg:flex-row lg:items-start lg:justify-between lg:gap-31.25 lg:pt-33"
    >
      <div className="flex flex-col items-center justify-center gap-6 text-center md:max-w-[500px] lg:max-w-[445px] lg:items-start lg:text-left">
        <h2 className="text-[2rem] leading-[140%] font-bold tracking-normal text-[#242D52] md:text-[2.5rem] md:leading-[110%] md:tracking-[-0.75px]">
          What&apos;s different about Manage?
        </h2>
        <p className="text-[0.8125rem] leading-[200%] font-normal tracking-normal text-[#242D52]/50 md:text-base md:leading-6.25">
          Manage provides all the functionality your team needs, without the complexity. Our
          software is tailor-made for modern digital product teams.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {different.map((dif) => (
          <div
            className="flex flex-col gap-2 md:gap-4 lg:gap-2"
            key={dif.id}
          >
            <h3 className="flex items-center gap-6 bg-[#fff0ec] text-base leading-[145%] font-bold tracking-normal text-[#242D52]">
              <span className="flex h-[30px] w-[67px] items-center justify-center rounded-[1.875rem] bg-[#F3603C] text-white">
                {dif.number}
              </span>
              {dif.title}
            </h3>
            <p className="text-[0.8125rem] leading-[200%] font-normal tracking-normal text-[#242D52]/50 md:text-base md:leading-[162.5%] lg:max-w-[649px]">
              {dif.description}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
export default WhatsDifferent;
