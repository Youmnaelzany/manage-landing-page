import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaPinterest, FaSquareFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Wrapper from "./Wrapper";

export const navigationLinks = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "Pricing",
  },
  {
    id: 3,
    label: "Products",
  },
  {
    id: 4,
    label: "About Us",
  },
  {
    id: 5,
    label: "Careers",
  },
  {
    id: 6,
    label: "Community",
  },
  {
    id: 7,
    label: "Privacy Policy",
  },
];

const Footer = () => {
  return (
    <Wrapper
      as="footer"
      aria-label="footer"
      className="flex flex-col items-center justify-center bg-[#1D1E25] py-12 lg:flex-row lg:justify-between"
    >
      {/* Email & Submit Button */}
      <div className="flex items-center gap-2">
        <Input
          placeholder="Enter your email"
          className="rounded-full bg-white text-[0.8125rem] leading-[200%] font-normal tracking-normal text-[#F33C3C] outline-none placeholder:text-[0.8125rem] placeholder:font-normal placeholder:tracking-normal placeholder:text-[#F33C3C]"
        />
        <Button
          type="submit"
          variant={"orange"}
          className="cursor-pointer"
        >
          Go
        </Button>
      </div>
      {/* Navigation Links */}
      <ul className="grid grid-cols-2 justify-between gap-y-2 md:grid-cols-4 lg:grid-cols-2">
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <Link
              href="#"
              className="cursor-pointer text-base leading-[162.5%] font-normal tracking-normal text-white transition-all duration-700 ease-out hover:text-[#F3603C]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Social Media Links */}
      <ul className="flex items-center gap-4">
        <li className="">
          <Tooltip>
            <TooltipTrigger>
              <Link href={"#"}>
                <FaSquareFacebook className="size-5 cursor-pointer text-white transition-all duration-700 ease-out hover:text-[#F3603C]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-[#F3603C]">Facebook</p>
            </TooltipContent>
          </Tooltip>
        </li>
        <li className="">
          <Tooltip>
            <TooltipTrigger>
              <Link href={"#"}>
                <FaYoutube className="size-5 cursor-pointer text-white transition-all duration-700 ease-out hover:text-[#F3603C]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-[#F3603C]">YouTube</p>
            </TooltipContent>
          </Tooltip>
        </li>
        <li className="">
          <Tooltip>
            <TooltipTrigger>
              <Link href={"#"}>
                <FaXTwitter className="size-5 cursor-pointer text-white transition-all duration-700 ease-out hover:text-[#F3603C]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-[#F3603C]">Twitter</p>
            </TooltipContent>
          </Tooltip>
        </li>
        <li className="">
          <Tooltip>
            <TooltipTrigger>
              <Link href={"#"}>
                <FaPinterest className="size-5 cursor-pointer text-white transition-all duration-700 ease-out hover:text-[#F3603C]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-[#F3603C]">Pinterest</p>
            </TooltipContent>
          </Tooltip>
        </li>
        <li className="">
          <Tooltip>
            <TooltipTrigger>
              <Link href={"#"}>
                <FaInstagram className="size-5 cursor-pointer text-white transition-all duration-700 ease-out hover:text-[#F3603C]" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-[#F3603C]">Instagram</p>
            </TooltipContent>
          </Tooltip>
        </li>
      </ul>
      {/* Logo */}
      <div>
        <Image
          src="/logo-white.svg"
          alt="logo"
          width={146}
          height={24}
        />
      </div>
      <h4 className="text-[0.8125rem] leading-[145%] font-medium tracking-normal text-white/50">
        Copyright 2025. All Rights Reserved
      </h4>
    </Wrapper>
  );
};
export default Footer;
