import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

type SocialLink = {
  label: "Facebook" | "LinkedIn" | "X" | "TikTok";
  href: string;
};

type FooterProps = {
  siteName?: string;
  description?: string;
  companyLinks?: FooterLink[];
  serviceLinks?: FooterLink[];
  socials?: SocialLink[];
  address?: string;
  mapsUrl?: string;
  email?: string;
  phone?: string;
  schedule?: string;
  bottomText?: string;
};

const companyLinksDefault: FooterLink[] = [
  { label: "Nosotros", href: "/empresa" },
  { label: "Galeria", href: "/galeria" },
  { label: "Contacto", href: "/contacto" },
];

const serviceLinksDefault: FooterLink[] = [
  { label: "Seguridad electronica", href: "/servicios/seguridad-electronica" },
  { label: "Integracion de sistemas", href: "/servicios/integracion" },
  { label: "Soporte tecnico", href: "/servicios/soporte" },
];

const socialsDefault: SocialLink[] = [
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "TikTok", href: "#" },
];

const socialIcons: Record<SocialLink["label"], string> = {
  Facebook:
    "M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.3v3h2.8v8h3.4z",
  LinkedIn:
    "M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.4 8h4.2v14H.4V8zm7.4 0h4v1.9h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.6V22H17v-6.9c0-1.6 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.6V22H7.8V8z",
  X: "M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.4L6.3 22H3.2l7.3-8.4L2.8 2h6.4l4.5 6.8L18.9 2zm-1.1 17.8h1.7L8.3 4.1H6.5l11.3 15.7z",
  TikTok:
    "M16.6 2c.4 3 2.1 4.8 5.1 5v3.4c-1.7.2-3.3-.4-5-1.4v6.4c0 8.1-8.8 10.6-12.4 4.8-2.3-3.8-.9-10.4 6.5-10.7v3.6c-.6.1-1.3.2-1.9.5-1.8.8-2.8 2.4-2.5 4.2.4 2 2.2 3.2 4.1 2.8 1.4-.3 2.3-1.3 2.5-2.7.1-.4.1-.9.1-1.3V2h3.5z",
};

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

export function Footer({
  siteName = "Max Integration Security Systems",
  description = "Innovacion, tecnologia y seguridad.",
  companyLinks = companyLinksDefault,
  serviceLinks = serviceLinksDefault,
  socials = socialsDefault,
  address = "Quito, Ecuador",
  mapsUrl = "#",
  email = "info@maxintsystems.com",
  phone = "+593 99 999 9999",
  schedule = "Lun-Vie: 9am - 6pm",
  bottomText = "Innovacion, tecnologia y seguridad.",
}: FooterProps) {
  const whatsappMessage = encodeURIComponent(
    "Hola Maxintegration, vengo de tu pagina web y quiero saber mas de ti.",
  );
  const whatsappUrl = `https://wa.me/${normalizePhone(phone)}?text=${whatsappMessage}`;

  return (
    <footer className="relative overflow-hidden border-t border-[#1e2228] bg-[#0a0b0d] text-[#c0ccd6]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,168,32,0.16),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-3 text-lg font-extrabold uppercase tracking-[0.09em] text-[#f0f2f4]">
              {siteName}
            </h2>
            <p className="mb-8 text-sm leading-7 text-[#8a9ba8]">{description}</p>

            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-[#e8a820]/45 text-[#f0c050] transition hover:-translate-y-1 hover:bg-[#e8a820] hover:text-[#0a0b0d]"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
                    <path d={socialIcons[social.label]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Empresa" links={companyLinks} />
          <FooterColumn title="Servicios" links={serviceLinks} />

          <div className="lg:text-right">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e8a820]">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm leading-6 text-[#8a9ba8]">
              <li>
                Direccion:{" "}
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c0ccd6] transition hover:text-[#f0c050]"
                >
                  {address}
                </a>
              </li>
              <li>
                Email:{" "}
                <a href={`mailto:${email}`} className="text-[#c0ccd6] transition hover:text-[#f0c050]">
                  {email}
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c0ccd6] transition hover:text-[#f0c050]"
                >
                  {phone}
                </a>
              </li>
              <li>Horario de atencion: {schedule}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-8 text-sm uppercase text-[#8a9ba8] md:flex-row">
          <p>{new Date().getFullYear()} {siteName}. Todos los derechos reservados.</p>
          <p className="normal-case">{bottomText}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="md:text-center">
      <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e8a820]">{title}</h3>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-[#c0ccd6] transition hover:text-[#f0c050]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
