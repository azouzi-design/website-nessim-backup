import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/sections/service-hero";
import ServiceBody from "@/components/sections/service-body";
import CopyrightYear from "@/components/copyright-year";
import { getServiceBySlug, services } from "@/data/services";
import { getServiceBody } from "@/data/service-bodies";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} — Nessim Bozrati`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const body = getServiceBody(service.slug);

  return (
    <main>
      <ServiceHero service={service} />
      {body && <ServiceBody body={body} />}
      <div className="flex flex-col items-center">
        <div className="flex h-[50px] items-center justify-center px-2.5 py-4 w-full max-w-[1000px]">
          <p className="text-body text-foreground-secondary text-center whitespace-nowrap">
            ©<CopyrightYear /> Nessim Bozrati
          </p>
        </div>
      </div>
    </main>
  );
}
