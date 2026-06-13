import Image from "next/image";

type SocialLink = {
  label: "Facebook" | "LinkedIn" | "X" | "TikTok";
  href: string;
  imageSrc?: string;
};

type FooterProps = {
  siteName?: string;
  description?: string;
  socials?: SocialLink[];
  address?: string;
  mapsUrl?: string;
  email?: string;
  phone?: string;
  schedule?: string;
  bottomText?: string;
};

const socialsDefault: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.instagram.com/max_integration_593/",
    imageSrc: "/img/facebook.png",
  },
  {
    label: "LinkedIn",
    href: "https://www.instagram.com/max_integration_593/",
    imageSrc: "/img/linkedin.png",
  },
  {
    label: "X",
    href: "https://www.instagram.com/max_integration_593/",
    imageSrc: "/img/x.png",
  },
  {
    label: "TikTok",
    href: "https://www.instagram.com/max_integration_593/",
    imageSrc: "/img/tik-tok.png",
  },
];

export function Footer({
  siteName = "Max Integration Security Systems",
  description = "Tu seguridad, nuestra prioridad. Soluciones personalizadas para hogares y empresas financieras.",
  socials = socialsDefault,
  address = "Quito - La Josefina, Ecuador",
  mapsUrl = "https://maps.app.goo.gl/kAVTgm2ums6YpmiZ9",
  email = "operaciones@maxintsystems.com",
  phone = "+593998127022",
  schedule = " Lunes a Viernes: 7am - 9pm",
  bottomText = "📹 Cámaras | 👆 Biometría | ⚡ Instalaciones",
}: FooterProps) {
  const whatsappMessage = encodeURIComponent(
    "Hola Maxintegration, vengo de tu pagina web y quiero saber mas de ti.",
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${whatsappMessage}`;

  return (
    <footer className="site-footer relative overflow-hidden">
      <div className="w-4/5 mx-auto py-20">
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 mb-8 md:col-span-4 md:mb-0">
            <p className="footer-brand uppercase">{siteName}</p>
            <p className="footer-text">{description}</p>
            <div className="flex gap-3 justify-center md:justify-start">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="footer-social"
                >
                  {social.imageSrc && (
                    <Image
                      src={social.imageSrc}
                      alt={social.label}
                      width={24}
                      height={24}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-6 md:col-span-2 flex flex-col items-center">
            <p className="footer-title mb-3">Empresa</p>
            <ul className="footer-links m-0">
              <li
                id="menu-item-40"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40"
              >
                <a href="http://maxintsystems.local/catalogo/">Catalogo</a>
              </li>
              <li
                id="menu-item-41"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-41"
              >
                <a href="http://maxintsystems.local/contacto/">Contacto</a>
              </li>
              <li
                id="menu-item-42"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-42"
              >
                <a href="http://maxintsystems.local/nosotros/">Nosotros</a>
              </li>
            </ul>{" "}
          </div>
          <div className="col-span-6 md:col-span-2 flex flex-col items-center">
            <p className="footer-title mb-3">Servicios</p>
            <ul
              id="menu-menu-servicios"
              className="list-unstyled footer-links m-0"
            >
              <li
                id="menu-item-43"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43"
              >
                <a href="http://maxintsystems.local/blog/">Blog</a>
              </li>
              <li
                id="menu-item-44"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-44"
              >
                <a href="http://maxintsystems.local/galeria/">Galeria</a>
              </li>
            </ul>
          </div>
          <div className="col-span-12 mt-8 md:mt-0 md:col-span-4 flex flex-col items-center md:items-end">
            <p className="footer-title mb-3">Contacto</p>
            <ul className="list-unstyled footer-contact m-0 flex flex-col items-center md:items-end">
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
                <a
                  href={`mailto:${email}`}
                  className="text-[#c0ccd6] transition hover:text-[#f0c050]"
                >
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
        <div className="footer-bottom mt-5 pt-5 flex flex-col md:flex-row justify-between">
          <p className="uppercase">
            {new Date().getFullYear()} {siteName}. Todos los derechos
            reservados.
          </p>
          <p className="normal-case">{bottomText}</p>
        </div>
      </div>
    </footer>
  );
}
