import Image from "next/image";
import StackedCards from "@/components/stacked-cards";

type Stat = { value: string; label: string };

type Project = {
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  description: string;
  stats: Stat[];
};

const projects: Project[] = [
  {
    logo: "/projects/logo-cynoia.svg",
    logoAlt: "Cynoia",
    logoWidth: 93,
    logoHeight: 28,
    description:
      "Cynoia is a B2B team-collaboration SaaS platform — project management, chat, video calls, file management, calendars, and notes in one suite. I led growth and GTM operations, taking the company from 1 to 13 African markets.",
    stats: [
      { value: "1 → 13 markets", label: "full market expansion across Africa" },
      { value: "+6K users", label: "generated through growth operations" },
      {
        value: "+50 partnerships concluded",
        label: "telcos, consultancy firms, NGOs, universities",
      },
      {
        value: "+20 international events",
        label: "represented the brand at GITEX, Slush, BG Tech, and more",
      },
    ],
  },
  {
    logo: "/projects/logo-fabskill.svg",
    logoAlt: "Fabskill",
    logoWidth: 109,
    logoHeight: 28,
    description:
      "Fabskill is an AI-powered recruitment platform built around video interviews and smart candidate matching. I drove lead generation and brand growth through content, social, email, podcast, analytics, and product launch support.",
    stats: [
      { value: "+420%", label: "user acquisition (B2C)" },
      { value: "6M+ engagement", label: "across all platforms" },
      { value: "Community built", label: "from scratch around the brand" },
      { value: "+50%", label: "growth in B2B lead generation" },
    ],
  },
  {
    logo: "/projects/logo-farinas.svg",
    logoAlt: "Farinas",
    logoWidth: 106,
    logoHeight: 39,
    description:
      "Farinas is an AI-enabled B2B growth startup specializing in lead generation and market expansion. As growth advisor, I designed positioning, messaging, GTM strategy, and content strategy supporting a full go-to-market build from scratch.",
    stats: [
      { value: "+20K audience", label: "built within personal branding" },
      { value: "4 Saudi Arabia clients", label: "signed from a new ICP" },
      { value: "40%+ open rates", label: "on outbound campaigns" },
      {
        value: "+26%",
        label: "lead generation across 6 international markets",
      },
      {
        value: "Vital Voices Venture",
        label: "selected for AI for Impact — international credibility unlock",
      },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-10 items-center w-full pt-10 pb-3 px-3 rounded-2xl bg-background border border-stroke shadow-md">
      <div className="flex flex-col gap-6 items-center">
        <Image
          src={project.logo}
          alt={project.logoAlt}
          width={project.logoWidth}
          height={project.logoHeight}
        />
        <p className="text-body text-foreground-secondary text-center max-w-[420px]">
          {project.description}
        </p>
      </div>

      <div
        className={`grid gap-2 w-full ${
          project.stats.length === 5 ? "grid-cols-6" : "grid-cols-2"
        }`}
      >
        {project.stats.map((stat, index) => (
          <div
            key={stat.value}
            className={`flex flex-col gap-2 items-center justify-center py-6 rounded-xl bg-background-secondary ${
              project.stats.length === 5
                ? index < 3
                  ? "col-span-2"
                  : "col-span-3"
                : ""
            }`}
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

function TestimonialProjectCard() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full h-full pt-10 pb-3 px-3 rounded-2xl bg-background-secondary border border-stroke shadow-md">
      <div className="flex flex-col gap-6 items-center justify-center">
        <p className="font-heading text-h3 text-foreground text-center max-w-[786px]">
          Nessim brought real strategic clarity exactly when we needed
          it, clearer priorities and a stronger path for scaling the
          business. The impact showed up immediately in how we
          approached decisions.
        </p>
        <p className="text-body text-foreground-secondary whitespace-nowrap max-mobile:whitespace-normal max-mobile:text-center">
          Sabreen Morsey — CEO @ Farinas Marketing Services
        </p>
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
          cards={[
            ...projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            )),
            <TestimonialProjectCard key={projects.length} />,
          ]}
        />
      </div>
    </section>
  );
}
