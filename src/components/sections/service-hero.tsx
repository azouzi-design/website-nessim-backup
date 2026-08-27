import Navbar from "@/components/navbar";
import type { Service } from "@/data/services";

export default function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="flex flex-col items-center w-full bg-foreground rounded-b-2xl overflow-hidden">
      <div className="flex flex-col gap-25 items-center max-w-[1000px] w-full pb-25 px-5">
        <Navbar variant="dark" />

        <div className="relative flex flex-col items-center">
          <div className="flex items-start justify-center mb-3">
            {service.chips.map((chip) => {
              const isOnBrand = chip.className.includes("bg-foreground");
              return (
                <span
                  key={chip.label}
                  className={`flex h-5 items-center justify-center px-2 text-caption whitespace-nowrap ${
                    isOnBrand ? "bg-background text-foreground" : chip.className
                  }`}
                >
                  {chip.label}
                </span>
              );
            })}
          </div>

          <div className="flex flex-col gap-5 items-center">
            <h1 className="font-heading text-h1 text-background text-center">
              {service.title}
            </h1>
            <p className="text-body text-background-secondary text-center w-[420px] max-w-full">
              {service.description}
            </p>
          </div>

          <span className="absolute -top-3.5 right-0 flex h-5 items-center justify-center px-2 bg-background rotate-6">
            <span className="text-caption text-foreground whitespace-nowrap">
              {service.price}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
