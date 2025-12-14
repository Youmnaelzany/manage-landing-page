import Image from "next/image";
import Link from "next/link";
import { navigationLinks } from "./Footer";
import MobileMenu from "./MobileMenu";
import { Button } from "./ui/button";
import Wrapper from "./Wrapper";

const Header = () => {
  return (
    <Wrapper
      as="header"
      aria-label="Header"
      className="flex items-center justify-between pt-12"
    >
      {/* Logo */}
      <div>
        <Image
          src="/logo.svg"
          alt="logo"
          width={146}
          height={24}
        />
      </div>

      {/* Navigation */}
      <ul className="hidden items-center gap-8 lg:flex">
        {navigationLinks
          .filter((item) => [2, 3, 4, 5, 6].includes(item.id))
          .map((link) => (
            <li key={link.id}>
              <Link
                href="#"
                className="cursor-pointer text-[0.8125rem] leading-[145%] font-medium tracking-normal text-[#242D52] transition-all duration-700 ease-out hover:opacity-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
      </ul>

      <Button
        type="button"
        variant={"orange"}
        className="hidden lg:flex"
      >
        Get Started
      </Button>

      <MobileMenu />
    </Wrapper>
  );
};

export default Header;
