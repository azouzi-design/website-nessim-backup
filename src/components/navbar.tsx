import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const socials = {
  light: {
    linkedin: "/hero/icon-linkedin.svg",
    bookmark: "/hero/icon-bookmark.svg",
  },
  dark: {
    linkedin: "/hero/icon-linkedin-white.svg",
    bookmark: "/hero/icon-bookmark-white.svg",
  },
};

export default function Navbar({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const textClass = variant === "dark" ? "text-background" : "text-foreground";
  const icons = socials[variant];

  return (
    <nav className="flex flex-col items-center px-2.5 py-5 w-full">
      <div className="flex flex-wrap gap-x-8 gap-y-2 max-mobile:gap-x-4 items-center justify-center w-full">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-body ${textClass} whitespace-nowrap transition-opacity duration-150 hover:opacity-90 active:opacity-70`}
          >
            {link.label}
          </Link>
        ))}
        <div className="flex gap-2 items-center">
          <a
            href="https://www.linkedin.com/in/nessim-bozrati/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity duration-150 hover:opacity-90 active:opacity-70"
          >
            <Image src={icons.linkedin} alt="" width={12} height={12} />
          </a>
          <a
            href="https://substack.com/@nessimbozrati"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            className="transition-opacity duration-150 hover:opacity-90 active:opacity-70"
          >
            <Image src={icons.bookmark} alt="" width={12} height={12} />
          </a>
        </div>
      </div>
    </nav>
  );
}
