import Image from "next/image";
import Navbar from "@/components/navbar";

const pills = [
  { icon: "/hero/icon-grow.svg", label: "grow" },
  { icon: "/hero/icon-scale.svg", label: "scale" },
  { icon: "/hero/icon-expand.svg", label: "expand" },
];

const stats = [
  { value: "+10K", label: "Users reached" },
  { value: "+13", label: "Markets Unlocked" },
  { value: "+13K", label: "Audience Built" },
  { value: "+5", label: "Years GTM" },
];

const partners = [
  { src: "/hero/logo-1-seedstars.svg", alt: "Seedstars", height: 15, width: 110 },
  { src: "/hero/logo-4-vc4a.svg", alt: "VC4A", height: 18, width: 62 },
  { src: "/hero/icon-technovation-leaf.png", alt: "Technovation", height: 44, width: 30 },
  {
    src: "/hero/logo-technovation-text.png",
    alt: "Technovation",
    height: 14,
    width: 120,
  },
  { src: "/hero/logo-5-cgiar.svg", alt: "CGIAR", height: 30, width: 82 },
  { src: "/hero/logo-6-unicef.svg", alt: "UNICEF", height: 21, width: 87 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center overflow-hidden"
    >
      <Image
        src="/hero/illustration.svg"
        alt=""
        width={800}
        height={801}
        className="absolute left-1/2 -top-15 -translate-x-1/2 pointer-events-none select-none"
        priority
      />
      <div className="relative flex flex-col gap-16 items-center max-w-[1000px] w-full pb-13 px-5">
        <Navbar />

        <div className="flex flex-col gap-25 items-center w-full">
          <div className="flex flex-col gap-13 items-center max-w-[632px]">
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-heading text-h1 text-foreground text-center">
                <span>Nessim</span>
                <span className="inline-block h-11 w-[71px] overflow-hidden rounded-full align-middle">
                  <Image
                    src="/hero/avatar.png"
                    alt=""
                    width={142}
                    height={88}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span>is a growth partner that helps founders</span>
              </div>
              <div className="flex gap-1 items-center justify-center flex-wrap">
                {pills.map((pill) => (
                  <div
                    key={pill.label}
                    className="flex gap-2 h-13 items-center justify-center px-4 rounded-full bg-background shadow-sm"
                  >
                    <Image src={pill.icon} alt="" width={32} height={32} />
                    <span className="font-heading text-[44px] leading-[1.1] tracking-[-0.88px] font-semibold text-foreground">
                      {pill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <a
                href="#contact"
                className="flex gap-2 h-10 items-center justify-center px-3 rounded-xl bg-foreground w-[200px]"
              >
                <Image
                  src="/hero/icon-book-call.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                <span className="text-button text-background whitespace-nowrap">
                  Book a Call
                </span>
              </a>
              <a
                href="#contact"
                className="flex gap-2 h-10 items-center justify-center px-3 rounded-xl bg-primary-blue w-[200px]"
              >
                <Image
                  src="/hero/icon-send-dm.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                <span className="text-button text-background whitespace-nowrap">
                  Send a DM
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start w-full">
            <div className="flex gap-2 h-[140px] items-stretch w-full">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-1 flex-col gap-2 items-center justify-center px-3 py-4 rounded-xl bg-background"
                >
                  <p className="font-heading text-h2 text-foreground text-center whitespace-nowrap">
                    {stat.value}
                  </p>
                  <p className="text-body text-foreground-secondary whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6 items-center justify-center h-[200px] w-full p-6 rounded-xl bg-background">
              <p className="font-heading text-h3 text-foreground text-center max-w-[786px]">
                Nessim helped us find a clearer voice for the brand. The
                refresh made everything feel warmer, more consistent and
                easier for customers to understand.
              </p>
              <p className="text-body text-foreground-secondary whitespace-nowrap">
                Sabreen Morsey — CEO @ Farinas Marketing Services
              </p>
            </div>

            <div className="flex gap-2 h-[140px] items-center w-full">
              {partners.map((logo) => (
                <div
                  key={logo.alt + logo.src}
                  className="flex flex-1 h-full items-center justify-center px-1 py-4 rounded-xl bg-background"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
