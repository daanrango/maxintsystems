"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  siteName?: string;
  siteNameShort?: string;
  logoSrc?: string;
  navItems?: NavItem[];
};

const defaultNavItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Empresa", href: "/empresa" },
  { label: "Servicios", href: "/servicios" },
  { label: "Productos", href: "/productos" },
  { label: "Galeria", href: "/galeria" },
  { label: "Contacto", href: "/contacto" },
];

export function Header({
  siteName = "Max Integration Security Systems",
  siteNameShort = "MaxIntSystems",
  logoSrc = "/img/logo.jpeg",
  navItems = defaultNavItems,
}: HeaderProps) {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);
  return (
    <header>
      <nav className="navbar-main py-6">
        <div className="w-4/5 mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center gap-5">
            <div className="brand-hex flex items-center justify-center">
              <Image src={logoSrc} alt="logo" width={60} height={60} priority />
            </div>
            <span className="text-white uppercase brand-text block md:hidden">
              {siteNameShort}
            </span>
            <span className="text-white uppercase brand-text hidden md:block">
              {siteName}
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpened(!isOpened)}
            className="navbar-toggler lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h22M4 15h22M4 23h22" />
            </svg>
          </button>
          <div
            className={`${isOpened ? "block" : "hidden"} w-full lg:block lg:w-auto`}
          >
            <ul
              className={`navbar-nav ${isOpened ? "movil" : ""} flex flex-col lg:flex-row gap-0 lg:gap-5 items-center rounded-lg`}
            >
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li
                    key={item.href}
                    className={isActive ? "current-page" : ""}
                  >
                    <Link href={item.href} onClick={() => setIsOpened(false)}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
