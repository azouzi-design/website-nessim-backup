import type { ServiceSlug } from "./services";

export type ServicePillar = {
  title: string;
  description: string;
};

export type ServiceResult = {
  title: string;
  description?: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceDisqualifier = {
  note: string;
  explanation?: string;
  ctaLabel: string;
};

export type ServiceBody = {
  problemsHeading: string;
  problems: string[];

  pillarsHeading: string;
  pillars: [ServicePillar, ServicePillar, ServicePillar];

  resultsHeading: string;
  results: ServiceResult[];

  topicsHeading: string;
  topicsSubheading: string;
  topics: string[];

  processHeading: string;
  process: ServiceProcessStep[];

  audienceHeading: string;
  audienceFits: string[];
  disqualifier?: ServiceDisqualifier;
};

export type ServiceBodyMap = Partial<Record<ServiceSlug, ServiceBody>>;
