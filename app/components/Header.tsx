"use client";

import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  siteName?: string;
  logoSrc?: string;
  navItems?: NavItem[];
};

const defaultNavItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Empresa", href: "/empresa" },
  { label: "Servicios", href: "/servicios" },
  { label: "Galeria", href: "/galeria" },
  { label: "Contacto", href: "/contacto" },
];

export function Header({
  siteName = "Max Integration Security Systems",
  logoSrc = "/img/logo.jpeg",
  navItems = defaultNavItems,
}: HeaderProps) {
  return (
    <header>
      <nav className="navbar-main py-6">
        <div className="w-4/5 mx-auto flex flex-row items-center justify-between">
          <Link href="/" className="flex items-center gap-5">
            <div className="brand-hex flex items-center justify-center">
              <Image src={logoSrc} alt="logo" width={60} height={60} priority />
            </div>
            <span className="text-white uppercase">{siteName}</span>
          </Link>
          <button type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <ul className="navbar-nav flex flex-row gap-10">
              {navItems.map((item) => {
                return (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
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
