import { useEffect, useRef, useState } from "react";
import Logo from "./logo-dark";
import LogoLight from "./logo-light";
import { gsap } from "gsap";
import TransitionLink from "@/components/TransitionLink";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import GooeyNav from "@/components/GooeyNav";
import { usePathname } from "next/navigation";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const items = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  useEffect(() => {
    if (headerRef.current) {
      gsap.set(headerRef.current, { opacity: 1 });
    }
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // 640px is the 'sm' breakpoint in Tailwind
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10); // Add background when scrolled more than 10px
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      ref={headerRef}
      className={`w-full flex flex-row items-center justify-between p-4 md:px-12 max-sm:pr-6 fixed top-0 z-50   ${
        isScrolled ? 'bg-black/95  border-b border-gray-900' : 'bg-transparent'
      }`}
    >
      <TransitionLink className="cursor-pointer" href="/">
        {isSmallScreen ? (
            <Logo width={150} height={45} />
        ) : (
          <Logo />
        )}
      </TransitionLink>

      {/* Desktop Menu */}
      <div className="hidden sm:block">
        <GooeyNav
          items={items}
          particleCount={25}
          particleDistances={[90, 10]}
          particleR={100}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger className="p-2">
            <Menu />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader className="border-b">
              <LogoLight height={45} width={150} />
            </SheetHeader>
            <div className="flex flex-col gap-1 text-lg px-4 ">
              {items.map((item, index) => (
                <SheetClose asChild key={index}>
                  <TransitionLink
                    href={item.href}
                    className={`${
                      activePath === item.href && "bg-purple-900 text-white"
                    }   px-4 py-3 rounded-lg text-sm`}
                    onClick={() => {
                      setActivePath(item.href);
                    }}
                  >
                    {item.label}
                  </TransitionLink>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
