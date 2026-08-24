import Image from "next/image";
import SpinningGlobe from "@/components/spinning-globe";
import RevealOnView from "@/components/reveal-on-view";

type Chip = { label: string; className: string };

type Service = {
  title: string;
  description: string;
  illustration: string;
  illustrationWidth: number;
  chips: Chip[];
};

const services: Service[] = [
  {
    title: "GTM Foundation",
    description:
      "Work 1-on-1 with me as your GTM co-pilot to build and execute your GTM foundation",
    illustration: "/services/illustration-gtm-foundation.svg",
    illustrationWidth: 103,
    chips: [
      { label: "$1,800", className: "bg-stroke text-foreground" },
      { label: "Growth", className: "bg-accent-bg-purple text-foreground" },
      { label: "GTM", className: "bg-accent-bg-teal text-foreground" },
      { label: "Sales", className: "bg-accent-bg-green text-foreground" },
    ],
  },
  {
    title: "Campaign Direction",
    description:
      "Plan and Execute creative campaigns for launches, seasonal promotions, product pr features drops and announcements",
    illustration: "/services/illustration-campaign-direction.svg",
    illustrationWidth: 121,
    chips: [
      { label: "$1,200", className: "bg-stroke text-foreground" },
      { label: "Marketing", className: "bg-accent-bg-blue text-foreground" },
      { label: "Sales", className: "bg-accent-bg-green text-foreground" },
      { label: "Content", className: "bg-accent-bg-amber text-foreground" },
    ],
  },
  {
    title: "Content Strategy",
    description:
      "A content system built around your business goals — not just a calendar, a machine that runs (social, emails and more)",
    illustration: "/services/illustration-content-strategy.svg",
    illustrationWidth: 97,
    chips: [
      { label: "$900", className: "bg-stroke text-foreground" },
      { label: "Content", className: "bg-accent-bg-amber text-foreground" },
      { label: "Marketing", className: "bg-accent-bg-blue text-foreground" },
      { label: "Branding", className: "bg-accent-bg-red text-foreground" },
    ],
  },
  {
    title: "Personal Branding",
    description:
      "Work 1-on-1 with me to build your personal brand system, positioning, story, and content that runs without you",
    illustration: "/services/illustration-personal-branding.svg",
    illustrationWidth: 140,
    chips: [
      { label: "$800", className: "bg-stroke text-foreground" },
      { label: "Branding", className: "bg-accent-bg-red text-foreground" },
      { label: "Marketing", className: "bg-accent-bg-blue text-foreground" },
      { label: "Content", className: "bg-accent-bg-amber text-foreground" },
    ],
  },
];

function ChipRow({ chips }: { chips: Chip[] }) {
  return (
    <div className="flex items-start justify-center flex-wrap">
      {chips.map((chip) => (
        <span
          key={chip.label}
          className={`flex h-5 items-center justify-center px-2 text-caption whitespace-nowrap ${chip.className}`}
        >
          {chip.label}
        </span>
      ))}
    </div>
  );
}

function ServiceCard({ service, delayMs = 0 }: { service: Service; delayMs?: number }) {
  return (
    <div className="group flex flex-col gap-10 items-center px-8 py-6 rounded-xl bg-background cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:opacity-80 active:-translate-y-0.5 active:opacity-50">
      <ChipRow chips={service.chips} />
      <RevealOnView delayMs={delayMs} variant="bounce">
        <Image
          src={service.illustration}
          alt=""
          width={service.illustrationWidth}
          height={120}
        />
      </RevealOnView>
      <div className="flex flex-col gap-3 items-center w-full">
        <div className="flex gap-1 items-center justify-center">
          <h4 className="font-heading text-h4 text-foreground whitespace-nowrap">
            {service.title}
          </h4>
          <Image
            src="/services/icon-arrow-right-up-circle.svg"
            alt=""
            width={16}
            height={16}
            className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
        <p className="text-body text-foreground-secondary text-center">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="flex flex-col items-center">
      <div className="flex flex-col gap-16 items-center max-w-[1000px] w-full px-5 py-13">
        <h2 className="font-heading text-h2 text-foreground text-center whitespace-pre-line">
          {"Four services, and one\ndeal where you get it all"}
        </h2>

        <div className="flex flex-col gap-2 items-center w-full">
          <div className="grid grid-cols-2 gap-2 w-full">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} delayMs={index * 100} />
            ))}
          </div>

          <div className="group flex flex-col gap-5 items-center w-full h-[252px] px-4 py-6 rounded-xl bg-background overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:opacity-80 active:-translate-y-0.5 active:opacity-50">
            <ChipRow
              chips={[
                { label: "$2,400", className: "bg-stroke text-foreground" },
                { label: "Bundle", className: "bg-foreground text-background" },
              ]}
            />
            <div className="flex flex-col gap-2 items-center">
              <div className="flex gap-1 items-center justify-center">
                <h4 className="font-heading text-h4 text-foreground whitespace-nowrap">
                  Growth Partner
                </h4>
                <Image
                  src="/services/icon-arrow-right-up-circle.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <p className="text-body text-foreground-secondary text-center max-w-[494px]">
                I join as your embedded growth partner — GTM, branding,
                content, campaigns — whatever the business needs, built
                together
              </p>
            </div>
            <RevealOnView delayMs={400} variant="bounce" className="relative w-full flex-1">
              <SpinningGlobe positionClassName="top-[-28px]" />
            </RevealOnView>
          </div>
        </div>
      </div>
    </section>
  );
}
