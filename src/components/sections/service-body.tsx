import Image from "next/image";
import type { ServiceBody as ServiceBodyData } from "@/data/service-body";
import { CheckIcon, CheckIconInverse, XIcon } from "@/components/service-icons";

type CtaVariant = "primary" | "secondary" | "onDark";

const ctaFill: Record<CtaVariant, string> = {
  primary: "bg-foreground text-background",
  secondary: "bg-primary-blue text-background",
  onDark: "bg-background text-foreground",
};

const ctaIcon: Record<CtaVariant, string> = {
  primary: "/hero/icon-book-call.svg",
  secondary: "/hero/icon-send-dm.svg",
  onDark: "/hero/icon-book-call-dark.svg",
};

function CtaLink({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: CtaVariant;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex gap-2 h-10 items-center justify-center px-3 rounded-xl w-[200px] max-mobile:w-[144px] transition-opacity duration-150 hover:opacity-90 active:opacity-70 ${ctaFill[variant]}`}
    >
      <Image src={ctaIcon[variant]} alt="" width={16} height={16} />
      <span className="text-button whitespace-nowrap">{label}</span>
    </a>
  );
}

const BOOK_CALL_HREF = "https://cal.com/nessim-bozrati-nea7ld/30min";
const DM_HREF = "https://www.linkedin.com/in/nessim-bozrati/";

function ProblemsSection({
  heading,
  problems,
}: {
  heading: string;
  problems: string[];
}) {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col gap-16 items-center max-w-[1000px] w-full px-5 py-13">
        <h2 className="font-heading text-h2 text-foreground text-center max-w-[640px]">
          {heading}
        </h2>
        <div className="grid grid-cols-2 max-mobile:grid-cols-1 gap-2 w-full">
          {problems.map((problem) => (
            <div
              key={problem}
              className="flex gap-3 items-start bg-background rounded-xl p-4"
            >
              <XIcon className="shrink-0 mt-0.5" />
              <p className="text-body text-foreground">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarsSection({
  heading,
  pillars,
}: {
  heading: string;
  pillars: ServiceBodyData["pillars"];
}) {
  return (
    <section className="flex flex-col items-center bg-background-secondary">
      <div className="flex flex-col gap-16 items-center max-w-[1000px] w-full px-5 py-13">
        <h2 className="font-heading text-h2 text-foreground text-center">{heading}</h2>
        <div className="grid grid-cols-3 max-tablet:grid-cols-1 gap-2 w-full">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col gap-2 bg-background rounded-xl px-5 py-6"
            >
              <h4 className="font-heading text-h4 text-foreground">{pillar.title}</h4>
              <p className="text-body text-foreground-secondary">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsSection({
  heading,
  results,
}: {
  heading: string;
  results: ServiceBodyData["results"];
}) {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col gap-16 items-center max-w-[1000px] w-full px-5 py-13">
        <h2 className="font-heading text-h2 text-foreground text-center">{heading}</h2>
        <div className="w-full bg-background rounded-2xl p-10 max-tablet:p-7 max-mobile:p-5">
          <div className="grid grid-cols-2 max-tablet:grid-cols-1 gap-x-8 gap-y-5">
            {results.map((result) => (
              <div key={result.title} className="flex gap-3 items-start">
                <CheckIcon className="shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <p className="text-body text-foreground font-medium">{result.title}</p>
                  {result.description && (
                    <p className="text-body text-foreground-secondary">
                      {result.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TopicsSection({
  heading,
  subheading,
  topics,
}: {
  heading: string;
  subheading: string;
  topics: string[];
}) {
  return (
    <section className="flex flex-col items-center bg-background-secondary">
      <div className="flex flex-col gap-16 items-center max-w-[1000px] w-full px-5 py-13">
        <div className="flex flex-col gap-2 items-center text-center max-w-[560px]">
          <h2 className="font-heading text-h2 text-foreground">{heading}</h2>
          <p className="text-body text-foreground-secondary">{subheading}</p>
        </div>
        <div className="flex flex-col gap-6 items-center w-full">
          <div className="flex flex-wrap gap-2 justify-center">
            {topics.map((topic) => (
              <span
                key={topic}
                className="flex items-center px-4 h-10 rounded-full bg-background text-body text-foreground whitespace-nowrap"
              >
                {topic}
              </span>
            ))}
          </div>
          <CtaLink href={BOOK_CALL_HREF} label="Book a Call" variant="primary" />
        </div>
      </div>
    </section>
  );
}

function ProcessSection({
  heading,
  steps,
}: {
  heading: string;
  steps: ServiceBodyData["process"];
}) {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col gap-16 items-center max-w-[1000px] w-full px-5 py-13">
        <h2 className="font-heading text-h2 text-foreground text-center">{heading}</h2>
        <div className="flex flex-col gap-2 w-full">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-6 max-mobile:gap-4 items-start bg-background rounded-xl p-6 max-mobile:p-5"
            >
              <span className="font-heading text-[36px] max-mobile:text-[28px] leading-none text-foreground opacity-30 min-w-[56px] max-mobile:min-w-10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1.5 pt-1">
                <h4 className="font-heading text-h4 text-foreground">{step.title}</h4>
                <p className="text-body text-foreground-secondary">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection({
  heading,
  fits,
  disqualifier,
}: {
  heading: string;
  fits: string[];
  disqualifier?: ServiceBodyData["disqualifier"];
}) {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col gap-10 items-center max-w-[1000px] w-full px-5 py-13">
        <div className="flex flex-col gap-8 items-center w-full bg-foreground rounded-2xl px-10 py-12 max-mobile:px-5 max-mobile:py-9">
          <h2 className="font-heading text-h2 text-background text-center">{heading}</h2>
          <div className="flex flex-col gap-4 w-full max-w-[640px]">
            {fits.map((fit) => (
              <div key={fit} className="flex gap-3 items-start">
                <CheckIconInverse className="shrink-0 mt-0.5" />
                <p className="text-body text-background-secondary">{fit}</p>
              </div>
            ))}
          </div>
          <CtaLink href={BOOK_CALL_HREF} label="Book a Call" variant="onDark" />
        </div>

        {disqualifier && (
          <div className="flex flex-col gap-4 items-center text-center max-w-[560px]">
            <p className="text-body text-foreground">{disqualifier.note}</p>
            {disqualifier.explanation && (
              <p className="text-body text-foreground-secondary">{disqualifier.explanation}</p>
            )}
            <CtaLink href={DM_HREF} label={disqualifier.ctaLabel} variant="secondary" />
          </div>
        )}
      </div>
    </section>
  );
}

export default function ServiceBody({ body }: { body: ServiceBodyData }) {
  return (
    <>
      <ProblemsSection heading={body.problemsHeading} problems={body.problems} />
      <PillarsSection heading={body.pillarsHeading} pillars={body.pillars} />
      <ResultsSection heading={body.resultsHeading} results={body.results} />
      <TopicsSection
        heading={body.topicsHeading}
        subheading={body.topicsSubheading}
        topics={body.topics}
      />
      <ProcessSection heading={body.processHeading} steps={body.process} />
      <AudienceSection
        heading={body.audienceHeading}
        fits={body.audienceFits}
        disqualifier={body.disqualifier}
      />
    </>
  );
}
