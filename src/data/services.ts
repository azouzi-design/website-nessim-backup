export type ServiceSlug =
  | "gtm-foundation"
  | "campaign-direction"
  | "content-strategy"
  | "personal-branding"
  | "growth-partner";

export type ServiceChip = { label: string; className: string };

export type Service = {
  slug: ServiceSlug;
  title: string;
  description: string;
  price: string;
  chips: ServiceChip[];
};

export const services: Service[] = [
  {
    slug: "gtm-foundation",
    title: "GTM Foundation",
    description:
      "Work 1-on-1 with me as your GTM co-pilot to build and execute your GTM foundation",
    price: "$1,800",
    chips: [
      { label: "Growth", className: "bg-accent-bg-purple text-foreground" },
      { label: "GTM", className: "bg-accent-bg-teal text-foreground" },
      { label: "Sales", className: "bg-accent-bg-green text-foreground" },
    ],
  },
  {
    slug: "campaign-direction",
    title: "Campaign Direction",
    description:
      "Plan and Execute creative campaigns for launches, seasonal promotions, product pr features drops and announcements",
    price: "$1,200",
    chips: [
      { label: "Marketing", className: "bg-accent-bg-blue text-foreground" },
      { label: "Sales", className: "bg-accent-bg-green text-foreground" },
      { label: "Content", className: "bg-accent-bg-amber text-foreground" },
    ],
  },
  {
    slug: "content-strategy",
    title: "Content Strategy",
    description:
      "A content system built around your business goals — not just a calendar, a machine that runs (social, emails and more)",
    price: "$900",
    chips: [
      { label: "Content", className: "bg-accent-bg-amber text-foreground" },
      { label: "Marketing", className: "bg-accent-bg-blue text-foreground" },
      { label: "Branding", className: "bg-accent-bg-red text-foreground" },
    ],
  },
  {
    slug: "personal-branding",
    title: "Personal Branding",
    description:
      "Work 1-on-1 with me to build your personal brand system, positioning, story, and content that runs without you",
    price: "$800",
    chips: [
      { label: "Branding", className: "bg-accent-bg-red text-foreground" },
      { label: "Marketing", className: "bg-accent-bg-blue text-foreground" },
      { label: "Content", className: "bg-accent-bg-amber text-foreground" },
    ],
  },
  {
    slug: "growth-partner",
    title: "Growth Partner",
    description:
      "I join as your embedded growth partner — GTM, branding, content, campaigns — whatever the business needs, built together",
    price: "$2,400",
    chips: [{ label: "Bundle", className: "bg-foreground text-background" }],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
