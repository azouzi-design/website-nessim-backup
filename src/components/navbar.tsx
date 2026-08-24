import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center px-2.5 py-5 w-full">
      <div className="flex gap-8 items-center justify-center w-full">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-body text-foreground whitespace-nowrap transition-opacity duration-150 hover:opacity-90 active:opacity-70"
          >
            {link.label}
          </a>
        ))}
        <div className="flex gap-2 items-center">
          <a
            href="https://www.linkedin.com/in/nessim-bozrati/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity duration-150 hover:opacity-90 active:opacity-70"
          >
            <Image
              src="/hero/icon-linkedin.svg"
              alt=""
              width={12}
              height={12}
            />
          </a>
          <a
            href="https://substack.com/@nessimbozrati"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            className="transition-opacity duration-150 hover:opacity-90 active:opacity-70"
          >
            <Image
              src="/hero/icon-bookmark.svg"
              alt=""
              width={12}
              height={12}
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
