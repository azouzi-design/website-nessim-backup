import Image from "next/image";
import StackedCards from "@/components/stacked-cards";

const stats = [
  {
    value: "1 → 13 markets",
    label: "full market expansion across Africa",
  },
  {
    value: "+6K users",
    label: "generated through growth operations",
  },
  {
    value: "+50 partnerships concluded",
    label: "telcos, consultancy firms, NGOs, universities",
  },
  {
    value: "+20 international events",
    label: "represented the brand at GITEX, Slush, BG Tech, and more",
  },
];

function ProjectCard() {
  return (
    <div className="flex flex-col gap-10 items-center w-full pt-10 pb-3 px-3 rounded-2xl bg-background border border-stroke shadow-md">
      <div className="flex flex-col gap-6 items-center">
        <Image
          src="/projects/logo-cynoia.svg"
          alt="Cynoia"
          width={93}
          height={28}
        />
        <p className="text-body text-foreground-secondary text-center max-w-[420px]">
          Cynoia is a B2B team-collaboration SaaS platform — project
          management, chat, video calls, file management, calendars, and
          notes in one suite. I led growth and GTM operations, taking the
          company from 1 to 13 African markets.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="flex flex-col gap-2 items-center justify-center py-6 rounded-xl bg-background-secondary"
          >
            <p className="font-heading text-h3 text-foreground text-center">
              {stat.value}
            </p>
            <p className="text-body text-foreground-secondary text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center">
      <div className="flex flex-col items-center max-w-[1000px] w-full px-5">
        <StackedCards
          title={
            <h2 className="font-heading text-h2 text-foreground text-center whitespace-pre-line">
              {"Projects that made it\nout of the slide deck"}
            </h2>
          }
          cards={[<ProjectCard key={0} />, <ProjectCard key={1} />, <ProjectCard key={2} />, <ProjectCard key={3} />]}
        />
      </div>
    </section>
  );
}
