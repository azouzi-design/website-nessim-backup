import type { ServiceSlug } from "../services";
import type { ServiceBody, ServiceBodyMap } from "../service-body";
import gtmFoundation from "./gtm-foundation";
import personalBranding from "./personal-branding";
import contentStrategy from "./content-strategy";
import campaignDirection from "./campaign-direction";
import growthPartner from "./growth-partner";

const bodies: ServiceBodyMap = {
  "gtm-foundation": gtmFoundation,
  "personal-branding": personalBranding,
  "content-strategy": contentStrategy,
  "campaign-direction": campaignDirection,
  "growth-partner": growthPartner,
};

export function getServiceBody(slug: ServiceSlug): ServiceBody | undefined {
  return bodies[slug];
}
