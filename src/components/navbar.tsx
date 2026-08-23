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
            className="text-body text-foreground whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
        <div className="flex gap-2 items-center">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Image
              src="/hero/icon-linkedin.svg"
              alt=""
              width={12}
              height={12}
            />
          </a>
          <a href="#contact" aria-label="Bookmark">
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
