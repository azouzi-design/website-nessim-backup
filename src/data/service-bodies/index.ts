import type { ServiceSlug } from "../services";
import type { ServiceBody, ServiceBodyMap } from "../service-body";
import gtmFoundation from "./gtm-foundation";

const bodies: ServiceBodyMap = {
  "gtm-foundation": gtmFoundation,
};

export function getServiceBody(slug: ServiceSlug): ServiceBody | undefined {
  return bodies[slug];
}
