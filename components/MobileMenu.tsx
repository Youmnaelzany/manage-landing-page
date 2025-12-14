import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navigationLinks } from "./Footer";

const MobileMenu = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="size-6 cursor-pointer text-[#242D52]" />
        </SheetTrigger>
        <SheetContent
          className="flex h-[672px] items-center justify-center bg-white"
          side="right"
        >
          <SheetHeader>
            <SheetTitle></SheetTitle>
            {/* Navigation */}
            <ul className="flex flex-col items-center gap-8">
              {navigationLinks
                .filter((item) => [2, 3, 4, 5, 6].includes(item.id))
                .map((link) => (
                  <li key={link.id}>
                    <Link
                      href="#"
                      className="cursor-pointer text-base leading-[145%] font-bold tracking-normal text-[#242D52] transition-all duration-700 ease-out hover:opacity-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileMenu;
