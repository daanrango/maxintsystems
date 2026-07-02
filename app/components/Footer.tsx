import Link from "next/link";

type SubMenu = {
  id: number;
  title: string;
  items: SubMenuItem[];
};

type SubMenuItem = {
  label: string;
  href: string;
};

const subMenuEmpresa: SubMenu[] = [
  {
    id: 1,
    title: "Empresa",
    items: [
      { label: "Catálogo", href: "/catalogo" },
      { label: "Contacto", href: "/contacto" },
      { label: "Nosotros", href: "/nosotros" },
    ],
  },
];

const subMenuServices: SubMenu[] = [
  {
    id: 1,
    title: "Servicios",
    items: [{ label: "Contacto", href: "/contacto" }],
  },
];

export function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden">
      <div className="w-4/5 mx-auto pt-20">
        <div className="grid grid-cols-12">
          <div className="col-span-12 mb-8 md:col-span-3 md:mb-0">
            <h2 className="footer-brand">MAXINTSYSTEMS</h2>
            <p className="footer-text">
              Tu seguridad, nuestra prioridad. Soluciones personalizadas para
              hogares y empresas financieras.
            </p>
            <div className="flex justify-between gap-0 md:justify-start md:gap-3">
              <a
                href="https://www.instagram.com/max_integration_593/"
                className="footer-social"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.3v3h2.8v8h3.4z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/max_integration_593/"
                className="footer-social"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.4 8h4.2v14H.4V8zm7.4 0h4v1.9h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.6V22H17v-6.9c0-1.6 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.6V22H7.8V8z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/max_integration_593/"
                className="footer-social"
                target="_blank"
                rel="noopener"
                aria-label="X"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.4L6.3 22H3.2l7.3-8.4L2.8 2h6.4l4.5 6.8L18.9 2zm-1.1 17.8h1.7L8.3 4.1H6.5l11.3 15.7z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/max_integration_593/"
                className="footer-social"
                target="_blank"
                rel="noopener"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16.6 2c.4 3 2.1 4.8 5.1 5v3.4c-1.7.2-3.3-.4-5-1.4v6.4c0 8.1-8.8 10.6-12.4 4.8-2.3-3.8-.9-10.4 6.5-10.7v3.6c-.6.1-1.3.2-1.9.5-1.8.8-2.8 2.4-2.5 4.2.4 2 2.2 3.2 4.1 2.8 1.4-.3 2.3-1.3 2.5-2.7.1-.4.1-.9.1-1.3V2h3.5z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-6 my-8 md:col-span-3 md:my-0">
            {subMenuEmpresa.map((menu) => (
              <div className="text-center" key={menu.id}>
                <h3 className="footer-title">{menu.title}</h3>
                <ul
                  id={`menu-menu-${menu.title.toLowerCase()}`}
                  className="footer-links"
                >
                  {menu.items.map((item, index) => (
                    <li
                      key={index}
                      id={`menu-item-${item.label.toLowerCase()}`}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="col-span-6 my-8 md:col-span-3 md:my-0">
            {subMenuServices.map((menu) => (
              <div className="text-center" key={menu.id}>
                <h3 className="footer-title">{menu.title}</h3>
                <ul
                  id={`menu-menu-${menu.title.toLowerCase()}`}
                  className="footer-links"
                >
                  {menu.items.map((item, index) => (
                    <li
                      key={index}
                      id={`menu-item-${item.label.toLowerCase()}`}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="text-center md:text-end">
              <h3 className="footer-title">Contacto</h3>
              <ul className="footer-contact">
                <li>
                  Dirección:
                  <a
                    href="https://maps.app.goo.gl/sKi2vLshqeqPBXgq7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Quito - La Josefina, Ecuador
                  </a>
                </li>
                <li>
                  Email:
                  <a href="mailto:operaciones@maxintsystems.com">
                    {" "}
                    operaciones@maxintsystems.com
                  </a>
                </li>
                <li>
                  WhatsApp:
                  <a
                    href="https://wa.me/593968777187?text=Hola%20Maxintegration%2C%20vengo%20de%20tu%20p%C3%A1gina%20web%20y%20quiero%20saber%20m%C3%A1s%20de%20ti."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +593 968777187
                  </a>
                </li>
                <li>Horario de atención: Lun a Vie: 7am - 9pm </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-5 py-5 flex flex-col md:flex-row justify-between">
          <p className="text-uppercase">
            © {new Date().getFullYear()} MAXINTSYSTEMS. Todos los derechos
            reservados.
          </p>
          <p>📹 Cámaras | 👆 Biometría | ⚡ Instalaciones </p>
        </div>
      </div>
    </footer>
  );
}
