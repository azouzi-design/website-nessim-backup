import Image from "next/image";
import Link from "next/link";
import SpinningGlobe from "@/components/spinning-globe";
import RevealOnView from "@/components/reveal-on-view";
import { services as serviceData, type ServiceSlug } from "@/data/services";

type Chip = { label: string; className: string };

type ServiceCardData = {
  slug: ServiceSlug;
  title: string;
  description: string;
  illustration: string;
  illustrationWidth: number;
  chips: Chip[];
};

const presentation: Record<
  Exclude<ServiceSlug, "growth-partner">,
  { illustration: string; illustrationWidth: number }
> = {
  "gtm-foundation": {
    illustration: "/services/illustration-gtm-foundation.svg",
    illustrationWidth: 103,
  },
  "campaign-direction": {
    illustration: "/services/illustration-campaign-direction.svg",
    illustrationWidth: 121,
  },
  "content-strategy": {
    illustration: "/services/illustration-content-strategy.svg",
    illustrationWidth: 97,
  },
  "personal-branding": {
    illustration: "/services/illustration-personal-branding.svg",
    illustrationWidth: 140,
  },
};

const services: ServiceCardData[] = serviceData
  .filter((service): service is typeof service & { slug: Exclude<ServiceSlug, "growth-partner"> } =>
    service.slug !== "growth-partner"
  )
  .map((service) => ({
    slug: service.slug,
    title: service.title,
    description: service.description,
    illustration: presentation[service.slug].illustration,
    illustrationWidth: presentation[service.slug].illustrationWidth,
    chips: [
      { label: service.price, className: "bg-stroke text-foreground" },
      ...service.chips,
    ],
  }));

const bundle = serviceData.find((service) => service.slug === "growth-partner")!;

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

function ServiceCard({ service, delayMs = 0 }: { service: ServiceCardData; delayMs?: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col gap-10 items-center px-8 py-6 rounded-xl bg-background cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:opacity-80 active:-translate-y-0.5 active:opacity-50"
    >
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
    </Link>
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
          <div className="grid grid-cols-2 max-mobile:grid-cols-1 gap-2 w-full">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} delayMs={index * 100} />
            ))}
          </div>

          <Link
            href={`/services/${bundle.slug}`}
            className="group flex flex-col gap-5 items-center w-full h-[252px] px-4 py-6 rounded-xl bg-background overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:opacity-80 active:-translate-y-0.5 active:opacity-50"
          >
            <ChipRow
              chips={[
                { label: bundle.price, className: "bg-stroke text-foreground" },
                ...bundle.chips,
              ]}
            />
            <div className="flex flex-col gap-2 items-center">
              <div className="flex gap-1 items-center justify-center">
                <h4 className="font-heading text-h4 text-foreground whitespace-nowrap">
                  {bundle.title}
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
                {bundle.description}
              </p>
            </div>
            <RevealOnView delayMs={400} variant="bounce" className="relative w-full flex-1">
              <SpinningGlobe positionClassName="top-[-28px]" />
            </RevealOnView>
          </Link>
        </div>
      </div>
    </section>
  );
}
